import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Bluero",
  description: "This is the official page of the Bluero app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        
       
        </body>
    </html>
 
  );
}
