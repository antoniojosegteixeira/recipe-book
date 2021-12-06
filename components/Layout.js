import React from "react";
import Head from "next/head";
import { ThemeProvider, Container, Box, CssBaseline } from "@mui/material";
import theme from "../utils/theme";

export default function Layout({ children, title }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <link
            href="http://fonts.cdnfonts.com/css/handy-quomte"
            rel="stylesheet"
          />
          <title>
            {title
              ? `${title} - Let's Cook Something!`
              : "Let's Cook Something!"}
          </title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Box>{children}</Box>
      </ThemeProvider>
    </>
  );
}
