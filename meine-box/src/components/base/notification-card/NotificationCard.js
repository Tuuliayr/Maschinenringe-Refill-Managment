import React from "react";
import { ReactComponent as Remove } from "../../../images/mr-svg-icons/delete-icon.svg";
import Button from "../../base/buttons/ButtonBase";
const NotificationCard = ({ notification }) => {
  return (
    <div>
      <div className="notificationcard">
        <div className="notificationcard__column1">
          <p>Notification id: {notification.id}</p>
          <p>Time: {notification.time}</p>
        </div>
        <div className="notificationcard__column2">
          <Button className="button_primary button_primary__bg-white button_primary__removebutton">
            <Remove className="icon-xs"></Remove>
          </Button>
        </div>
      </div>
      <div className="notificationcard__column3">
        <Button
          className={`button_primary button_primary__notification-expert ${
            notification.notifyOf === "all"
              ? "button_primary__bg-black"
              : "button_primary__bg-white"
          } `}
        >
          All <br />
          Items
        </Button>
        <Button
          className={`button_primary button_primary__notification-expert ${
            notification.notifyOf === "critical"
              ? "button_primary__bg-black"
              : "button_primary__bg-white"
          } `}
        >
          Critical Stock
        </Button>
        <Button
          className={`button_primary button_primary__notification-expert ${
            notification.notifyOf === "out"
              ? "button_primary__bg-black"
              : "button_primary__bg-white"
          } `}
        >
          Out of Stock
        </Button>
      </div>
    </div>
  );
};

export default NotificationCard;
