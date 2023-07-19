import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  // Define your custom theme variables here
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
  },
  // Other theme configurations if needed
});

export default customTheme;
