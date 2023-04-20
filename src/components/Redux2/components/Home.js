import React from "react";
import mobile from "../images/mobile.png";
import styled from "styled-components";
// import { addToCart } from "../Services/Actions/action";
// import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.section`
  display: flex;
  margin: 0 40px;
  border: 1px solid #c5bebe;
`;
const ImageDiv = styled.div`
  width: 85%;
  border-right: 1px solid #c5bebe;
  img {
    width: 100%;
  }
`;
const ImageDetailDiv = styled.div`
  padding: 10px 40px;
  width: 100%;
  li {
    margin: 13px 0px;
    background-color: rgb(26, 171, 183);
    clip-path: polygon(18% 0px, 100% 0%, 100% 100%, 18% 100%, 0px 50%);
    color: white;
    padding: 8px 0 8px 20px;
    width: 110px;
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
  &:hover {
    background-color: rgb(191 47 92);
  }
`;
const RemoveButton = styled(Button)`
  background-color: rgb(46 18 27);
  float: right;
  &:hover {
    background-color: rgb(86 36 52);
  }
`;

const Home = (props) => {
  // const cartItems = useSelector((state) => state.cartItems);
  // const dispatch = useDispatch();
  // console.log(props);
  return (
    <>
      <Wrapper>
        <ImageDiv>
          <img src={mobile} alt="mobile" />
        </ImageDiv>
        <ImageDetailDiv>
          <h1>i-Phone MaxPro 12</h1>
          <li>$3245</li>
          <h3>mobile</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas velit facilis consequatur magnam quo natus
            commodi inventore quam tenetur quasi nam, dicta aspernatur, quidem
            blanditiis rem asperiores nesciunt dignissimos.
          </p>
          <Button
            onClick={() =>
              props.addToCartHandler({
                id: 1,
                name: "i-Phone MaxPro 12",
                price: 3245,
              })
            }
          >
            Add to Cart
          </Button>
          <RemoveButton onClick={() => props.removeToCartHandler()}>
            Remove to Cart
          </RemoveButton>
        </ImageDetailDiv>
      </Wrapper>
    </>
  );
};

export default Home;
