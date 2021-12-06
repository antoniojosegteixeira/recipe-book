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
} from "@mui/material";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

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
  //fontFamily: "Handy Quomte",

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
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            align="center"
            sx={{
              fontFamily: "Lora",
              fontWeight: "bold",
            }}
          >
            What are we going to cook today?
          </Typography>
        </Container>
      </Box>
      <Container sx={{ bgcolor: "white", borderRadius: 4, minHeight: "80vh" }}>
        <Grid></Grid>
      </Container>
    </Layout>
  );
};

/*
<form onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              fullWidth
              id="search"
              label="Search for recipes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </form>
*/

export default Index;
