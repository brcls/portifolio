import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/molecules/Header";
import { Roboto } from "next/font/google";
import Background from "@/components/atoms/Background/Background";

export const metadata: Metadata = {
  title: "Erick Barcelos",
};

const roboto = Roboto({
  weight: "700",
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
