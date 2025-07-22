import React, { useRef, useState } from "react";
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constant";
import { addSuggestedMovies } from "../store/gptSlice";

const GptSearchBar = () => {
  const langName = useSelector((state) => state.config.langName);
  const search = useRef(null);
  const dispatch = useDispatch();

  const fetchMovieData = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    return json.results;
  };

  const handleGeminiSearch = async () => {
    const searchQuery =
      "Act as movie recommendation system and suggest movie names." +
      search.current[0].value +
      "Give me only 5 movie name, comma seperated. Example of the result is ahead. Example Result: Gadar, Don, Koi Mil Gaya, Eleven, Singham";

    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: searchQuery,
    });
    if(!response) return <h1>Loading...</h1>
    const geminiResponse = response.text.split(",");

    const promiseArray = geminiResponse.map((movie) => fetchMovieData(movie));

    const suggestedMoviesList = await Promise.all(promiseArray);

    dispatch(addSuggestedMovies({movieNames: geminiResponse, geminiResult: suggestedMoviesList}));

  };

  return (
    <div>
      <form
        ref={search}
        onSubmit={(e) => e.preventDefault()}
        className="pt-[10%] text-white flex justify-center gap-5"
      >
        <input
          className=" w-md p-4 bg-gray-700 border-gray-700 rounded-md shadow-2xl"
          type="text"
          placeholder={lang[langName].gptSearchPlaceholder}
        />
        <button
          onClick={handleGeminiSearch}
          className="bg-red-700 hover:bg-red-800 px-10 p-4 rounded-md text-white cursor-pointer"
        >
          {lang[langName].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
