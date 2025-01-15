import { Link, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <ul style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/basket"}>
          <li>Basket</li>
        </Link>
        <Link to={"./favorites"}>
          <li>Favorites</li>
        </Link>
        <Link to={"/add-product"}>
          <li>Add Product</li>
        </Link>
      </ul>

      <Outlet/>
    </>
  );
};

export default Navbar;
