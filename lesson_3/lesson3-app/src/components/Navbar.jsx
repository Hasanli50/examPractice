import { Link, Outlet } from "react-router";
import { MoviesContext } from "../context/movieContext";
import { useContext } from "react";

const Navbar = () => {
  const {movies} = useContext(MoviesContext);
  return (
    <>
      <nav style={{ padding: "20px 40px" }}>
        <ul style={{ display: "flex", gap: "30px" }}>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Cantact</li>
          </Link>

          <Link to={"addmovies"}>
            <li>Add Movie</li>
          </Link>
          <Link to={"/favorite"}>
            <li>Favorites</li>
          </Link>
          <Link to={"/basket"}>
            <li>Basket({movies.filter((value) => value.isBasket === true).length})</li>
          </Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
