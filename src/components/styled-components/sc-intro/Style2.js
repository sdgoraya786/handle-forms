import React from "react";
import styled from "styled-components";

// Thapa Technical = #2: Variables & Nesting in Styled Components

const Style2 = () => {
  // Variables
  let myFavColor = "Black";

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
    /* color: #fff; */
    color: ${myFavColor}; /* Using Variable */
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
    /* Nesting */
    &:focus {
      box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    }

    &:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: #3c4fe0 0 3px 7px inset;
      transform: translateY(2px);
    }

    /* span {
      color: #5adaff;
      b {
        color: #761f1f;
      }
      &:hover {
        color: #3c4fe0;
      }
    } */

    /* Psuedo Element in Nesting */
    &:after {
      content: "/MSD";
    }
  `;

  const P = styled.p`
    color: #5468ff;
  `;

  return (
    <>
      <Button>
        Add
        {/* <span>
          More! <b>News</b>
        </span> */}
      </Button>
      <P>Hello SD Goraya......</P>
    </>
  );
};

export default Style2;
