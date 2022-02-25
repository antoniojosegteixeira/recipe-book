import React, { useContext } from "react";
import {
  List,
  ListItem,
  Typography,
  TextField,
  Link,
  Container,
  Menu,
  MenuItem,
  Box,
  ListItemButton,
} from "@mui/material";
import NextLink from "next/link";
import { Store } from "../context/Store";
import Layout from "../components/Layout";
import TopBar from "../components/TopBar";
import FavoriteButton from "../components/FavoriteButton";

const Favorites = () => {
  const { state } = useContext(Store);
  const { favorites } = state;

  return (
    <Layout>
      <TopBar />
      <Container
        maxWidth={false}
        sx={{
          borderRadius: 4,
          minHeight: "80vh",
          pt: 2,
          pb: 4,

          maxWidth: "1000px",
        }}
      >
        <List>
          <ListItem>
            <Typography component="h1" variant="h3">
              My Favorites
            </Typography>
          </ListItem>
          <ListItem sx={{ p: { xs: 0, sm: 1 } }}>
            {favorites.length > 0 ? (
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                {favorites.map((item) => {
                  return (
                    <Box sx={{ display: "flex" }} key={item.id}>
                      <NextLink href={`/recipe/${item.id}`} passHref>
                        <Link sx={{ width: "100%", textDecoration: "none" }}>
                          <ListItemButton>
                            <Typography variant="h6" color="primary">
                              {item.title}
                            </Typography>
                          </ListItemButton>
                        </Link>
                      </NextLink>
                      <FavoriteButton id={item.id} title={item.title} icon />
                    </Box>
                  );
                })}
              </List>
            ) : (
              <Typography variant="h6"> You have no favorites yet</Typography>
            )}
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Favorites;
