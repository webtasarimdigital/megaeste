import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const isFormData = request.headers.get('content-type')?.includes('multipart/form-data');
    let data: Record<string, string> = {};
    const attachments: { key: string; file: File }[] = [];
    
    if (isFormData) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        if (value instanceof File) {
          attachments.push({ key, file: value });
        } else {
          data[key] = value.toString();
        }
      });
    } else {
      const jsonData = await request.json();
      data = jsonData as Record<string, string>;
    }

    const {
      formType = 'İletişim Formu',
      name,
      email,
      phone,
      message,
      department,
      date,
      position,
    } = data;

    // Build the email content based on fields
    let htmlContent = `<h2>Yeni bir form başvurusu aldınız: ${formType}</h2>`;
    if (name) htmlContent += `<p><strong>Ad Soyad:</strong> ${name}</p>`;
    if (email) htmlContent += `<p><strong>E-posta:</strong> ${email}</p>`;
    if (phone) htmlContent += `<p><strong>Telefon:</strong> ${phone}</p>`;
    if (department) htmlContent += `<p><strong>Bölüm/Hizmet:</strong> ${department}</p>`;
    if (date) htmlContent += `<p><strong>Tarih:</strong> ${date}</p>`;
    if (position) htmlContent += `<p><strong>Başvurulan Pozisyon:</strong> ${position}</p>`;
    if (message) htmlContent += `<p><strong>Mesaj:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`;

    const mailAttachmentsList = await Promise.all(attachments.map(async (att) => {
      const buffer = await att.file.arrayBuffer();
      return {
        filename: att.file.name,
        content: Buffer.from(buffer),
      };
    }));

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.turkticaret.net',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"Megaeste Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email, 
      subject: `Web Sitesi ${formType} Bildirimi - ${name || 'İsimsiz'}`,
      html: htmlContent,
      attachments: mailAttachmentsList.length > 0 ? mailAttachmentsList : undefined,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error: unknown) {
    console.error('Email send error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error sending email';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
