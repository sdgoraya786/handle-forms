import React from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incNumber,
  decNumber,
  multiNumber,
  divideNumber,
} from "./actions/index";

const Main = () => {
  const myState = useSelector((state) => state.chengeTheNumber);
  const myState2 = useSelector((state) => state.multDivTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h3>using React and Redux</h3>

        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={myState}
            readOnly
          />
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </a>
        </div>
      </div>

      {/* #2 Simple Calculator using React Redux | How To Add More Actions, Reducers & States In Our App */}
      <div className="container">
        <h1>Multiply/Divide counter</h1>
        <h3>using React and Redux</h3>

        <div className="quantity">
          <a
            className="quantity_minus"
            title="Divide"
            onClick={() => dispatch(divideNumber(5))}
          >
            <span>/</span>
          </a>
          <input
            type="text"
            name="quantity2"
            className="quantity_input"
            value={myState2}
            readOnly
          />
          <a
            className="quantity_plus"
            title="Multiply"
            onClick={() => dispatch(multiNumber(5))}
          >
            <span>*</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;

// Dispatch - Action ko triger krta he
