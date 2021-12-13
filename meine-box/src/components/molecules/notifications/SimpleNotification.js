import React, { useState } from "react";
import Button from "../../base/buttons/ButtonBase";

const SimpleNotification = () => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <p>Notification will be sent at 3 AM daily.</p>
      <h3>Minimum criticality for Notification:</h3>
      <Button
        className={`button_primary button_primary__notification-type ${
          active === "all"
            ? "button_primary__bg-black"
            : "button_primary__bg-white"
        } `}
        onClick={() => setActive("all")}
      >
        All <br />
        Items
      </Button>
      <Button
        className={`button_primary button_primary__notification-type ${
          active === "critical"
            ? "button_primary__bg-black"
            : "button_primary__bg-white"
        } `}
        onClick={() => setActive("critical")}
      >
        Critical Stock
      </Button>
      <Button
        className={`button_primary button_primary__notification-type ${
          active === "out"
            ? "button_primary__bg-black"
            : "button_primary__bg-white"
        } `}
        onClick={() => setActive("out")}
      >
        Out of Stock
      </Button>
    </div>
  );
};

export default SimpleNotification;
