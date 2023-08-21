import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
  const { name } = useParams();
  console.log(name);

  //** set the anime state  corrent one
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);
  return <div>AnimeDetails</div>;
};

export default AnimeDetails;
