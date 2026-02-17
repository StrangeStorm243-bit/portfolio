import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niranjan Shankar — Founder & Builder",
  description:
    "I build systems that surface what's actually happening, not what the numbers say is happening. Co-Founder of SalesSense. Founding Data Scientist at SitSense.",
  keywords: [
    "Niranjan Shankar",
    "founder",
    "SalesSense",
    "SitSense",
    "Spectra",
    "data science",
    "product builder",
    "YC",
    "startup",
    "ML engineer",
  ],
  authors: [{ name: "Niranjan Shankar" }],
  openGraph: {
    title: "Niranjan Shankar — Founder & Builder",
    description:
      "I build systems that surface what's actually happening, not what the numbers say is happening.",
    type: "website",
    locale: "en_US",
    siteName: "Niranjan Shankar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan Shankar — Founder & Builder",
    description:
      "I build systems that surface what's actually happening, not what the numbers say is happening.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
