import React from "react";
import Modal from "react-modal";
import AddNewProduct from "./AddNewProduct";

const AddNewProductModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      ariaHideApp={false}
      contentLabel="Modal for adding new products"
    >
      <div style={{ margin: "5rem" }}>
        <button className="button_secondary" onClick={props.toggleModal}>
          cancel
        </button>
        <AddNewProduct
          toggleModal={props.toggleModal}
          addProductToState={props.addProductToState}
          farmerId={props.farmerId}
          boxIds={props.boxIds}
          boxId={props.boxId}
        />
      </div>
    </Modal>
  );
};

export default AddNewProductModal;
