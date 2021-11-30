import React from "react";

const RestockCard = (props) => {
  return (
    <div className="form_card">
      <form>
        <div className="field">
          <label>{props.name}</label>
          <div
            className="field_units"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <input
              type="text"
              pattern="[0-9]*"
              placeholder={props.stock_quantity}
              style={{ display: "inline-block" }}
            />
            <select
              defaultValue={props.unit}
              style={{ display: "inline-block" }}
            >
              <option value="kg">kg</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
          <div
            className="field_price"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <input
              type="text"
              pattern="[0-9]*"
              placeholder={props.price}
              style={{ display: "inline-block" }}
            />
            <label style={{ display: "inline-block" }}>€</label>
          </div>
        </div>
        <button type="submit" id="submitButton" className="submit_button">
          {" "}
          save
        </button>
      </form>
    </div>
  );
};

export default RestockCard;
