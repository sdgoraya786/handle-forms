import React from "react";
import styled from "styled-components";

// Thapa Technical = #3: How to pass PROPS in Styled Components
// const Style3 = () => {
//   const Button = styled.button`
//     align-items: center;
//     appearance: none;
//     /** get Props */
//     /* background-color: ${(props) => props.bg}; */
//     background-color: ${({ bg }) => bg}; /** destructor Props */
//     border: 0;
//     border-radius: 6px;
//     box-sizing: border-box;
//     color: #fff;
//     box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
//       rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
//       rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
//     cursor: pointer;
//     display: inline-flex;
//     height: 38px;
//     justify-content: center;
//     line-height: 1;
//     padding-left: 16px;
//     padding-right: 16px;
//     font-size: 18px;

//     /* Nesting */
//     &:focus {
//       box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
//         rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
//     }

//     &:hover {
//       box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
//         rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
//       transform: translateY(-2px);
//     }

//     &:active {
//       box-shadow: #3c4fe0 0 3px 7px inset;
//       transform: translateY(2px);
//     }
//   `;

//   const P = styled.p`
//     color: #5468ff;
//   `;

//   return (
//     <>
//       <Button bg="purple">Add</Button>
//       <P>Hello SD Goraya......</P>
//     </>
//   );
// };

// export default Style3;

//-------------------------------------------------------//
//// ---- Adapting css based on props ---- ////
// const Style3 = () => {
//   const Button = styled.button`
//     /* Adapt the colors based on primary prop */
//     color: ${(props) => (props.primary ? "white" : "palevioletred")};
//     background-color: ${(props) => (props.primary ? "palevioletred" : "white")};
//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid palevioletred;
//     border-radius: 3px;
//     cursor: pointer;
//   `;
//   return (
//     <>
//       <Button>Normal</Button>
//       <Button primary>Primary</Button>
//     </>
//   );
// };

// export default Style3;

//---------------------------------------------------------//
//// ------ Extending Styles ----- ////
const Style3 = () => {
  const Button = styled.button`
    color: palevioletred;
    background-color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
  `;
  // A new component based on Button, but with some override styles
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;
  return (
    <>
      <Button>Normal</Button>
      <TomatoButton>Primary</TomatoButton>
    </>
  );
};

export default Style3;
