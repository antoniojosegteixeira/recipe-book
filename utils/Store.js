import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();

const initialState = {
  favorites: Cookies.get("favorites")
    ? JSON.parse(Cookies.get("favorites"))
    : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const newFav = action.payload;
      const isAdded = state.favorites.filter((item) => item.id == newFav.id);
      if (isAdded.length >= 1) {
        return state;
      } else {
        Cookies.set("favorites", JSON.stringify([...state.favorites, newFav]));
        return { ...state, favorites: [...state.favorites, newFav] };
      }

    case "REMOVE_FAVORITE":
      const remFav = action.payload;
      const filteredFavorites = state.favorites.filter(
        (item) => item.id !== remFav.id
      );
      Cookies.set("favorites", JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
    case "CLEAR_FAVORITES":
      return { ...state };

    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
