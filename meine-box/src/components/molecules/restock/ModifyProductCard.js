import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
import check from "../../../images/icons/check.png";
import low from "../../../images/icons/warning-yellow.png";
import empty from "../../../images/icons/warning.png";
import trash from "../../../images/mr-svg-icons/delete-icon.svg";
import edit from "../../../images/mr-svg-icons/edit-icon.svg";
import EditProduct from "./EditProduct";

const ModifyProductCard = (props) => {
  const [icon, setIcon] = useState(check);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.stock_quantity === 0) {
      setIcon(empty);
    } else if (props.stock_quantity <= props.low_stock_definition) {
      setIcon(low);
    }
  }, [props.stock_quantity, setIcon, props.low_stock_definition]);

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  async function handleDelete() {
    try {
      const productToDelete = await dbData.deleteProduct(props.product_id);
      console.log(props.product_id);
      console.log(props.name);
      props.removeProductFromState(props.product_id);
    } catch (e) {
      console.log(e);
    }
  }

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
        {props.stock_quantity} {props.unit_value}
      </div>
      <div>
        <button
          className="button_round"
          style={{
            width: "1rem",
            height: "1rem",
            marginLeft: "1rem",
          }}
          onClick={handleModal}
        >
          <img
            className="modify-product-card__icon"
            src={edit}
            alt="product status icon"
          />
        </button>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div style={{ margin: "5rem" }}>
            <button
              className="button_secondary"
              style={{
                backgroundColor: "#fa4359",
                margin: "2rem 2rem 0 0",
                position: "absolute",
                top: "0",
                right: "0",
              }}
              onClick={handleModal}
            >
              cancel
            </button>
          </div>
          <EditProduct
            product_id={props.product_id}
            name={props.name}
            price={props.price}
            stock_quantity={props.stock_quantity}
            low_stock_definition={props.low_stock_definition}
            unit_value={props.unit_value}
            farmerId={props.farmerId}
            boxId={props.boxId}
            handleModal={() => handleModal()}
            updateProductToState={props.updateProductToState}
          />
        </Modal>
      </div>
      <div>
        <button
          className="button_round"
          style={{
            width: "1rem",
            height: "1rem",
            marginLeft: "1.25rem",
          }}
          onClick={handleDelete}
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
