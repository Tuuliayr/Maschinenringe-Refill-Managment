import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
import RestockCard from "./RestockCard";
import AddProductButton from "../../base/buttons/AddProductButton";
import AddNewProduct from "./AddNewProduct";

const Restock = ({ farmerId }) => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      // CHANGE 31 to farmerId when problem of id turning undefined is fixed
      const data = await dbData.getProductsByFarmerId(31);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  function addProductToState(product) {
    setProducts((existingProducts) => [...existingProducts, product]);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  return (
    <div>
      <div>
        <AddProductButton onClick={handleModal} />
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={handleModal}
          // style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
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
          <AddNewProduct
            handleModal={() => handleModal()}
            addProductToState={addProductToState}
          />
          {/* <button
            className="button_primary"
            style={{ backgroundColor: "#fa4359" }}
            onClick={handleModal}
          >
            cancel
          </button> */}
        </Modal>
      </div>
      <div>
        {products.map((product) => (
          <RestockCard
            key={product.id}
            name={product.name}
            price={product.price_per_unit}
            stock_quantity={product.stock_quantity}
            low_stock_definition={product.low_stock_definition}
            inStock={product.inStock}
            unit={product.unit_value}
          />
        ))}
      </div>
    </div>
  );
};

export default Restock;
