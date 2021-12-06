import React from "react";
import { Grid, Box, Typography, Link, List, ListItem } from "@mui/material";
import NextLink from "next/link";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        align="center"
        sx={{ fontFamily: "Handy Quomte", pt: 6 }}
      >
        Categories
      </Typography>
      <Grid container columnSpacing={-2}>
        {categories.map((item) => {
          return (
            <Grid item key={item.type} md={2}>
              <NextLink href={`/search?type=${item.type}`} passHref>
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
                    <ListItem>
                      <Box
                        sx={{
                          backgroundImage: `url(${item.img})`,
                          backgroundSize: "cover",
                          borderRadius: "50%",
                          width: 150,
                          height: 150,
                          transition: "all 0.4s ease-in-out",
                          mb: "5px",
                        }}
                      ></Box>
                    </ListItem>
                    <Typography
                      component="h5"
                      variant="h5"
                      align="center"
                      sx={{
                        textTransform: "capitalize",
                        color: "#212529",
                      }}
                    >
                      {item.type}
                    </Typography>
                  </List>
                </Link>
              </NextLink>
            </Grid>
          );
        })}
        <Grid item md={2}>
          <NextLink href={`/search`} passHref>
            <Link>
              <List>
                <ListItem>
                  <Box
                    sx={{
                      backgroundImage: `url(/images/categories/more.jpg)`,
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      width: 150,
                      height: 150,
                    }}
                  ></Box>
                </ListItem>
                <Typography
                  component="h5"
                  variant="h5"
                  align="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  More
                </Typography>
              </List>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </Box>
  );
}
