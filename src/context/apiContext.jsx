import React, { createContext, useContext, useReducer, useEffect } from "react";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";
//* the action
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";

//** use reducer to add the state change funtion in the intialState obj */
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, popularAnime: action.payload, loading: false };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  //* the obj to send data to the app of the given to the state
  const intialState = {
    popularAnime: [],
    upcomingAnime: [],
    airingAnime: [],
    picture: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };

  // * the function to get the getPopularAnime data
  const getPopularAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
  };

  //* the hook to call the data at first render of the page
  useEffect(() => {
    getPopularAnime();
  }, []);

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
