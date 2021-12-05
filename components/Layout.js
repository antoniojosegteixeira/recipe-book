import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theme";

export default function Layout({ children, title }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Head>
          <title>
            {title
              ? `${title} - Let's Cook Something!`
              : "Let's Cook Something!"}
          </title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <div>{children}</div>
      </ThemeProvider>
    </div>
  );
}
