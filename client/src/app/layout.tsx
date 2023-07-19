import { CssBaseline } from "@mui/material";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J2911 Realty",
  description: "J2911 Realty Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
