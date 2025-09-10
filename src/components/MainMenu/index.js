/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PrintIcon from "@mui/icons-material/Print";
import MainNav from "./MainNav";
import "./styles.scss";
import { Badge } from "@mui/material";

const MainMenu = () => {

  const logout = () => {
    localStorage.removeItem("TOKEN_CG_USER");
    window.location.href = "/#/login";
    window.location.reload();
  };

  return (
    <div className="header-container">
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-info">
            <div className="part-info">
              <p className="user">Hi, Amanda Test</p>
              
              <button className="notifications">
              <Badge badgeContent={1} color="primary" sx={{ width: 17, height: 14 }}> 
                <NotificationsIcon />
              </Badge> 
              </button>
            </div>
            <div className="plan-info">
              <div className="plan-name">ABC COMPANY "DRPP ONLY" - 401K</div>
            </div>
          </div>
          <div className="top-bar-links">
            <a href="#">
              <PrintIcon
                sx={{
                  width: 16,
                  height: 16,
                }}
              />
              Print
            </a>
            <a onClick={logout}>Log out</a>
          </div>
        </div>
      </div>

      <nav className="bottom-bar" id="cg-bottom-bar">
        <div className="bottom-bar-content">
          <a href="#">
            <img src="./capital-group-logo.png" alt="Capital Group Logo" />
          </a>
          <MainNav />
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
