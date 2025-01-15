import * as yup from "yup";

export const movieSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    genre: yup.string().required("Genre is required"),
    release_year: yup.number().required("Year is required").min(1950),
    director: yup.string().required("Director is required"),
});

