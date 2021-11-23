import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../../base/ProductCards.js";
import Button from "../../base/buttons/ButtonBase";
// Import for getting/modifying data from database
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";

const ProductsOverview = ({ farmerId }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await dbData.getProductsByFarmerId(farmerId);
      setProducts(data);
    };

    if(farmerId !== undefined) {
      fetchProducts();
    }
  }, [farmerId]);

  return (
    <div>
      <div>
        <NavLink to="/restock">
          <Button>Restock</Button>
        </NavLink>
      </div>
      <div>
        {products.map((product) => (
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
