import React from "react";
import styled from "styled-components";

// Thapa Technical = Styled Component in React in Hindi #1: Introduction to Styled Component

const Style1 = () => {
  // Method 1
  const Button = styled.button`
    align-items: center;
    appearance: none;
    background-image: radial-gradient(
      100% 100% at 100% 0,
      #5adaff 0,
      #5468ff 100%
    );
    border: 0;
    border-radius: 6px;
    box-sizing: border-box;
    color: #fff;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    cursor: pointer;
    display: inline-flex;
    height: 38px;
    /* justify-content: center; */
    line-height: 1;
    padding-left: 16px;
    padding-right: 16px;
    /* overflow: hidden;
    position: relative; */
    /* transition: box-shadow 0.15s, transform 0.15s; */
    font-size: 18px;
  `;
  const P = styled.p`
    color: #5468ff;
  `;

  // Method 2
  const Wrapper = styled.section`
    .btn {
      background-image: radial-gradient(
        100% 100% at 100% 0,
        #5adaff 0,
        #5468ff 100%
      );
      border: 0;
      border-radius: 6px;
      box-sizing: border-box;
    }
    p {
      color: #5468ff;
    }
  `;
  return (
    <>
      {/* <Button>Add</Button>
      <P>Hello SD Goraya......</P> */}

      <Wrapper>
        <button className="btn">I'm SD</button>
        <p>Hello SD Goraya....</p>
      </Wrapper>
    </>
  );
};

export default Style1;
