import { useContext } from "react";
import { MoviesContext } from "../context/movieContext";
import { Link, useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const { movies, deleteMovie } = useContext(MoviesContext);
  const movie = movies && movies.find((movie) => movie.id === id);

  return (
    <div style={{ border: "1px solid red", padding: "10px 15px" }}>
      <h3 style={{ color: "green" }}>{movie && movie?.title}</h3>
      <p>Genre: {movie?.genre}</p>
      <p>Year: {movie?.release_year}</p>
      <p>Director: {movie?.director}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={`/`}>
          <button>back</button>
        </Link>
          <button onClick={() => deleteMovie(movie?.id)}>delete</button>
      </div>
    </div>
  );
};

export default Details;
