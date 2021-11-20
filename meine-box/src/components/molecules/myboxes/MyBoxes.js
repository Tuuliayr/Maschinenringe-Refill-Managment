import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../base/buttons/ButtonBase";

const MyBoxes = () => {
  return (
    <div>
      <h1>My boxes</h1>
      <NavLink to="/productsoverview">
        <Button>products</Button>
      </NavLink>
    </div>
  );
};

export default MyBoxes;