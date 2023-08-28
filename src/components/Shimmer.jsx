import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/apiContext";
import styled from "styled-components";
// the fake card ui 
const Shimmer = () => {
  const numCards = 25;

  const renderEmptyCards = () => {
    const emptyCards = [];
    for (let i = 0; i < numCards; i++) {
      emptyCards.push(<Card key={i}></Card>);
    }
    return emptyCards;
  };

  return <FillCards>{renderEmptyCards()}</FillCards>;
};

const FillCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px; /* Adjust the gap between cards as needed */
  justify-items: center; /* Horizontally center the cards */
  padding: 20px;
`;

const Card = styled.div`
  background-color: #5f5959;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 400px; /* Adjust the height as needed */
`;

export default Shimmer;
