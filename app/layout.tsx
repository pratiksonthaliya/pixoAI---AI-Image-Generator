import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "pixoAI - AI Image Generator",
  description: "PixoAI is a cutting-edge AI-powered platform that turns your words into visually captivating images. Effortlessly generate stunning visuals from text, powered by advanced machine learning and Next.js for seamless performance.",
  openGraph: {
    title: "pixoAI - AI Image Generator",
    description: "PixoAI is a cutting-edge AI-powered platform that turns your words into visually captivating images. Effortlessly generate stunning visuals from text, powered by advanced machine learning and Next.js for seamless performance.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
