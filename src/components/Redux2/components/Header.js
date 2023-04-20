import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 15px 40px;
`;
const Headerdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
`;

const Header = (props) => {
  console.log("h", props.data);
  return (
    <>
      <Wrapper>
        <Headerdiv>
          <h1>SD Goraya</h1>
          <div>
            <span>{props.data.length}</span>
          </div>
        </Headerdiv>
      </Wrapper>
    </>
  );
};

export default Header;
