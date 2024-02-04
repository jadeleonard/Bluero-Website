import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

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
    <ClerkProvider
    appearance={{
      baseTheme: dark
    }}
  >
    <html lang="en">
      <body className={inter.className}>
     
     
        {children}
        
       
        </body>
    </html>
     </ClerkProvider>
  );
}
