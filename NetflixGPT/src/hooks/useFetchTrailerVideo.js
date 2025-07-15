import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addMovieInfo } from "../store/moviesSlice";
import { useDispatch } from "react-redux";

const useFetchTrailerVideo = (movieId) => {

    const dispatch = useDispatch();

    const fetchTrailerVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
            API_OPTIONS
        );
        const json = await data.json();

        const filterData = json.results.filter((movie) => movie.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMovieInfo(trailer));
    };

    useEffect(() => {
        fetchTrailerVideo();
    }, []);
}

export default useFetchTrailerVideo;