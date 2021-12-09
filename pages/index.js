import React from "react";
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
import Layout from "../components/Layout";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import PopularCard from "../components/PopularCard";
import CategoriesButtons from "../components/CategoriesButtons";
import SearchBar from "../components/SearchBar";
import TopBar from "../components/TopBar";

const Index = () => {
  return (
    <Layout>
      <TopBar nosearch />
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
          <SearchBar />
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
