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
          <Button className="button button__bg-white button__removebutton">
            <Remove className="icon-xs"></Remove>
          </Button>
        </div>
      </div>
      <div className="notificationcard__column3">
        <Button
          className={`button button__notification-expert ${
            notification.notifyOf === "all"
              ? "button__bg-black"
              : "button__bg-white"
          } `}
        >
          All <br />
          Items
        </Button>
        <Button
          className={`button button__notification-expert ${
            notification.notifyOf === "critical"
              ? "button__bg-black"
              : "button__bg-white"
          } `}
        >
          Critical Stock
        </Button>
        <Button
          className={`button button__notification-expert ${
            notification.notifyOf === "out"
              ? "button__bg-black"
              : "button__bg-white"
          } `}
        >
          Out of Stock
        </Button>
      </div>
    </div>
  );
};

export default NotificationCard;
