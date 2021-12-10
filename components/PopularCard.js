import React from "react";
import { Grid, Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function PopularCard() {
  return (
    <Grid container spacing={2} sx={{ pt: 2 }}>
      <Grid item container xs={12} md={6} direction="column">
        <NextLink href="/recipe/661835" passHref>
          <Box
            as="a"
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: "37rem",
              borderRadius: "5px",
              overflow: "hidden",
              position: "relative",
              "&:hover": {
                "& .card": {
                  transform: "scale(1.04)",
                },
              },
            }}
          >
            <Box
              className="card"
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(/images/margarita.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
                height: "100%",
                width: "100%",
                transition: "0.4s ease-in-out",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                bottom: 0,
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.55) 30%,
                    rgba(0, 0, 0, 0.616) 40%
                  )`,
                width: "100%",
                minHeight: "30%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                color="secondary"
                sx={{ fontWeight: "regular" }}
              >
                Strawberry Margarita
              </Typography>
            </Box>
          </Box>
        </NextLink>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        spacing={2}
        sx={{ flexDirection: { xs: "row", sm: "column", md: "row" } }}
      >
        <Grid item xs={12}>
          <NextLink href="/recipe/1515523" passHref>
            <Link>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  minHeight: "18rem",
                  borderRadius: "5px",
                  overflow: "hidden",
                  "&:hover": {
                    "& .card": {
                      transform: "scale(1.04)",
                    },
                  },
                }}
              >
                <Box
                  className="card"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundImage: `url(/images/chicken.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    minHeight: "18rem",
                    width: "100%",
                    transition: "0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    bottom: 0,
                    backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.55) 30%,
                    rgba(0, 0, 0, 0.616) 40%
                  )`,
                    width: "100%",
                    minHeight: "30%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    align="center"
                    color="secondary"
                    sx={{ fontWeight: "regular" }}
                  >
                    Instant Pot BBQ Chicken Thighs
                  </Typography>
                </Box>
              </Box>
            </Link>
          </NextLink>
        </Grid>
        <Grid item xs={12}>
          <NextLink href="/recipe/648183" passHref>
            <Link>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  minHeight: "18rem",
                  borderRadius: "5px",
                  overflow: "hidden",
                  "&:hover": {
                    "& .card": {
                      transform: "scale(1.04)",
                    },
                  },
                }}
              >
                <Box
                  className="card"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundImage: `url(/images/pannacotta.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    minHeight: "18rem",
                    width: "100%",
                    transition: "0.4s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    bottom: 0,
                    backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.55) 30%,
                    rgba(0, 0, 0, 0.616) 40%
                  )`,
                    width: "100%",
                    minHeight: "30%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    align="center"
                    color="secondary"
                    sx={{ fontWeight: "regular" }}
                  >
                    Italian Panna Cotta
                  </Typography>
                </Box>
              </Box>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </Grid>
  );
}
