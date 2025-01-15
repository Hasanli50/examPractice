import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { Movie } from "../class/movie";
import { useContext } from "react";
import { MoviesContext } from "../context/movieContext";
import { toast } from "react-toastify";
import { movieSchema } from "../schema/movieSchema";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { createMovie } = useContext(MoviesContext);
  const navigate = useNavigate();
  const notify = () => toast("Movie successfully added");
  const formik = useFormik({
    initialValues: {
      title: "",
      genre: "",
      release_year: "",
      director: "",
    },
    onSubmit: (values, actions) => {
      const newMovie = new Movie(
        values.title,
        values.genre,
        values.release_year,
        values.director
      );
      notify();
      createMovie(newMovie);
      actions.resetForm();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    validationSchema: movieSchema,
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "10px",
          margin: "50px auto",
          border: "1px solid gray",
          padding: "20px 20px",
          background: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        noValidate
        autoComplete="off"
      >
        <h3 style={{ textAlign: "center" }}>Add New Movie</h3>
        <TextField
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          onBlur={formik.handleBlur}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        {formik.errors.title && formik.touched.title ? <p style={{color:"red"}}>{formik.errors.title}</p> : null}
        <TextField
          name="genre"
          onChange={formik.handleChange}
          value={formik.values.genre}
          onBlur={formik.handleBlur}
          id="outlined-basic"
          label="Genre"
          variant="outlined"
        />
        {formik.errors.genre && formik.touched.genre ? <p style={{color:"red"}}>{formik.errors.genre}</p> : null}
        <TextField
          name="release_year"
          onChange={formik.handleChange}
          value={formik.values.release_year}
          onBlur={formik.handleBlur}
          id="outlined-basic"
          label="Release Year"
          variant="outlined"
          type="number"
        />
        {formik.errors.release_year && formik.touched.release_year ? (
          <p style={{color:"red"}}>{formik.errors.release_year}</p>
        ) : null}
        <TextField
          name="director"
          onChange={formik.handleChange}
          value={formik.values.director}
          onBlur={formik.handleBlur}
          id="outlined-basic"
          label="Director"
          variant="outlined"
        />
        {formik.errors.director && formik.touched.director ? (
          <p style={{color:"red"}}>{formik.errors.director}</p>
        ) : null}

        <button disabled={!formik.dirty && formik.isValid} type="submit">Submit</button>
      </Box>
    </>
  );
};

export default AddMovie;
