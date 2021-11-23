import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../base/buttons/ButtonBase";
// Import for getting/modifying data from database
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
import SalesboxCard from "../../base/salesbox-card/SalesboxCard";

const MyBoxes = ({farmerId}) => {

  const [products, setProducts] = useState([]);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await dbData.getProductsByFarmerId(farmerId);
      setProducts(data);
    };

    if(farmerId !== undefined) {
      fetchProducts();
    }
  }, [farmerId]);

  useEffect(() => {
    const boxes = [...new Set(products.map(product => product.salesbox_id))];
    setBoxes(boxes);
  }, [products]);

  return (
    <div>
      <h1>My boxes</h1>
      <NavLink to="/productsoverview">
        <Button>products</Button>
      </NavLink>
      {boxes.map(box => (
        <SalesboxCard key={box} boxId={box} />
      ))}
    </div>
  );
};

export default MyBoxes;
