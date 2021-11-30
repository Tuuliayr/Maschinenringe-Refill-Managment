import React from "react";
import { ReactComponent as SVGIcon } from "../../../images/mr-svg-icons/add-icon.svg";
import Button from "./ButtonBase";

const AddProductButton = (props) => {
  return (
    <div style={{ display: "inline-block", marginLeft: "50%" }}>
      <Button className="button_round" onClick={props.onClick}>
        <SVGIcon />
      </Button>
    </div>
  );
};

export default AddProductButton;
