import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Background from "@/components/Background/Background";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Erick Barcelos",
};

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Background />
        {children}
      </body>
    </html>
  );
}
