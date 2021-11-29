import React, { useState } from "react";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";

const AddNewProduct = (props) => {
  const [newProductName, setNewProductName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [unitValue, setUnitValue] = useState("kg");
  const [stockQty, setStockQty] = useState(undefined);
  const [lowStockDef, setLowStockDef] = useState(undefined);
  const [expDate, setExpDate] = useState("");

  async function handleSubmit() {
    try {
      const testProduct = await dbData.addNewProduct(
        newProductName,
        price,
        unitValue,
        stockQty,
        lowStockDef,
        "2021-12-22 00:00:00",
        31,
        1
      );
      const productObj = {
        id: Date.now(),
        name: newProductName,
        price_per_unit: price,
        stock_quantity: stockQty,
        low_stock_definition: lowStockDef,
        unit_value: unitValue,
      };
      console.log(testProduct);
      props.handleModal();
      props.addProductToState(productObj);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="form_new_product">
      <form>
        <div className="field">
          <label>Add new product</label>
          <input
            className="new_product_name"
            type="text"
            placeholder="Product name"
            onChange={(event) => setNewProductName(event.target.value)}
          />
          <div
            className="field_units"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <input
              type="text"
              pattern="[0-9]*"
              placeholder="Quantity"
              style={{ display: "inline-block" }}
              onChange={(event) => setStockQty(event.target.value)}
            />
            <select
              className="dropdown_units"
              defaultValue="kg"
              style={{ display: "inline-block" }}
              onChange={(event) => setUnitValue(event.target.value)}
            >
              <option value="kg">kg</option>
              <option value="pcs">pcs</option>
            </select>
            <div>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder="Low stock def"
                onChange={(event) => setLowStockDef(event.target.value)}
              />
            </div>
          </div>
          <div className="field_expiration_date">
            <input
              type="text"
              placeholder="2021-12-22 00:00:00"
              style={{ display: "inline-block" }}
              onChange={(event) => setExpDate(event.target.value)}
            />
          </div>
          <div
            className="field_price"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <input
              type="text"
              pattern="[0-9]*"
              placeholder="Price"
              style={{ display: "inline-block" }}
              onChange={(event) => setPrice(event.target.value)}
            />
            <label style={{ display: "inline-block" }}>€</label>
          </div>
        </div>
      </form>
      <div style={{ margin: "2rem 0 1rem 0" }}>
        <button className="button_primary" onClick={handleSubmit}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNewProduct;
