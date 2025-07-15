import { CDN_IMAGE_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-40">
      <img className="rounded-md" src={CDN_IMAGE_URL + movie.poster_path} alt="movie_image" />
    </div>
  );
};

export default MovieCard;
