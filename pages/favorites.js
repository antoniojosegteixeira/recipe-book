import React from "react";
import { List, ListItem, Typography, TextField } from "@mui/material";
import Cookies from "js-cookie";

const Favorites = () => {
  let favoriteArray = [];
  if (typeof window !== "undefined") {
    favoriteArray = JSON.parse(Cookies.get("favorites"));
  }

  return (
    <List>
      <ListItem>
        <Typography>MY FAVORITES</Typography>
      </ListItem>
      <ListItem>
        {favoriteArray.length > 0 &&
          favoriteArray.map((item) => {
            return (
              <List key={item.id}>
                <ListItem>{item.title}</ListItem>
                <ListItem>{item.id}</ListItem>
              </List>
            );
          })}
      </ListItem>
    </List>
  );
};

export default Favorites;
