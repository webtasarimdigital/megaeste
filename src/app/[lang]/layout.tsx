import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { getDictionary } from "../../get-dictionary";

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(lang as 'tr' | 'en');
  return {
    title: dict.seo?.title || "Megaeste Estetik ve Plastik Cerrahi",
    description: dict.seo?.description || "Türkiye'nin Lider Estetik Kliniği | Megaeste",
    alternates: {
      languages: {
        'tr': '/',
        'en': '/en',
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingActionButtons lang={params.lang} />
      </body>
    </html>
  );
}
