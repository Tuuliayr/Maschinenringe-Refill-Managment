import React, { useState } from "react";
import Button from "../../base/buttons/ButtonBase";

const NotificationNavbar = () => {
  const [expert, setExpert] = useState(false);

  return (
    <div className="notification">
      <Button
        className={`button button__notification-button ${
          expert ? "button__bg-white" : "button__bg-black"
        } `}
        onClick={() => setExpert(false)}
      >
        Simple
      </Button>
      <Button
        className={`button button__notification-button ${
          expert ? "button__bg-black" : "button__bg-white"
        } `}
        onClick={() => setExpert(true)}
      >
        Expert
      </Button>
    </div>
  );
};

export default NotificationNavbar;
