import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductCard from "./ProductCards.js";
import Button from "../../base/buttons/ButtonBase";
// Import for getting/modifying data from database
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";

const ProductsOverview = ({ farmerId }) => {
  const boxId = useParams().boxId;
  const [products, setProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [othersProducts, setOthersProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await dbData.getProductsBySalesboxId(boxId);
      setProducts(data);
    };

    if(farmerId !== undefined) {
      fetchProducts();
    }
  }, [farmerId]);

  useEffect(() => {
    setMyProducts(products.filter(product => product.farmer_id === farmerId));
    setOthersProducts(products.filter(product => product.farmer_id !== farmerId));
  }, [products]);

  return (
    <div>
      <div>
        <NavLink to="/restock">
          <Button>Restock</Button>
        </NavLink>
      </div>
      <h3>My products</h3>
      <div>
        {myProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            stock_quantity={product.stock_quantity}
            low_stock_definition={product.low_stock_definition}
            inStock={product.inStock}
            unit={product.unit_value}
          />
        ))}
      </div>
      <h3>Others products</h3>
      <div>
        {othersProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
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

export default ProductsOverview;
