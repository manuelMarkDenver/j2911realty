"use client";

import { CssBaseline } from "@mui/material";

import Header from "./components/header";
import Footer from "./components/footer";

import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import customTheme from "./styling/customTheme";

import { Great_Vibes } from "next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";

// If loading a variable font, you don't need to specify the font weight
const great_vibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${great_vibes.variable}`}>
      <body>
        <ParallaxProvider>
          <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ParallaxProvider>
      </body>
    </html>
  );
}
