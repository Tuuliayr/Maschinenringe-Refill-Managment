import React from "react";
import StockInfo from "./StockInfo.js";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-card__heading">
        <div className="product-card__name">{props.name}</div>
        <StockInfo
          stock_quantity={props.stock_quantity}
          low_stock_definition={props.low_stock_definition}
        />
      </div>
      <div className="product-card__quantity">
        {props.stock_quantity} {props.unit}
      </div>
    </div>
  );
};

export default ProductCard;
