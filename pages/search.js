import React from "react";
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
  Pagination,
  Box,
} from "@mui/material";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import NextLink from "next/link";
import { search } from "../utils/mock";

const SearchPage = ({ data, page }) => {
  const router = useRouter();

  const handlePagination = (e, value) => {
    router.push({
      pathname: "/search",
      query: {
        query: router.query.query,
        page: value,
      },
    });
  };

  return (
    <Layout>
      <Container sx={{ py: 4 }}>
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Pagination
            count={Math.ceil(data.totalResults / data.number)}
            margin="0 auto"
            color="primary"
            size="large"
            page={Number(page)}
            onChange={handlePagination}
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const page = query.page ? query.page : 1;

  /*
  const url = `${BASE_URL}/complexSearch`;
  const options = {
    params: {
      ...query,
      offset: page * 10,
      apiKey: process.env.API_KEY,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(url, options);

  */

  return {
    props: {
      data: search,
      page,
    },
  };
}
