/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import { ThemeProvider, Container, Box, CssBaseline } from "@mui/material";
import theme from "../utils/theme";

export default function Layout({ children, title, sx }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <link
            href="http://fonts.cdnfonts.com/css/handy-quomte"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lora&display=swap"
          />

          <title>
            {title
              ? `${title} - What Are We Going To Cook Today?`
              : "What Are We Going To Cook Today?"}
          </title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Box sx={{ minHeight: "100vh", ...sx }}>{children}</Box>
      </ThemeProvider>
    </>
  );
}
