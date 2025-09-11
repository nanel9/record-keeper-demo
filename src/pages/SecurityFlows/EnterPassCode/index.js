/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeader, Button, InputText } from "../../../components";
import "./styles.scss";

const EnterPassCode = ({ flow }) => {
  const navigate = useNavigate();
  const subtitle =
    flow === "forgot-user-id"
      ? "Forgot user ID"
      : flow === "reset-password"
      ? "Reset Password"
      : "New User";
  const onSubmit = (e) => {
    e.preventDefault();
    if (flow === "forgot-user-id") {
      navigate("/retrieve-user-id");
    } else if (flow === "reset-password") {
      navigate("/change-password");
    }
  };
  return (
    <div className="enter-passcode-container">
      <div className="enter-passcode-content">
        <form className="enter-passcode-form" onSubmit={(e) => onSubmit(e)}>
          <SectionHeader
            title="Enter your one-time passcode"
            subtitle={subtitle}
          />

          <div className="instructions">
            Enter the passcode we sent you to your text-enabled phone or email.
          </div>

          <div className="passcode-input">
            <InputText align="center" type="text" name="passcode" required value="0777012"/>
          </div>

          <a className="text-center" onClick={() => navigate("/delivery-method")}>
            Resend passcode
          </a>
          <a className="text-center" onClick={() => navigate("/delivery-method")}>
            Choose a delivery method
          </a>
          <Button type="submit">Submit your passcode</Button>
          <a className="text-center" onClick={() => navigate("/login")}>
            Cancel
          </a>
        </form>
      </div>
    </div>
  );
};

export default EnterPassCode;
