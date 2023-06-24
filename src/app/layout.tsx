import { Metadata } from "next";
import "./globals.scss";
import { Inter } from "next/font/google";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Читозаврик",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
    
  );
}
