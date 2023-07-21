'use client'

import { CssBaseline } from "@mui/material";

import Header from "./components/header";
import Footer from "./components/footer";

import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import customTheme from "./styling/customTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
