import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/sections/Nav";
import "./globals.css";
import ScrollBackground from "@/components/sections/ScrollBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Full Stack Developer",
  description: "Portfolio showcasing backend systems, projects, and resume.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="text-text-primary font-display">
        <ScrollBackground/>
        <Nav />
        <div className="md:pl-56 pb-16 md:pb-0">{children}</div>
      </body>
    </html>
  );
}