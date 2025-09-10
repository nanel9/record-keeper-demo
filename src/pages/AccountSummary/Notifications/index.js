/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "./styles.scss";

const Notifications = () => {
  return (
    <div className="notifications-container">
      <h4 className="header">Notifications</h4>
      <div className="notification-list">
        <div className="notification-item">
        <ErrorIcon sx={{
                width: 38,
                height: 38,
                color: '#910a0a',
            }}/>
          <a href="#"><b>ALERTS:</b> You have (1) alert.</a>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
