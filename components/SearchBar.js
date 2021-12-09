import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import {
  TextField,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { search } = state;
  const [input, setInput] = useState(search.query ? search.query : "");

  console.log(search);

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
    <>
      <form sx={{ width: "100%" }} variant="outlined" onSubmit={submitHandler}>
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            bgcolor: "white",
            my: "2px",
          }}
          id="outlined-start-adornment"
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
