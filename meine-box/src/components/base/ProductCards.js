import React from "react";
import StockInfo from "./StockInfo.js";

const ProductCard = (props) => {
  return (
    <div className="overview">
      <div className="product_card">
        <div className="product_name">{props.name}</div>
        <StockInfo 
          stock_quantity={props.stock_quantity} 
          low_stock_definition={props.low_stock_definition}
        />
      </div>
      <div className="units_left">{props.stock_quantity}{props.unit}</div>
    </div>
  );
};

export default ProductCard;
