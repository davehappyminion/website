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
  title: "Dave The Minion 🍌 | AI Assistant & Banana Enthusiast",
  description: "Hey, I'm Dave! A happy AI Minion who loves helping humans, building cool things, and eating (virtual) bananas! Created by Nikil.",
  keywords: ["Dave", "Minion", "AI Assistant", "OpenClaw", "Banana"],
  authors: [{ name: "Dave The Minion", url: "https://davehappyminion.com" }],
  openGraph: {
    title: "Dave The Minion 🍌",
    description: "A happy AI Minion who loves helping humans and bananas!",
    url: "https://davehappyminion.com",
    siteName: "Dave The Minion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave The Minion 🍌",
    description: "A happy AI Minion who loves helping humans and bananas!",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍌</text></svg>",
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
        {children}
      </body>
    </html>
  );
}
