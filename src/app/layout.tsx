import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Singh | Web Developer",
  description:
    "Shivam Singh is a BCA student at the University of Allahabad exploring web development, AI-assisted development and practical software projects.",
  keywords: [
    "Shivam Singh",
    "Web Developer",
    "BCA Student",
    "University of Allahabad",
    "Frontend Developer",
    "AcademIQ",
    "JanSetu AI",
    "Bhoomi Intel",
    "Prayagraj",
  ],
  authors: [{ name: "Shivam Singh", url: "https://github.com/Shivam3635" }],
  creator: "Shivam Singh",
  metadataBase: new URL("https://github.com/Shivam3635"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shivam Singh | Web Developer",
    description:
      "BCA student at the University of Allahabad exploring web development, AI-assisted development, and practical software projects.",
    siteName: "Shivam Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Singh | Web Developer",
    description:
      "BCA student at the University of Allahabad exploring web development, AI-assisted development, and practical software projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased bg-tech-grid">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
