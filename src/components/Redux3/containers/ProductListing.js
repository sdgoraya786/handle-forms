import React, { useEffect } from "react";
import axios from "axios";
import ProductContainer from "./ProductContainer";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const reponse = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => console.log(error));
    dispatch(setProducts(reponse.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="ui grid container">
        <ProductContainer />
      </div>
    </>
  );
};

export default ProductListing;
