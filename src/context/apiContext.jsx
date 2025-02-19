import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

const GlobalContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";

//* the action
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_PICTURES = "GET_PICTURES";

//** use reducer to add the state change funtion in the intialState obj */
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POPULAR_ANIME:
      return { ...state, popularAnime: action.payload, loading: false };
    case SEARCH:
      return { ...state, searchResults: action.payload, loading: false };
    case GET_UPCOMING_ANIME:
      return { ...state, upcomingAnime: action.payload, loading: false };
    case GET_AIRING_ANIME:
      return { ...state, airingAnime: action.payload, loading: false };
    case GET_PICTURES:
      return { ...state, pictures: action.payload, loading: false };
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

  //* *the hooks for the stage chanege
  const [state, dispatch] = useReducer(reducer, intialState);
  const [search, setSeach] = useState("");

  //* for the search bar state chaange
  const handleChange = (e) => {
    setSeach(e.target.value);
    if (e.target.value === "") {
      state.isSearch = false;
    }
  };

  //**?it is for the handle the submit action in the browser  */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      searchAnime(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
      alert("Please enter a value search term ");
    }
  };

  //*fetch upcoming anime the data
  const getUpcomingAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
    const data = await response.json();
    dispatch({ type: GET_UPCOMING_ANIME, payload: data.data });
  };

  // * the function to get the getPopularAnime data
  const getPopularAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
    const data = await response.json();
    dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
  };

  //*fetch airing anime data
  const getAiringAnime = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
    const data = await response.json();
    dispatch({ type: GET_AIRING_ANIME, payload: data.data });
  };

  //* fetch the search anime given by the user

  const searchAnime = async (anime) => {
    dispatch({ type: LOADING });
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`
    );
    const data = await response.json();
    dispatch({ type: SEARCH, payload: data.data });
  };

  //* the hook to call the data at first render of the page
  useEffect(() => {
    getPopularAnime();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleChange,
        handleSubmit,
        search,
        searchAnime,
        getAiringAnime,
        getUpcomingAnime,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
