import React from "react";
import { List, ListItem, Typography, TextField } from "@mui/material";
import { BASE_URL } from "../../utils/config";
import axios from "axios";

const Recipe = ({ data }) => {
  console.log(data);
  return (
    <List>
      <ListItem>
        <Typography>Recipe Page</Typography>
        <Typography></Typography>
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

export default Recipe;

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const url = `${BASE_URL}/${id}/information`;
  const options = {
    params: {
      apiKey: process.env.API_KEY,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.get(url, options);

  return {
    props: {
      data,
    },
  };
}
