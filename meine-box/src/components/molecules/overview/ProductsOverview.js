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
    const mine = products.filter(product => product.farmer_id === farmerId);
    setMyProducts(mine.sort((x, y) => (x.stock_quantity - y.stock_quantity)));
    const others = products.filter(product => product.farmer_id !== farmerId);
    setOthersProducts(others.sort((x, y) => (x.stock_quantity - y.stock_quantity)));
  }, [products]);

  return (
    <div className="products-overview">
      <div className="products-overview__header">
        <h1 className="products-overview__title">Box {boxId}</h1>
        <NavLink to="/restock">
          <Button>Restock</Button>
        </NavLink>
      </div>

      <h3>My products</h3>
      <div className="product-overview__listing">
        {myProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            quantity={product.stock_quantity}
            lowStock={product.low_stock_definition}
            inStock={product.inStock}
            unit={product.unit_value}
          />
        ))}
      </div>
      <h3>Other's products</h3>
      <div className="product-overview__listing">
        {othersProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            quantity={product.stock_quantity}
            lowStock={product.low_stock_definition}
            inStock={product.inStock}
            unit={product.unit_value}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsOverview;
