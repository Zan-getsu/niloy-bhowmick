import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
