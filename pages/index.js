import React, { useState } from "react";
import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
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
      <Container>
        <Grid
          container
          columnSpacing={5}
          sx={{ mt: 2, alignItems: "center", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "right" },
            }}
          >
            <Image
              src="/images/headerImg.png"
              alt="Recipe Book"
              width={450}
              height={300}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontFamily: "Handy Quomte",
                color: "#365863",
              }}
            >
              {`Let's Cook`} <br /> {`Something`}
            </Typography>
          </Grid>
        </Grid>
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
