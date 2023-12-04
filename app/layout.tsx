import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URL Shortner",
  description: "Say goodbye to lengthy URLs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        <Providers>
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
