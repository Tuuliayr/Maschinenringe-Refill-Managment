import React, { useState } from "react";
import Button from "../../base/buttons/ButtonBase";

const SimpleNotification = () => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <p>Notification will be sent at 3 AM daily.</p>
      <h3>Minimum criticality for Notification:</h3>
      <Button
        className={`button button__notification-type ${
          active === "all" ? "button__bg-black" : "button__bg-white"
        } `}
        onClick={() => setActive("all")}
      >
        All <br />
        Items
      </Button>
      <Button
        className={`button button__notification-type ${
          active === "critical" ? "button__bg-black" : "button__bg-white"
        } `}
        onClick={() => setActive("critical")}
      >
        Critical Stock
      </Button>
      <Button
        className={`button button__notification-type ${
          active === "out" ? "button__bg-black" : "button__bg-white"
        } `}
        onClick={() => setActive("out")}
      >
        Out of Stock
      </Button>
    </div>
  );
};

export default SimpleNotification;
