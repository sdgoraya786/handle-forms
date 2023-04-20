import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductContainer = () => {
  const products = useSelector((state) => state.allProducts.products);

  return products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
              </div>
              <div className="price-cat">
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
};

export default ProductContainer;
