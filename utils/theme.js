import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#43888f",
      },
      secondary: {
        main: green[500],
      },
      background: {
        paper: "#d9d9d9",
      },
    },
    typography: {
      h2: {
        color: "#212529",
        fontFamily: "Handy Quomte",
      },
      h3: {
        color: "#212529",
      },
      h4: {
        color: "#212529",
      },
      h5: {
        color: "#212529",
        fontFamily: "Lora",
        fontWeight: "bold",
      },
    },
  })
);

export default theme;
