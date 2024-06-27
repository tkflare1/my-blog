import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uncommon Blog",
  description: "Latest news and updates from the Uncommon team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Uncommon Blog</title>
        <meta name="description" content="Latest news and updates from the Uncommon team." />
      </head>
      <body className={`${inter.className} bg-white`}>
        <NavBar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
