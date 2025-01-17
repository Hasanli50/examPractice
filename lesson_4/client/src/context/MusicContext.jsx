/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/endpoint";
import axios from "axios";
import Swal from "sweetalert2"

export const MusicProvider = createContext(null);

const MusicContext = ({ children }) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const data = await response.data.data;
        setMusics(data);
      } catch (error) {
        console.log("Failed in fetch", error);
      }
    };
    getAll();
  }, []);

  const createMusic = async (newMusic) => {
    try {
      await axios.post(BASE_URL, newMusic);
      setMusics((prevData) => [...prevData, newMusic]);
    } catch (error) {
      console.log("Failed in fetch", error);
    }
  };

  const deleteMusic = async (musicId) => {
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
          await axios.delete(`${BASE_URL}/${musicId}`);
          const deletedMusic = musics.filter((value) => value.id !== musicId);
          setMusics(deletedMusic);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log("Failed in fetch", error);
    }
  };

  const favoriteToggle = async (musicId) => {
    try {
      setMusics((prevData) =>
        prevData.map((music) =>
          music.id === musicId
            ? { ...music, isFavorite: !music.isFavorite }
            : music
        )
      );
      const updatedData = musics.find((value) => value.id === musicId);
      await axios.patch(`${BASE_URL}/${musicId}`, {
        isFavorite: !updatedData.isFavorite,
      });
    } catch (error) {
      console.log("Failed in fetch", error);
    }
  };
  return (
    <>
      <MusicProvider.Provider
        value={{ musics, createMusic, deleteMusic, favoriteToggle }}
      >
        {children}
      </MusicProvider.Provider>
    </>
  );
};

export default MusicContext;
