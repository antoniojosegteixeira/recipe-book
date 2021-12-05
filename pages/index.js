import React, { useState } from "react";
import { List, ListItem, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

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

  return (
    <Layout>
      <List>
        <ListItem>
          <Typography>Hello world</Typography>
        </ListItem>
        <ListItem>
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
        </ListItem>
      </List>
    </Layout>
  );
};

export default Index;
