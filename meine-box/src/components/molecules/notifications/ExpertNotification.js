import React, { useState } from "react";
import Button from "../../base/buttons/ButtonBase";

const ExpertNotification = () => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <p>Add new notification.</p>
      <h3>Notifications:</h3>
      <Button
        className={`button button__notification-type ${
          active === "all" ? "button__bg-black" : "button__bg-white"
        } `}
        onClick={() => setActive("all")}
      >
        All Items
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

export default ExpertNotification;
