import React, { useState, useEffect } from "react";
import check from "../../../images/icons/check.png";
import low from "../../../images/icons/warning-yellow.png";
import empty from "../../../images/icons/warning.png";
import trash from "../../../images/mr-svg-icons/delete-icon.svg";
import edit from "../../../images/mr-svg-icons/edit-icon.svg";

const ModifyProductCard = (props) => {
  const [icon, setIcon] = useState(check);

  useEffect(() => {
    if (props.stock_quantity === 0) {
      setIcon(empty);
    } else if (props.stock_quantity <= props.low_stock_definition) {
      setIcon(low);
    }
  }, [props.stock_quantity, setIcon, props.low_stock_definition]);
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
        {props.stock_quantity} {props.unit}
      </div>
      <div>
        <button
          className="button_round"
          style={{
            width: "1rem",
            height: "1rem",
            marginLeft: "1rem",
            background: { trash },
          }}
        >
          <img
            className="modify-product-card__icon"
            src={edit}
            alt="product status icon"
          />
        </button>
      </div>
      <div>
        <button
          className="button_round"
          style={{
            width: "1rem",
            height: "1rem",
            marginLeft: "1rem",
            background: { trash },
          }}
        >
          <img
            className="modify-product-card__icon"
            src={trash}
            alt="product status icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ModifyProductCard;
