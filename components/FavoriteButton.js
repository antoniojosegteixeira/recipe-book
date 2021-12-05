import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

export default function FavoriteButton({ id, title }) {
  const { state, dispatch } = useContext(Store);
  const { favorites } = state;

  const isAdded = favorites.filter((item) => item.id === id.toString());

  const handleAddClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_FAVORITE", payload: { id: id.toString(), title } });
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: { id: id.toString(), title },
    });
  };

  console.log("favorites now", favorites);

  return (
    <>
      {isAdded.length > 0 ? (
        <Button onClick={handleRemoveClick}>Remove from favorites</Button>
      ) : (
        <Button onClick={handleAddClick}>Add to favorites</Button>
      )}
    </>
  );
}
