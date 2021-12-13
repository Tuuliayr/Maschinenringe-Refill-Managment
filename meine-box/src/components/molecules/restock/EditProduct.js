import React, { useState, useEffect } from "react";
import { getNumberFormatSettings } from "react-native-localize";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";

const EditProduct = (props) => {
  const [productName, setProductName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [unitValue, setUnitValue] = useState(props.unit_value);
  const [stockQty, setStockQty] = useState(props.stock_quantity);
  const [lowStockDef, setLowStockDef] = useState(props.low_stock_definition);

  function parseLocaleNumber(stringNumber) {
    const { decimalSeparator, groupingSeparator } = getNumberFormatSettings();

    return Number(
      stringNumber
        .replace(new RegExp(`\\${groupingSeparator}`, "g"), "")
        .replace(new RegExp(`\\${decimalSeparator}`), ".")
    );
  }

  async function handleSubmit() {
    try {
      const productToUpdate = await dbData.updateProduct(
        props.product_id,
        productName,
        price,
        unitValue,
        stockQty,
        lowStockDef,
        "2021-12-22 00:00:00",
        props.farmerId,
        props.boxId
      );
      const productObj = {
        id: props.product_id,
        name: productName,
        price_per_unit: price,
        stock_quantity: stockQty,
        low_stock_definition: lowStockDef,
        unit_value: unitValue,
      };
      props.handleModal();
      props.updateProductToState(productObj);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="form-product">
      <form>
        <div>
          <label>Edit product</label>
          <input
            className="form-product__product-name"
            type="text"
            placeholder={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
          <div
            className="field_units"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <input
              type="text"
              pattern="[0-9]*"
              placeholder={stockQty}
              style={{ display: "inline-block" }}
              onChange={(event) =>
                setStockQty(parseLocaleNumber(event.target.value))
              }
            />
            <select
              className="form-product__dropdown"
              defaultValue={unitValue}
              style={{ display: "inline-block" }}
              onChange={(event) => setUnitValue(event.target.value)}
            >
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="pcs">pcs</option>
            </select>
            <div>
              <div>Low stock definition</div>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={lowStockDef}
                onChange={(event) =>
                  setLowStockDef(parseLocaleNumber(event.target.value))
                }
              />
            </div>
          </div>
          <div
            className="field_price"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <div>Price per unit</div>
            <input
              type="text"
              pattern="[0-9]*"
              placeholder={price}
              style={{ display: "inline-block" }}
              onChange={(event) =>
                setPrice(parseLocaleNumber(event.target.value))
              }
            />
            <label style={{ display: "inline-block" }}>€</label>
          </div>
        </div>
      </form>
      <div style={{ margin: "2rem 0 1rem 0" }}>
        <button className="button_primary" onClick={handleSubmit}>
          save changes
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
