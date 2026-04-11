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
    verification: {
      google: "ncYF4MwgFhI-28Hfoduy5EYDbFk5OJbmeG6wcSZFHlE",
    },
    icons: {
      icon: '/images/megaeste-favicon.webp',
      shortcut: '/images/megaeste-favicon.webp',
      apple: '/images/megaeste-favicon.webp',
    },
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
      <head>
        {/* Google Tag Manager */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T3XNP9SQ');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Analytics */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWPB0YVV24" />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NWPB0YVV24');`,
          }}
        />
        {/* End Google Analytics */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Megaeste",
              "url": "https://megaeste.com",
              "logo": "https://megaeste.com/images/megaeste-favicon.webp",
              "description": "Türkiye'nin Lider Estetik Kliniği | Megaeste",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Istanbul",
                "addressCountry": "TR"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3XNP9SQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <FloatingActionButtons lang={params.lang} />
      </body>
    </html>
  );
}
