import React, { useState } from "react";
import Popular from "./Popular";

const HomePage = () => {
  const [rendered, setRendered] = useState("popular");
  const switcComponents = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };
  return (
    <div>
      <header>
        <h1>
          {rendered === "popular"
            ? "Popular Anime"
            : rendered === "aring"
            ? "Airing Anime"
            : "UPcoming Anime "}
        </h1>
      </header>
    </div>
  );
};

export default HomePage;
