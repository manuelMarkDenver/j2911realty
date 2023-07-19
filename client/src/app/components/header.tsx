"use client";

import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";

import customTheme from "../styling/customTheme";
import TopHeader from "./(header components)/top-header";
import BottomHeader from "./(header components)/bottom-header";

export default function Header() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <TopHeader />
        <BottomHeader />
      </ThemeProvider>
    </>
  );
}
