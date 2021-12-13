import React, { useEffect, useState } from "react";
// Import for getting/modifying data from database
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
import SalesboxCard from "../../base/salesbox-card/SalesboxCard";
import AddNewProductModal from "../restock/AddNewProduct__Modal";

const MyBoxes = ({ farmerId }) => {
  const [products, setProducts] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [productsInBoxes, setProductsInBoxes] = useState([]);
  const [boxesData, setBoxesData] = useState([]);
  const [boxIds, setBoxIds] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  // fetch all the products of the farmer
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

  // get all the different boxes and their ids
  useEffect(() => {
    const boxes = [...new Set(products.map((product) => product.salesbox_id))];
    setBoxes(boxes);
  }, [products]);

  // separate products by salesbox id
  useEffect(() => {
    const productsInBoxes = [];
    boxes.forEach((box) => {
      const productsInBox = [];
      products.forEach((product) => {
        if (product.salesbox_id === box) {
          productsInBox.push(product);
        }
      });
      // arrange products in a box descending based on the stock level
      const arranged = productsInBox.sort(
        (x, y) =>
          // commented line wont work since if other product has bigger low stock definition
          // the product that has 0 stock would be lover than the porduct with low stock
          //x.stock_quantity - x.low_stock_definition) - (y.stock_quantity - y.low_stock_definition)
          x.stock_quantity - y.stock_quantity
      );
      if (arranged.length > 3) {
        productsInBoxes.push(arranged.slice(0, 3));
      } else {
        productsInBoxes.push(arranged);
      }
    });

    setProductsInBoxes(productsInBoxes);
    console.log(productsInBoxes);
  }, [boxes, products]);

  // fetch all boxes
  useEffect(() => {
    const fetchBoxes = async () => {
      const data = await dbData.getSalesBoxes();
      setBoxesData(data);
      console.log(boxesData);
    };
    if (boxesData.length === 0) {
      fetchBoxes();
    }
  }, []);

  // get ids from all boxes
  useEffect(() => {
    const ids = [...new Set(boxesData.map((box) => box.id))];
    setBoxIds(ids);
  }, [boxesData]);

  // open and close modal
  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  function addProductToState(product) {
    setProductsInBoxes((existingProducts) => [...existingProducts, product]);
  }

  return (
    <div className="my-boxes">
      <h1 className="my-boxes__title">My boxes</h1>
      {boxes.map((box, index) => (
        <SalesboxCard
          key={box}
          boxId={box}
          boxProducts={productsInBoxes[index]}
        />
      ))}
      <div>
        <button className="button_primary" onClick={toggleModal}>
          Add product to a box
        </button>
        <AddNewProductModal
          isOpen={modalIsOpen}
          toggleModal={toggleModal}
          // toggle={toggleModal}
          addProductToState={addProductToState}
          farmerId={farmerId}
          boxIds={boxIds}
        ></AddNewProductModal>
      </div>
    </div>
  );
};

export default MyBoxes;
