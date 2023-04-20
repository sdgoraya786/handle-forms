import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";

const Items = (item) => {
  const { id, title, category, price, image } = item;
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{category}</p>
        </div>
        <div className="add-minus-quantity">
          <FaMinus className="add-minus" />
          <input type="text" placeholder="1" readOnly />
          <FaPlus className="add-minus" />
        </div>
        <div className="totalprice">
          <h3>Rs {price}</h3>
        </div>
        <div className="remove-item">
          <AiFillDelete className="remove" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
