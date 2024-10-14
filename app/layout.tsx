import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next.js Template - TypeScript & Tailwind CSS",
  description:
    "A starter template built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI components.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN",
    "React",
    "Frontend Template",
  ],

  openGraph: {
    title: "Next.js Template - TypeScript & Tailwind CSS",
    description:
      "Jumpstart your project with this feature-rich template powered by modern tools.",
    url: "https://techqul.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Template - TypeScript & Tailwind CSS",
    description:
      "Accelerate your development with this template powered by modern frontend technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
