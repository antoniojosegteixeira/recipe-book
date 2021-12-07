import React, { useEffect } from "react";
import {
  List,
  ListItem,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
  Link,
} from "@mui/material";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import NextLink from "next/link";

const SearchPage = ({ data }) => {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <Typography>Search Results</Typography>
        <Grid container spacing={3} justifyContent="center">
          {data?.results.map((recipe) => {
            return (
              <Grid item key={recipe.id}>
                <NextLink href={`/recipe/${recipe.id}`} passHref>
                  <Link sx={{ textDecoration: "none" }}>
                    <Card
                      sx={{
                        maxWidth: 220,
                        height: "100%",
                        bgcolor: "white",
                        boxShadow: "0 0 10px gray",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="230"
                        image={recipe.image}
                        alt={recipe.title}
                      />
                      <CardContent
                        sx={{
                          "&:last-child": {
                            pb: 1,
                          },
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          align="center"
                        >
                          {recipe.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </NextLink>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  const { query } = context;

  /*
  const url = `${BASE_URL}/complexSearch`;
  const options = {
    params: {
      ...query,
      apiKey: process.env.API_KEY,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(url, options);
  */
  const data = {
    results: [
      {
        id: 1096010,
        title: "Egg Salad Wrap",
        image: "https://spoonacular.com/recipeImages/1096010-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 642178,
        title: "Egg and Dairy Free Pancakes",
        image: "https://spoonacular.com/recipeImages/642178-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 642246,
        title: "Egg-Free Chocolate Cupcakes",
        image: "https://spoonacular.com/recipeImages/642246-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 642245,
        title: "Egg-Free Cranberry Thumbprints",
        image: "https://spoonacular.com/recipeImages/642245-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 642240,
        title: "Egg Salad Sandwiches With Tarragon",
        image: "https://spoonacular.com/recipeImages/642240-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 642230,
        title: "Egg Souffle With Bacon and Asparagus",
        image: "https://spoonacular.com/recipeImages/642230-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 662744,
        title: "Taco Egg Roll",
        image: "https://spoonacular.com/recipeImages/662744-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 645060,
        title: "Good-Egg Salad Sandwich",
        image: "https://spoonacular.com/recipeImages/645060-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 641700,
        title: "Duck Egg Omelette With Caviar and Sour Cream",
        image: "https://spoonacular.com/recipeImages/641700-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 633587,
        title: "Baked Egg Linguine With Onion, Scallion, and Umame",
        image: "https://spoonacular.com/recipeImages/633587-312x231.jpg",
        imageType: "jpg",
      },
    ],
    offset: 0,
    number: 10,
    totalResults: 1641,
  };
  return {
    props: {
      data,
    },
  };
}
