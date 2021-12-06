import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#c2d1cf",
      },
      secondary: {
        main: green[500],
      },
      background: {
        paper: "#d9d9d9",
      },
    },
    typography: {
      h3: {
        color: "#212529",
      },
      h4: {
        color: "#212529",
      },
    },
  })
);

export default theme;
