import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#43888f",
        dark: "#212529",
      },
      secondary: {
        main: "#fff",
      },
      background: {
        paper: "#d9d9d9",
      },
    },
    typography: {
      h1: {
        color: "primary.dark",
        fontFamily: "Your Dream",
        fontSize: 105,
      },
      h2: {
        color: "primary.dark",
        fontFamily: "Your Dream",
        fontSize: 85,
      },
      h3: {
        color: "primary.dark",
        fontFamily: "Your Dream",
        fontSize: 70,
      },
      h4: {
        color: "primary.dark",
        fontFamily: "Lora",
        fontWeight: "bold",
      },
      h5: {
        color: "primary.dark",
        fontFamily: "Lora",
        fontWeight: "bold",
      },
      h6: {
        color: "primary.dark",
        fontFamily: "Lora",
        fontWeight: "bold",
        fontSize: 17,
      },
      body2: {
        color: "primary.dark",
        fontFamily: "Lora",
        fontWeight: "bold",
      },
    },
  })
);

export default theme;
