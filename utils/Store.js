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
      Cookies.set("favorites", JSON.stringify([...state.favorites, newFav]));
      return { ...state, favorites: [...state.favorites, newFav] };

    case "REMOVE_FAVORITE":
      return { ...state };

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
