import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erick Barcelos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        <div
          className="w-[600px] h-[600px] transition-colors rounded-full blur-[100px]
       absolute -top-96 -left-40 -z-10 animate-colorChangePrimary bg-[rgb(255,0,72)]"
        />
        <div
          className="w-[600px] h-[600px] transition-colors rounded-full blur-[100px]
       absolute top-[600px] -right-60 -z-10 animate-colorChangeSecondary bg-[rgb(84,187,255)]"
        />
        {children}
      </body>
    </html>
  );
}
