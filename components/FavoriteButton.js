import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Store } from "../utils/Store";
import TrashIcon from "@mui/icons-material/Delete";

export default function FavoriteButton({ id, title, icon }) {
  const { state, dispatch } = useContext(Store);
  const { favorites } = state;
  const [isAdded, setIsAdded] = useState(null);

  useEffect(() => {
    const favBool =
      favorites.filter((item) => item.id === id.toString()).length > 0
        ? true
        : false;
    setIsAdded(favBool);
  }, [favorites, id]);

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

  return (
    <>
      {isAdded ? (
        <Button onClick={handleRemoveClick}>
          {icon ? (
            <TrashIcon sx={{ color: "gray", fontSize: 25 }} />
          ) : (
            "Remove from favorites"
          )}
        </Button>
      ) : isAdded === null ? null : (
        <Button onClick={handleAddClick}>Add to favorites</Button>
      )}
    </>
  );
}
