import React, {useState, useEffect} from "react";
import check from "../../../images/icons/check.png";
import low from "../../../images/icons/warning-yellow.png";
import empty from "../../../images/icons/warning.png";

const ProductCard = (props) => {
  const [icon, setIcon] = useState(check);

  useEffect(() => {
    if(props.quantity === 0) {
      setIcon(empty);
    } else if (props.quantity <= props.lowStock) {
      setIcon(low);
    }
  }, [props.quantity, setIcon, props.lowStock]);
  
  return (
    <div className="product-card">
      <div className="product-card__heading">
        <img 
            className="box-product-card__icon" 
            src={icon}
            alt="product status icon"
          />
        <div className="product-card__name">{props.name}</div>
      </div>
      <div className="product-card__quantity">
        {props.quantity} {props.unit}
      </div>
    </div>
  );
};

export default ProductCard;
