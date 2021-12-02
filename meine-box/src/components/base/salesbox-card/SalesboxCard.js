import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import BoxProductCard from '../box-product-card/BoxProductCard';
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";

const SalesboxCard = ({boxId, boxProducts}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(boxProducts !== undefined) {
      setProducts(boxProducts);
    }
  }, [boxProducts]);

  useEffect(() => {
    const fetchBox = async () => {
      // const box = await dbData.getBox(boxId);
      // console.log(box);
    }

    if(boxId !== undefined) {
      fetchBox();
    }
  }) 

  return (
    <NavLink className="link" to={`/productsoverview/${boxId}`}>
      <div className="box-card"> 
        <h3 className="box-card__title"> Box {boxId} </h3>
        <p className="box-card__address">Address</p>
        {products.map(product => (
          <BoxProductCard
            key={product.id}
            name={product.name}
            quantity={product.stock_quantity}
            lowStock={product.low_stock_definition}
            unit={product.unit_value}

          />
        ))}
      </div>
    </NavLink>
  );
}

export default SalesboxCard;