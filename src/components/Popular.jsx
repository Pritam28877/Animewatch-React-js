import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/apiContext";

const Popular = () => {
  const { popularAnime, isSearch } = useGlobalContext();
  // console.log(popularAnime);
  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.title}`} key={anime.title}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };
  return <div>{conditionalRender()}</div>;
};

export default Popular;
