import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/apiContext";
import styled from "styled-components";

const Shimmer = () => {
  const fakedata = Array(25).fill("");
  const conditionalRender = () => {
    return fakedata.map((data) => {
      return <img src={data} alt="" />;
    });
  };
  return (
    <>
      <FillCards>
        <div className="fill-card">{conditionalRender()}</div>;
      </FillCards>
    </>
  );
};
const FillCards = styled.div`
  display: flex;

  .fill-card {
    background-color: #5f5959;
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
export default Shimmer;
