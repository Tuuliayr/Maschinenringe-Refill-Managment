import React, { useEffect, useState } from "react";

const StockInfo = ({stock_quantity, low_stock_definition}) => {
  const [inStock, setInStock] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (stock_quantity === 0) {
      setInStock("Out of stock");
      setColor("red");
    } else if(stock_quantity <= low_stock_definition ) {
      setInStock("Low stock");
      setColor("yellow");
    } else {
      setInStock("In stock");
      setColor("green");
    }
  }, [low_stock_definition, stock_quantity])
  return (
    <div>
      <div className={`stock_info stock_info--${color}`}>{inStock}</div>
    </div>
  );
};

export default StockInfo;
