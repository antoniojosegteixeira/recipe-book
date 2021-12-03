import React from "react";
import { List, ListItem, Typography, TextField } from "@mui/material";

const Index = () => {
  return (
    <List>
      <ListItem>
        <Typography>Hello world</Typography>
      </ListItem>
      <ListItem>
        <TextField
          variant="outlined"
          fullWidth
          id="search"
          label="Search for recipes"
          inputProps={{ type: "text" }}
        />
      </ListItem>
    </List>
  );
};

export default Index;
