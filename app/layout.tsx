import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const poppins = Poppins({
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bazario",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={poppins.className}>
      <body
        className={`w-screen h-full flex flex-col items-center bg-secondary ${poppins.variable}`}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
