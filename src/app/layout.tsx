import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Background from "@/components/Background/Background";

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
        <Background />
        {children}
      </body>
    </html>
  );
}
