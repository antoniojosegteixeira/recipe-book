import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

export default function FavoriteButton({ id, title }) {
  const { state, dispatch } = useContext(Store);
  const { favorites } = state;
  console.log(favorites, Cookies.get());

  const handleAddClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_FAVORITE", payload: { id: id.toString(), title } });
  };

  return <Button onClick={handleAddClick}>Add to favorites</Button>;
}
