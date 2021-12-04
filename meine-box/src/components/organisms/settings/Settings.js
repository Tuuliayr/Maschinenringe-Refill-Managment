import React, { useState, useEffect } from "react";
import Button from "../../base/buttons/ButtonBase";
import logo from "../../../Logo.png";
import NotificationNavbar from "../../molecules/notifications/NotificationNavbar";
import SimpleNotification from "../../molecules/notifications/SimpleNotification";
import ExpertNotification from "../../molecules/notifications/ExpertNotification";

const Settings = ({ signOut }) => {
  const [current, setCurrent] = useState("simple");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleChange = (view) => {
    setCurrent(view);
  };

  const showView = () => {
    if (current === "simple") {
      return <SimpleNotification></SimpleNotification>;
    } else {
      return <ExpertNotification></ExpertNotification>;
    }
  };

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
      <h2>Notification settings:</h2>
      <div className="settings__notification-nav">
        <NotificationNavbar handleChange={handleChange}></NotificationNavbar>
      </div>
      <div className="settings__notification-content">{showView()}</div>
    </div>
  );
};

export default Settings;
