import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  // Define your custom theme variables here
  palette: {
    primary: {
      main: "#E4E1DD",
    },
    secondary: {
      main: "#F8F9F4",
    },
    background: {
      default: "#fff", // Replace this with your desired body background color
    },
  },
  typography: {
    fontFamily: [
      "Cormorant Garamond",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  // Other theme configurations if needed
});

export default customTheme;
