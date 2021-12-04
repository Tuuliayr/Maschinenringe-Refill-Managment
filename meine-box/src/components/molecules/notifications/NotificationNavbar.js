import React from "react";
import Button from "../../base/buttons/ButtonBase";

const NotificationNavbar = () => {
  return (
    <div className="notification-nav">
      <p>Navbar here</p>
      <Button className="button button__notification-button button__bg-black">
        Simple
      </Button>
      <Button className="button button__notification-button button__bg-white">
        Expert
      </Button>
    </div>
  );
};

export default NotificationNavbar;
