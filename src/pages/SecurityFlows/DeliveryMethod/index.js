/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {SectionHeader, Button, RadioButton} from "../../../components";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import "./styles.scss";


const DeliveryMethod = ({ flow }) => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (flow === "forgot-user-id") {
     navigate("/enter-passcode");
    } else if (flow === "reset-password") {
     navigate("/enter-passcode");
    } else if (flow === "new-user") {
     navigate("/enter-passcode");
    }
  };

  const subtitle =
    flow === "forgot-user-id"
      ? "Forgot user ID"
      : flow === "reset-password"
      ? "Reset Password"
      : "New User";

  return (
    <div className="delivery-method-container">
      <div className="delivery-method-content">
        <form className="delivery-method-form" onSubmit={(e) => onSubmit(e)}>
          <SectionHeader
            title="Choose a delivery method for your one-time passcode"
            subtitle={subtitle}
          />
          <div className="delivery-method-card">
            <div className="email-radio">
              <RadioButton label="Email" checked={true}/>
              <div>d*******@*******.com</div>
            </div>
            <EmailIcon sx={{ width: 32, height: 32, color: "#5D738A" }} />
          </div>
          <Button type="submit">Send passcode</Button>
          <a className="text-center" onClick={() => navigate("/login")}>
            Cancel
          </a>
        </form>
      </div>
    </div>
  );
};

export default DeliveryMethod;
