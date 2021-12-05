import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
import RestockCard from "./RestockCard";
import AddProductButton from "../../base/buttons/AddProductButton";
import AddNewProduct from "./AddNewProduct";

const Restock = ({ farmerId }) => {
  const boxId = useParams().boxId;
  const [products, setProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      const data = await dbData.getProductsBySalesboxId(boxId);
      setProducts(data);
    };

    if (farmerId !== undefined) {
      fetchProducts();
    }
  }, [farmerId, boxId]);

  useEffect(() => {
    // window.scrollTo(0, 0);
    const mine = products.filter((product) => product.farmer_id === farmerId);
    setMyProducts(mine.sort((x, y) => x.stock_quantity - y.stock_quantity));
  }, [products, farmerId]);

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  function addProductToState(product) {
    setMyProducts((existingProducts) => [...existingProducts, product]);
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
            boxId={boxId}
          />
        </Modal>
      </div>
      <div>
        {myProducts.map((product) => (
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
