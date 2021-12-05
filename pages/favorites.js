import React from "react";
import { List, ListItem, Typography, TextField } from "@mui/material";

const Favorites = () => {
  let favoriteArray = [];
  if (typeof window !== "undefined") {
    favoriteArray = JSON.parse(localStorage.getItem("favorites"));
  }

  /*
  const items = [
    { id: "213432", title: "Sugar Cookies" },
    { id: "213421", title: "Chocolate Cookies" },
  ];

  localStorage.setItem("favorites", JSON.stringify(items));
  */

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
