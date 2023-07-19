import Image from "next/image";
import Header from "./components/header";
import { ThemeProvider, createTheme } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1>J2911 Realty</h1>
    </main>
  );
}
