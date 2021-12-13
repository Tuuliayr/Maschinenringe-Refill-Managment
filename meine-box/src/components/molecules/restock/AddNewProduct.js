import React, { useState, useEffect } from "react";
import { getNumberFormatSettings } from "react-native-localize";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";

const AddNewProduct = (props) => {
  const [newProductName, setNewProductName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [unitValue, setUnitValue] = useState("kg");
  const [stockQty, setStockQty] = useState(undefined);
  const [lowStockDef, setLowStockDef] = useState(undefined);
  const [selectedBoxId, setSelectedBoxId] = useState(props.boxId);
  const [boxListIsShown, setIsShown] = useState(true);

  useEffect(() => {
    if (props.boxIds !== undefined) {
      var select = document.getElementById("selectNumber");
      var options = props.boxIds;

      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    } else {
      hideComponent();
    }
  }, []);

  // replace decimal comma with decimal point
  function parseLocaleNumber(stringNumber) {
    const { decimalSeparator, groupingSeparator } = getNumberFormatSettings();

    return Number(
      stringNumber
        .replace(new RegExp(`\\${groupingSeparator}`, "g"), "")
        .replace(new RegExp(`\\${decimalSeparator}`), ".")
    );
  }

  function hideComponent() {
    setIsShown(!boxListIsShown);
  }

  async function handleSubmit() {
    try {
      const newProduct = await dbData.addNewProduct(
        newProductName,
        price,
        unitValue,
        stockQty,
        lowStockDef,
        "2021-12-22 00:00:00",
        props.farmerId,
        selectedBoxId
      );
      const productObj = {
        name: newProductName,
        price_per_unit: price,
        stock_quantity: stockQty,
        low_stock_definition: lowStockDef,
        unit_value: unitValue,
      };
      props.addProductToState(productObj);
      props.toggleModal();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="form-product">
      <form>
        <div>
          <label>Add new product</label>
          {boxListIsShown && (
            <div>
              <select
                id="selectNumber"
                className="form-product__dropdown"
                defaultValue={props.boxId}
                onChange={(event) => setSelectedBoxId(event.target.value)}
              >
                <option>Select box</option>
              </select>
            </div>
          )}
          <input
            className="form-product__product-name"
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
              placeholder="0"
              style={{ display: "inline-block" }}
              onChange={(event) =>
                setStockQty(parseLocaleNumber(event.target.value))
              }
            />
            <select
              className="form-product__dropdown"
              defaultValue="kg"
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
                placeholder="0"
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
              placeholder="0.0"
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
          save
        </button>
      </div>
    </div>
  );
};

export default AddNewProduct;
