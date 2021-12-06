import React, { useState, useEffect } from "react";
// import Modal from "react-modal";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
// import AddNewProduct from "./AddNewProduct";
import ModifyProductCard from "./ModifyProductCard";
// import add from "../../../images/mr-svg-icons/add-icon.svg";

const RestockAllProducts = ({ farmerId }) => {
  const [products, setProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [updateProducts, setUpdateProducts] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      const data = await dbData.getProductsByFarmerId(farmerId);
      setProducts(data);
    };

    if (farmerId !== undefined) {
      fetchProducts();
    }
  }, [farmerId]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    const mine = products.filter((product) => product.farmer_id === farmerId);
    setMyProducts(mine.sort((x, y) => x.stock_quantity - y.stock_quantity));
  }, [products, farmerId]);

  // function handleModal() {
  //   setIsOpen(!modalIsOpen);
  // }

  // function addProductToState() {
  //   setUpdateProducts(!updateProducts);
  //   // setMyProducts((existingProducts) => [...existingProducts, product]);
  // }

  function removeProductFromState(id) {
    setMyProducts(myProducts.filter((product) => product.id !== id));
  }

  function updateProductToState(newProduct) {
    const newArray = [...myProducts];
    for (let i = 0; i < myProducts.length; i++) {
      if (myProducts[i].id === newProduct.id) {
        newArray[i] = newProduct;
      }
    }
    setMyProducts(newArray);
  }

  return (
    <div>
      <div>Restock all my products</div>
      {/* <div> */}
      {/* <button className="button_round" onClick={handleModal}>
          <img
            style={{ width: "2.5rem", height: "2.5rem" }}
            src={add}
            alt="product status icon"
          />
        </button> */}
      {/* <Modal
          isOpen={modalIsOpen}
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
            farmerId={farmerId}
            // boxId={boxId}
          />
        </Modal> */}
      {/* </div> */}
      <div>
        {myProducts.map((product) => (
          <ModifyProductCard
            product_id={product.id}
            name={product.name}
            price={product.price_per_unit}
            stock_quantity={product.stock_quantity}
            low_stock_definition={product.low_stock_definition}
            inStock={product.inStock}
            unit_value={product.unit_value}
            removeProductFromState={removeProductFromState}
            updateProductToState={updateProductToState}
          />
        ))}
      </div>
    </div>
  );
};

export default RestockAllProducts;