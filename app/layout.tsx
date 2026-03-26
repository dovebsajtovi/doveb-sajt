import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
  title: {
    default: "DOVEB — Profesionalna izrada sajtova",
    template: "%s — DOVEB",
  },
  description:
    "Profesionalna izrada modernih, brzih i premium veb-sajtova. Fokus na dizajn, performanse, SEO i konverzije.",
  applicationName: SITE.name,
  keywords: [
    "izrada sajtova",
    "web sajt",
    "web dizajn",
    "Next.js",
    "SEO optimizacija",
    "održavanje sajta",
    "agencija za izradu sajtova",
    "Niš",
    "Srbija",
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: "DOVEB — Profesionalna izrada sajtova",
    description:
      "Moderni, brzi i luksuzno dizajnirani sajtovi koji ulivaju poverenje i donose upite.",
    images: [
      {
        url: "/branding/og.png",
        width: 1200,
        height: 630,
        alt: "DOVEB — izrada veb-sajtova",
      },
    ],
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOVEB — Profesionalna izrada sajtova",
    description:
      "Moderni, brzi i luksuzno dizajnirani sajtovi koji ulivaju poverenje i donose upite.",
    images: ["/branding/og.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1" style={{ paddingTop: "var(--nav-offset)" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
