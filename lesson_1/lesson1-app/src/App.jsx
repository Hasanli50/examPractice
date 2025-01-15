import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
