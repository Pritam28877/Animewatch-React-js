import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { id } = useParams();
  console.log(id);

  //** set the anime state  corrent one
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  console.log(anime);

  const getAnime = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();
    setAnime(data);
  };
  useEffect(() => {
    getAnime(id);
  }, []);
  return <div>AnimeDetails</div>;
};

export default AnimeDetails;
