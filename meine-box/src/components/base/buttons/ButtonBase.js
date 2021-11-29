import React from "react";

const Button = (props) => {
  return (
    <button className="button_primary" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
