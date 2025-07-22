import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { suggestedMovies, movieNames } = useSelector((state) => state.gpt);
  if (!suggestedMovies) return <h1>Loading...</h1>;
  return (
    <div className="bg-black m-4 opacity-90 rounded-lg">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={suggestedMovies[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
