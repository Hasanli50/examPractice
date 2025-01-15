import { useContext } from "react";
import { MoviesContext } from "../context/movieContext";
import Grid from "@mui/material/Grid";
import { Link } from "react-router";

const Basket = () => {
  const { movies, handleBasket } = useContext(MoviesContext);

  const basket = movies.filter((value) => value.isBasket);
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Grid container spacing={2}>
        {basket.length > 0 ? (
          basket.map((value) => (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={value.id}>
              <div style={{ border: "1px solid red", padding: "10px 15px" }}>
                <h3 style={{ color: "green" }}>{value.title}</h3>
                <p>Genre: {value.genre}</p>
                <p>Year: {value.release_year}</p>
                <p>Director: {value.director}</p>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Link to={`/${value.id}`}>
                    <button >detail</button>
                  </Link>
                  <button onClick={()=> handleBasket(value.id)}>delete</button>
                </div>
              </div>
            </Grid>
          ))
        ) : (
          <p>You dont have basket movies</p>
        )}
      </Grid>
    </div>
  );
};

export default Basket;
