import React, { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";

export const GlobalProvider = ({ children }) => {
  const reducer = (state, action) => {
    return state;
  };
  const intialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    picture: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
