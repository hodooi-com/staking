import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starter Kit",
  description: "Starter kit for a Liteflow application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers cookie={(await headers()).get("cookie")}>
          <div className="flex min-h-screen flex-col">
            <main className="flex flex-grow items-center justify-center px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <footer className="flex items-center justify-center gap-1 py-8 text-center text-sm text-muted-foreground">
              Powered by{" "}
              <Link href="https://liteflow.com">
                <Image
                  src="/liteflow.svg"
                  alt="Liteflow Logo"
                  width={96}
                  height={24}
                />
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
