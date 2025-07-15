import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../hooks/useFetchTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const movieInfo = useSelector((state) => state.movies.movieInfo);

  useFetchTrailerVideo(movieId);

  return (
    <div>
      <iframe
        className=" w-full h-screen overflow-hidden"
        src={
          "https://www.youtube.com/embed/" +
          movieInfo?.key +
          "?si=gbATjHX9IHFq-wui&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// ("?si=gbATjHX9IHFq-wui&autoplay=1&mute=1&controls=0&modestbranding=1");
