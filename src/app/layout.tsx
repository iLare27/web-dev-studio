import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitaurus - Студия веб-разработки",
  description: "Vitaurus - это студия веб-разработки, специализирующаяся на создании качественных и инновационных веб-приложений, сайтов и решений по автомотизации.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#1c1917] text-gray-300">
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
