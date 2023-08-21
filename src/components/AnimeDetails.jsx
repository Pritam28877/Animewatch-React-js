import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { name } = useParams();
  console.log(name);

  //** set the anime state  corrent one
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  console.log(anime);

  const getAnime = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(anime);
  };
  useEffect(() => {
    getAnime(name);
  }, []);
  return <div>AnimeDetails</div>;
};

export default AnimeDetails;
