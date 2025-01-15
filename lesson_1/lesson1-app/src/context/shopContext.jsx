/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const shopContext = createContext();

const productsProvider = ({ children }) => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5050/products");
        const data = await response.data;
        setShop(data);
      } catch (error) {
        console.log("Failed to fetch users", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <shopContext.Provider value={{ shop }}>{children}</shopContext.Provider>
    </>
  );
};

export default productsProvider;
