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
      default: "#E4E1DD", // Replace this with your desired body background color
    },
  },
  typography: {
    fontFamily: "Times New Roman, sans-serif", // Replace 'Your-Desired-Font-Family' with your preferred font family name
  },
  // Other theme configurations if needed
});

export default customTheme;
