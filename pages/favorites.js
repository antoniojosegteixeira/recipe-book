import React, { useContext } from "react";
import { List, ListItem, Typography, TextField, Link } from "@mui/material";
import NextLink from "next/link";
import { Store } from "../utils/Store";

const Favorites = () => {
  const { state } = useContext(Store);
  const { favorites } = state;

  return (
    <List>
      <ListItem>
        <Typography>MY FAVORITES</Typography>
      </ListItem>
      <ListItem>
        {favorites.length > 0 &&
          favorites.map((item) => {
            return (
              <NextLink key={item.id} href={`/recipe/${item.id}`} passHref>
                <Link>{item.title}</Link>
              </NextLink>
            );
          })}
      </ListItem>
    </List>
  );
};

export default Favorites;
