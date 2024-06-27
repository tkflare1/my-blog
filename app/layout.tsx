import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uncommon Blog",
  description: "Latest news and updates from the Uncommon team."
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
        <meta name="description" content={metadata.description ?? undefined} />
      </head>
      <body className={`${inter.className} bg-white mx-auto px-5 sm:px-6 lg:px-8`}>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
