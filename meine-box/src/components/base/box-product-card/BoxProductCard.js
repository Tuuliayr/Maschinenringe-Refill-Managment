import React, { useEffect, useState } from "react";
import check from "../../../images/icons/check.png";
import low from "../../../images/icons/warning-yellow.png";
import empty from "../../../images/icons/warning.png";

const BoxProductCard = ({name, quantity, lowStock, unit}) => {
  const [icon, setIcon] = useState(check);

  useEffect(() => {
    if(quantity === 0) {
      setIcon(empty);
    } else if (quantity <= lowStock) {
      setIcon(low);
    }
  }, [quantity, setIcon, lowStock]);

  return (
    <div className="box-product-card">
      <div className="box-product-card__title">
        <img 
          className="box-product-card__icon" 
          src={icon}
          alt="Product status icon" 
        />
        <div className="box-product-card__name">{name}</div>
      </div>
      <div className="box-product-card__stock">{quantity} {unit} in stock</div>
    </div>
  );
}

export default BoxProductCard;