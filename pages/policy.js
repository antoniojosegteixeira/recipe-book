import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
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
import TopBar from "../components/TopBar";

const PolicyPage = ({ data, page }) => {
  const router = useRouter();
  const { query } = router;

  return (
    <Layout>
      <TopBar />
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h6"
          sx={{ pl: { xs: 2, sm: 5, md: 7, lg: 9 }, pb: 2 }}
          id="search-results-text"
        ></Typography>
        <Typography
          variant="h6"
          sx={{ pl: { xs: 2, sm: 5, md: 7, lg: 9 }, pb: 2 }}
          data-cy="filter-box-wrapper"
        ></Typography>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          id="search-card-grid"
        ></Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        ></Box>
      </Container>
    </Layout>
  );
};

export default PolicyPage;
