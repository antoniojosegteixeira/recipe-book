import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Store } from "../context/Store";
import {
  TextField,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AdvancedSearch from "./AdvancedSearch";

export default function SearchBar() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { search } = state;
  const [input, setInput] = useState(search.query ? search.query : "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch({ type: "ADD_SEARCH", payload: { query: input } });

      const advSearch = {
        type: search.type,
        cuisine: search.cuisine.join(","),
        intolerances: search.intolerances.join(","),
        diet: search.diet,
      };

      router.push({
        pathname: "/search",
        query: { query: input, ...advSearch },
      });
    }
  };

  return (
    <>
      <form
        sx={{ width: "100%" }}
        variant="outlined"
        id="search-form"
        onSubmit={submitHandler}
      >
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            bgcolor: "white",
            my: "2px",
          }}
          id="search-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    fontSize: 30,
                    color: "rgba(0, 0, 0, 0.35)",
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <AdvancedSearch />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
}

/*

    <form onSubmit={submitHandler}>
      <TextField
        variant="outlined"
        fullWidth
        id="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ bgcolor: "white", my: "2px" }}
      >
        <SearchIcon color="primary" sx={{ border: "2px solid black" }} />
      </TextField>
    </form>

*/
