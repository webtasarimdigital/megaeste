import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Chatbot from "@/components/Chatbot";

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

export const metadata: Metadata = {
  title: "Megaeste Estetik ve Plastik Cerrahi",
  description: "Türkiye'nin Lider Estetik Kliniği | Megaeste",
};

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
        <Chatbot />
      </body>
    </html>
  );
}
