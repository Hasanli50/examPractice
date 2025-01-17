import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import styles from "../assets/styles/add-music.module.css";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { Music } from "../class/music";
import { useContext } from "react";
import { MusicProvider } from "../context/MusicContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { musicSchema } from "../schemas/music";

const AddMusic = () => {
  const { createMusic } = useContext(MusicProvider);
  const navigate = useNavigate(); 
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      price: null,
    },
    onSubmit: (values, actions) => {
      const newMusic = new Music(
        values.name,
        values.description,
        values.image,
        values.price,
      );
      createMusic(newMusic);
      actions.resetForm();
      toast.success("Music successfully created!");
      navigate("/");
    },
    validationSchema: musicSchema,
  });
  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          width: "500px",
          margin: "auto",
          padding: "15px 15px",
          gap: "15px",
          border: "2px solid #E4AE50",
          borderRadius: "10px",
          marginBottom: "50px",
        }}
        noValidate
        autoComplete="off"
      >
        <h2 style={{ textAlign: "center", color: "#575153" }}>Add Music</h2>
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: "2px solid #E4AE50",
              },
            },
          }}
          InputLabelProps={{ style: { color: "#E4AE50" } }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        ) : null}
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: "2px solid #E4AE50",
              },
            },
          }}
          InputLabelProps={{ style: { color: "#E4AE50" } }}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.errors.description && formik.touched.description ? (
          <p style={{ color: "red" }}>{formik.errors.description}</p>
        ) : null}
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: "2px solid #E4AE50",
              },
            },
          }}
          InputLabelProps={{ style: { color: "#E4AE50" } }}
          id="outlined-basic"
          label="Image"
          variant="outlined"
          name="image"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.errors.image && formik.touched.image ? (
          <p style={{ color: "red" }}>{formik.errors.image}</p>
        ) : null}
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                border: "2px solid #E4AE50",
              },
            },
          }}
          InputLabelProps={{ style: { color: "#E4AE50" } }}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          type="number"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.errors.price && formik.touched.price ? (
          <p style={{ color: "red" }}>{formik.errors.price}</p>
        ) : null}
        <Button style={{ color: "#575153" }} type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default AddMusic;
