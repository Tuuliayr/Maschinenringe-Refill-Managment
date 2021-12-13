import React, { useState } from "react";
import Button from "../../base/buttons/ButtonBase";

const NotificationNavbar = ({ handleChange }) => {
  const [expert, setExpert] = useState(false);

  const changeView = (view) => {
    if (view === "simple") {
      handleChange("simple");
      setExpert(false);
    } else {
      handleChange("expert");
      setExpert(true);
    }
  };

  return (
    <div className="notification">
      <Button
        className={`button_primary button_primary__notification-button ${
          expert ? "button_primary__bg-white" : "button_primary__bg-black"
        } `}
        onClick={() => changeView("simple")}
      >
        Simple
      </Button>
      <Button
        className={`button_primary button_primary__notification-button ${
          expert ? "button_primary__bg-black" : "button_primary__bg-white"
        } `}
        onClick={() => changeView("expert")}
      >
        Expert
      </Button>
    </div>
  );
};

export default NotificationNavbar;
