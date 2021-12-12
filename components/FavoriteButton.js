import React, { useContext, useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Store } from "../utils/Store";
import TrashIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
        <Button onClick={handleRemoveClick} data-cy="remove-favorite">
          {icon ? (
            <TrashIcon sx={{ color: "gray", fontSize: 25 }} />
          ) : (
            <>
              <FavoriteIcon color="error" />
              <Typography variant="h6" pl={1} sx={{ color: "primary.dark" }}>
                Remove from favorites
              </Typography>
            </>
          )}
        </Button>
      ) : isAdded === null ? null : (
        <Button
          onClick={handleAddClick}
          sx={{
            color: "primary.dark",
          }}
          data-cy="add-favorite"
        >
          <FavoriteBorderIcon />
          <Typography variant="h6" pl={1} sx={{ color: "primary.dark" }}>
            Add to favorites
          </Typography>
        </Button>
      )}
    </>
  );
}
