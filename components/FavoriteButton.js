import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Store } from "../utils/Store";

export default function FavoriteButton({ id, title }) {
  const { state, dispatch } = useContext(Store);
  const { favorites } = state;
  const [isAdded, setIsAdded] = useState(false);

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
        <Button onClick={handleRemoveClick}>Remove from favorites</Button>
      ) : (
        <Button onClick={handleAddClick}>Add to favorites</Button>
      )}
    </>
  );
}
