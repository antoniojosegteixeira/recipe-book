import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import { TextField } from "@mui/material";

export default function SearchBar() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { search } = state;
  const [input, setInput] = useState(search.query ? search.query : "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch({ type: "ADD_SEARCH", payload: { query: input } });
      router.push({
        pathname: "/search",
        query: { query: input },
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        variant="outlined"
        fullWidth
        id="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ bgcolor: "white" }}
      />
    </form>
  );
}
