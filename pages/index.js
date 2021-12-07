import React, { useState } from "react";
import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Box,
  Link,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import PopularCard from "../components/PopularCard";
import CategoriesButtons from "../components/CategoriesButtons";

const Index = () => {
  const [search, setSearch] = useState("egg");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (e !== "") {
      router.push({
        pathname: "/search",
        query: { query: search },
      });
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          bgcolor: "background.paper",
          backgroundImage: `url(/images/headerimage.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ maxWidth: "700px", m: 2 }}>
          <Typography
            component="h1"
            align="center"
            sx={{
              fontFamily: "Lora",
              fontWeight: "bold",
              fontSize: "calc(1.25rem + 1.5vw)",
              mb: 2,
            }}
          >
            What are we going to cook today?
          </Typography>
          <form onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              fullWidth
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ bgcolor: "white" }}
            />
            <Button type="submit">Search</Button>
          </form>
        </Box>
      </Box>
      <Container
        maxWidth={false}
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          minHeight: "80vh",
          py: 6,
          px: 5,
          maxWidth: "1100px",
        }}
      >
        <Typography component="h2" variant="h2" align="center">
          Popular Recipes
        </Typography>
        <PopularCard />
        <CategoriesButtons />
      </Container>
    </Layout>
  );
};

export default Index;
