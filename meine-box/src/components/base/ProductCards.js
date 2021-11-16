import React from "react";
import StockInfo from "./StockInfo.js";

const ProductCard = (props) => {
  return (
    <div className="overview">
      <div className="product_card">
        <div className="product_name">{props.name}</div>
        <StockInfo inStock={props.inStock} />
      </div>
      <div className="units_left">{props.unit}</div>
    </div>
  );
};

export default ProductCard;
