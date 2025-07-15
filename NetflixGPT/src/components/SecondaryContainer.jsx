import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="relative -mt-40">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Popular"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
