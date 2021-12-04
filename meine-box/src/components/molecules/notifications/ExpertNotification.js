import React, { useEffect, useState } from "react";
import Button from "../../base/buttons/ButtonBase";
import NotificationCard from "../../base/notification-card/NotificationCard";

const ExpertNotification = () => {
  const data = [{ id: 1, time: "03:00 AM", notifyOf: "all" }];
  const [active, setActive] = useState("all");
  const [notifications, setNotifications] = useState(data);

  return (
    <div>
      <Button
        className={`button button__notification-add`}
        onClick={() => setActive("all")}
      >
        Add new notification
      </Button>
      <h3>Notifications:</h3>
      <div>
        {notifications.map((note) => {
          return <NotificationCard key={note.id} notification={note} />;
        })}
      </div>
    </div>
  );
};

export default ExpertNotification;
