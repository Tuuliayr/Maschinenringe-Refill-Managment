import React, { useState } from "react";
import Button from "../../base/buttons/ButtonBase";
import NotificationCard from "../../base/notification-card/NotificationCard";

const ExpertNotification = () => {
  const data = [
    { id: 1, time: "03:00 AM", notifyOf: "all" },
    { id: 2, time: "08:00 AM", notifyOf: "critical" },
  ];
  const [active, setActive] = useState("all");
  const [notifications, setNotifications] = useState(data);

  return (
    <div>
      <Button
        className={`button_primary button_primary__notification-add`}
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
