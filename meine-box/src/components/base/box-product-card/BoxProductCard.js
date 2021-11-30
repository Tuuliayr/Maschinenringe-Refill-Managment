import React, { useEffect, useState } from "react";

const BoxProductCard = ({name, quantity, lowStock, unit}) => {
  const [icon, setIcon] = useState("check");

  useEffect(() => {
    if(quantity === 0) {
      setIcon("danger");
    } else if (quantity <= lowStock) {
      setIcon("low");
    }
  }, [quantity, setIcon, lowStock]);

  return (
    <div className="box-product-card">
      <div className="box-product-card__title">
        <div className="box-product-card__icon">{icon}</div>
        <div className="box-product-card__name">{name}</div>
      </div>
      <div className="box-product-card__stock">{quantity}{unit} in stock</div>
    </div>
  );
}

export default BoxProductCard;