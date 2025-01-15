import { Routes, Route } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import AddMovie from "../pages/AddMovie.jsx";
import Basket from "../pages/basket.jsx";
import Favorite from "../pages/Favorite.jsx";
import Details from "../pages/details.jsx";

function MovieRouter() {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/addmovies" element={<AddMovie />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default MovieRouter;
