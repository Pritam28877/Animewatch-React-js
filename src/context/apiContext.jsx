import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const intialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    picture: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };
  return (
    <GlobalContext.Provider value={"hello"}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
