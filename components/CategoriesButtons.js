import React from "react";
import { Grid, Box, Typography, Link, List, ListItem } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";

const categories = [
  { type: "dessert", img: "/images/categories/cookies.jpg" },
  { type: "salad", img: "/images/categories/salad.jpg" },
  { type: "breakfast", img: "/images/categories/breakfast.jpg" },
  { type: "drinks", img: "/images/categories/drinks.jpg" },
  { type: "beverage", img: "/images/categories/beverage.jpg" },
  { type: "marinade", img: "/images/categories/marinade.jpg" },
  { type: "snack", img: "/images/categories/snack.jpg" },
  { type: "side dish", img: "/images/categories/sideDish.jpg" },
  { type: "appetizer", img: "/images/categories/appetizer.jpg" },
  { type: "bread", img: "/images/categories/bread.jpg" },
  { type: "soup", img: "/images/categories/soup.jpg" },
];

export default function CategoriesButton() {
  return (
    <Box>
      <Typography component="h2" variant="h2" align="center">
        Categories
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {categories.map((item) => {
          return (
            <Grid
              item
              key={item.type}
              xs={6}
              sm={3}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "160px",
              }}
              spacing={2}
            >
              <NextLink href={`/search?type=${item.type}`} passHref>
                <Link
                  sx={{
                    textDecoration: "none",
                    "& img": {
                      borderRadius: "50%",
                    },

                    "&:hover": {
                      "& .MuiBox-root": {
                        transform: "scale(1.08)",
                      },
                      "& h5": {
                        color: "primary.main",
                      },
                    },
                  }}
                >
                  <Box sx={{ transition: "all 0.4s ease-in-out", mb: 1 }}>
                    <Image src={item.img} width="150px" height="150px" alt="" />
                  </Box>
                  <Typography
                    component="h5"
                    variant="h5"
                    align="center"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {item.type}
                  </Typography>
                </Link>
              </NextLink>
            </Grid>
          );
        })}
        <Grid item xs={5} sm={4} md={2}>
          <NextLink href={`/search`} passHref>
            <Link
              sx={{
                textDecoration: "none",
                "&:hover": {
                  "& .MuiBox-root": {
                    transform: "scale(1.08)",
                  },
                  "& .MuiTypography-h5": {
                    color: "primary.main",
                  },
                },
              }}
            >
              <List>
                <ListItem
                  sx={{
                    width: "150px",
                    height: "150px",
                    p: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url(/images/categories/more.jpg})`,
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                      transition: "all 0.4s ease-in-out",
                    }}
                  ></Box>
                </ListItem>
                <ListItem>
                  <Typography
                    component="h5"
                    variant="h5"
                    align="center"
                    width="100%"
                    sx={{
                      textTransform: "capitalize",
                      color: "#212529",
                    }}
                  >
                    More
                  </Typography>
                </ListItem>
              </List>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </Box>
  );
}
