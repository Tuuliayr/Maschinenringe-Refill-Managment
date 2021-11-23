import React from "react";

const BoxProductCard = ({name, quantity, unit}) => {
  return (
    <div className="box-product-card">
      <div className="box-product-card__icon">icon</div>
      <div className="box-product-card__name">{name}</div>
      <div className="box-product-card__stock">{quantity}{unit} in stock</div>
    </div>
  );
}

export default BoxProductCard;