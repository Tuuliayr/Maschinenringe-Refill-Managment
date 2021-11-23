import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../base/buttons/ButtonBase";
// Import for getting/modifying data from database
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
import SalesboxCard from "../../base/salesbox-card/SalesboxCard";

const MyBoxes = ({farmerId}) => {

  const [products, setProducts] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [productsInBoxes, setProductsInBoxes] = useState([]);

  // fetch all the products of the farmer
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await dbData.getProductsByFarmerId(farmerId);
      setProducts(data);
    };

    if(farmerId !== undefined) {
      fetchProducts();
    }
  }, [farmerId]);

  // get all the different boxes and their ids
  useEffect(() => {
    const boxes = [...new Set(products.map(product => product.salesbox_id))];
    setBoxes(boxes);
  }, [products]);

  // separate product by salesbox id
  useEffect(() => {
    const productsInBoxes = [];
    boxes.forEach(box => {
      const productsInBox = [];
      products.forEach(product => {
        if(product.salesbox_id === box) {
          productsInBox.push(product);
        }
      });
      productsInBoxes.push(productsInBox);
    })
    setProductsInBoxes(productsInBoxes);
  }, [boxes]);

  return (
    <div>
      <h1>My boxes</h1>
      <NavLink to="/productsoverview">
        <Button>products</Button>
      </NavLink>
      {boxes.map((box, index) => (
        <SalesboxCard key={box} boxId={box} products={productsInBoxes[index]} />
      ))}
    </div>
  );
};

export default MyBoxes;
