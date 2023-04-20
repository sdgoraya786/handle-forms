import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  margin: 0 40px;
  border: 1px solid #c5bebe;
`;
const ProductImg = styled.div`
  width: 85%;
  border-right: 1px solid #c5bebe;
  img {
    width: 100%;
  }
`;
const ProductInfo = styled.div`
  padding: 10px 40px;
  width: 100%;
  li {
    margin: 13px 0px;
    background-color: rgb(26, 171, 183);
    clip-path: polygon(18% 0px, 100% 0%, 100% 100%, 18% 100%, 0px 50%);
    color: white;
    padding: 8px 0 8px 20px;
    width: 127px;
    font-size: 19px;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 13px;
    background-color: #ebe9e9;
    padding: 5px 11px;
    border-radius: 5px;
    border: 1px solid #d1c9c9;
    color: rgb(173 109 14);
  }
  .addbtn:hover {
    background-color: rgb(191 47 92);
  }
`;
const Button = styled.button`
  color: white;
  background-color: rgb(235, 60, 114);
  border: 0px;
  padding: 12px 40px;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
  font-weight: bold;
  /* &:hover {
    background-color: rgb(191 47 92);
  } */
`;

const AddedButton = styled(Button)`
  color: #7a737385;
  background-color: rgb(19 1 1 / 16%);
  cursor: auto;
`;

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  const dispatch = useDispatch();
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const reponse = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log(error));
    dispatch(selectedProduct(reponse.data));
  };
  useEffect(() => {
    if (productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <Wrapper>
          <ProductImg>
            <img src={image} alt="mobile" />
          </ProductImg>
          <ProductInfo>
            <h1>{title}</h1>
            <li>${price}</li>
            <h3>{category}</h3>
            <p>{description}</p>
            <Button
              onClick={() => dispatch(addToCart(product))}
              className="addbtn"
            >
              Add to Cart
            </Button>
          </ProductInfo>
        </Wrapper>
      )}
    </>
  );
};

export default ProductDetail;
