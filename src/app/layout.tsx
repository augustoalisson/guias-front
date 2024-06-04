import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emissão de Guias",
  description: "Aplicação para emissão de guias utilizando NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between w-full`}>
        <header className="w-full">
          <Navbar />
        </header>
        <main className="min-h-screen p-3 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
