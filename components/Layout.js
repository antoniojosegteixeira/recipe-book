/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import {
  ThemeProvider,
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import theme from "../utils/theme";
import NextLink from "next/link";
import MyLink from "../components/MyLink";

const tags = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];

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
          <link
            href="http://fonts.cdnfonts.com/css/your-dream"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
            integrity="sha512-BnbUDfEUfV0Slx6TunuB042k9tuKe3xrD6q4mg5Ed72LTgzDIcLPxg6yI2gcMFRyomt+yJJxE+zJwNmxki6/RA=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />

          <title>
            {title
              ? `${title} - What Are We Going To Cook Today?`
              : "What Are We Going To Cook Today?"}
          </title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Box sx={{ minHeight: "100vh", ...sx }}>{children}</Box>
        <Box
          as="footer"
          sx={{
            minHeight: "400px",
            background: `linear-gradient(0deg,rgba(231,207,201,.8),rgba(231,207,201,.8)),url(/images/footer.jpg)`,
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container sx={{ py: 3 }}>
            <Grid container>
              <Grid item md={6}>
                <List>
                  <ListItem>
                    <Typography
                      component="span"
                      variant="h1"
                      sx={{ lineHeight: 0.6 }}
                    >
                      Recipe Book
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      "& a": {
                        fontSize: "2rem",
                        pr: 2,
                        color: "primary.dark",

                        "&:hover": {
                          color: "primary.main",
                        },
                      },
                    }}
                  >
                    <MyLink href="https://www.facebook.com/">
                      <i className="fab fa-facebook"></i>
                    </MyLink>
                    <MyLink href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </MyLink>
                    <MyLink href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </MyLink>
                    <MyLink href="https://www.youtube.com/">
                      <i className="fab fa-youtube"></i>
                    </MyLink>
                  </ListItem>
                </List>
              </Grid>
              <Grid item container md={3} sx={{ border: "1px solid black" }}>
                <Typography
                  component="h3"
                  variant="h3"
                  width="100%"
                  align="center"
                >
                  Categories
                </Typography>
                <Grid
                  container
                  xs={12}
                  sx={{
                    "& a": {
                      lineHeight: 0.6,
                    },
                  }}
                >
                  <Grid item xs={6}>
                    {tags.map((tag, i) => {
                      if (i >= 7) return;
                      return (
                        <ListItem key={tag}>
                          <NextLink href={`/search?type=${tag}`} passHref>
                            <MyLink sx={{ textTransform: "capitalize" }}>
                              {tag}
                            </MyLink>
                          </NextLink>
                        </ListItem>
                      );
                    })}
                  </Grid>
                  <Grid item xs={6}>
                    {tags.map((tag, i) => {
                      if (i <= 7) return;
                      return (
                        <ListItem key={tag}>
                          <NextLink href={`/search?type=${tag}`} passHref>
                            <MyLink sx={{ textTransform: "capitalize" }}>
                              {tag}
                            </MyLink>
                          </NextLink>
                        </ListItem>
                      );
                    })}
                    <ListItem>
                      <NextLink href={`/search`} passHref>
                        <MyLink>...more</MyLink>
                      </NextLink>
                    </ListItem>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
