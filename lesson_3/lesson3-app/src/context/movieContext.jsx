/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { BASE_URL, ENDPOINT } from "../constants/endpoints";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export const MoviesContext = createContext(null);

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  //getAllMovies
  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const response = await axios.get(BASE_URL + ENDPOINT);
        const data = await response.data;
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };
    getAllMovies();
  }, []);

  // delete
  const deleteMovie = async (movieId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`${BASE_URL + ENDPOINT}/${movieId}`);
          const deleteMovie = movies.filter((value) => value.id !== movieId);
          setMovies(deleteMovie);
          navigate("/");
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  //createMovies
  const createMovie = async (newMovie) => {
    try {
      const { data } = await axios.post(BASE_URL + ENDPOINT, newMovie);

      setMovies((prevMovie) => [...prevMovie, data]);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };
  //update
  const updateMovie = async (movieId, updatedMovie) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL + ENDPOINT}/${movieId}`,
        updatedMovie
      );
      setMovies((prevMovie) =>
        prevMovie.map((value) => (value.id === movieId ? data : value))
      );
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  // toggleFavorite
  const toggleFavorite = async (movieId) => {
    try {
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === movieId
            ? { ...movie, isFavorite: !movie.isFavorite }
            : movie
        )
      );

      const movieToUpdate = movies.find((movie) => movie.id === movieId);

      await axios.patch(`${BASE_URL + ENDPOINT}/${movieId}`, {
        isFavorite: !movieToUpdate.isFavorite,
      });
    } catch (error) {
      console.error("Error updating favorite status:", error);
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === movieId
            ? { ...movie, isFavorite: !movie.isFavorite }
            : movie
        )
      );
    }
  };

  const handleBasket = async (movieId) => {
    try {
      setMovies((prevMovie) => {
        prevMovie.map((value) =>
          value.id === movieId ? { ...value, isBasket: !value.isBasket } : value
        );
      });

      const updateMovie = movies.find((value) => value.id === movieId);
      await axios.patch(`${BASE_URL + ENDPOINT}/${movieId}`, {
        isBasket: !updateMovie.isBasket,
      });
    } catch (error) {
      console.error("Failed to fetch movies", error);
      setMovies((prevMovie) => {
        prevMovie.map((value) =>
          value.id === movieId ? { ...value, isBasket: !value.isBasket } : value
        );
      });
    }
  };

  return (
    <>
      <MoviesContext.Provider
        value={{
          handleBasket,
          toggleFavorite,
          deleteMovie,
          createMovie,
          updateMovie,
          movies,
          setMovies,
        }}
      >
        {children}
      </MoviesContext.Provider>
    </>
  );
};

export default MovieProvider;
