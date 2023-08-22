import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/apiContext";
import styled from "styled-components";
import Shimmer from "./Shimmer";

const Popular = () => {
  const { popularAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime?.mal_id}`} key={anime?.mal_id}>
            <img src={anime?.images?.jpg?.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };
  return (
    <>
      {popularAnime.length === 0 ? (
        <Shimmer />
      ) : (
        <PropularStyle>
          <div className="popular-anime">{conditionalRender()}</div>
        </PropularStyle>
      )}
    </>
  );
};

const PropularStyle = styled.div`
  display: flex;

  .popular-anime {
    background-color: #0f0f0f;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    padding-right: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #0f0f0f;
    border-top: 5px solid #ffffff;
    a {
      height: 500px;
      border-radius: 7px;
      border: 5px solid #0f0f0f;
    }
    a img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
export default Popular;
