import React from "react";

const StockInfo = (props) => {
  return (
    <div>
      <div className="stock_info">{props.inStock}</div>
    </div>
  );
};

export default StockInfo;
