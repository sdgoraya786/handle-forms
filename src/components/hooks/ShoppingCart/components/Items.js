import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "./Cart";

const Items = (item) => {
  const { id, title, description, price, img, quantity } = item;
  const { removeItem, qtyIncrement, qtyDecrement } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          {/* Condition 2 for qty must be equal or greater then 1  */}
          {/* {quantity > 1 ? (
            <FaMinus className="add-minus" onClick={() => qtyDecrement(id)} />
          ) : (
            <FaMinus className="add-minus" />
          )} */}
          {/*  */}
          <FaMinus className="add-minus" onClick={() => qtyDecrement(id)} />
          <input type="text" placeholder={quantity} readOnly />
          <FaPlus className="add-minus" onClick={() => qtyIncrement(id)} />
        </div>
        <div className="price">
          <h3>Rs {price}</h3>
        </div>
        <div className="remove-item">
          <AiFillDelete className="remove" onClick={() => removeItem(id)} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
