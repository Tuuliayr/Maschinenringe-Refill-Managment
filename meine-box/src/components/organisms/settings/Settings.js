import React, { useEffect } from "react";
import Button from "../../base/buttons/ButtonBase";
import logo from "../../../Logo.png";
import NotificationNavbar from "../../molecules/notifications/NotificationNavbar";

const Settings = ({ signOut }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="settings">
      <img
        className="settings__logo"
        src={logo}
        aria-hidden="true"
        role="presentation"
      />
      <h5 className="settings__title">Meine Box | Maschinenring</h5>
      <Button className="button button__logout" onClick={signOut}>
        Sign out
      </Button>
      <div className="settings__notification-bg">
        <NotificationNavbar></NotificationNavbar>
      </div>
    </div>
  );
};

export default Settings;
