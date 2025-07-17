import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10"
          src={BG_IMAGE_URL}
          alt="backgroun_image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
