import React from "react";
import { ReactComponent as Remove } from "../../../images/mr-svg-icons/delete-icon.svg";

const NotificationCard = ({ notification }) => {
  return (
    <div className="notificationcard">
      <div className="notificationcard__column1">
        <p>Notification id: {notification.id}</p>
        <p>Time: {notification.time}</p>
        <p>Notification of: {notification.notifyOf}</p>
      </div>
      <div className="notificationcard__column2">
        <Remove></Remove>
      </div>
    </div>
  );
};

export default NotificationCard;
