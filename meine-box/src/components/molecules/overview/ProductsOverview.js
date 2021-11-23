import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../../base/ProductCards.js";
import Button from "../../base/buttons/ButtonBase";
// Import for getting/modifying data from database
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";

const ProductsOverview = ({ farmerId }) => {
  /*
  const data = [
    { id: 1, value: "Tomato", inStock: "in stock", unit: "5 kg" },
    { id: 2, value: "Cucumber", inStock: "in stock", unit: "5 kg" },
    { id: 3, value: "Eggs", inStock: "in stock", unit: "6 pcs" },
    { id: 4, value: "Cabbage", inStock: "in stock", unit: "5 kg" },
    { id: 5, value: "Onions", inStock: "in stock", unit: "5 kg" },
    { id: 6, value: "Potato", inStock: "out of stock", unit: "5 kg" },
    { id: 7, value: "Mushroom", inStock: "in stock", unit: "5 kg" },
  ];
  */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // CHANGE 31 to farmerId when problem of id turning undefined is fixed
      const data = await dbData.getProductsByFarmerId(31);
      console.log(farmerId);
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
