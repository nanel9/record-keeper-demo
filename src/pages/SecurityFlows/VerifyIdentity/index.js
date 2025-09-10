/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { SectionHeader, InputText, Button, DatePicker } from "../../../components";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const VerifyIdentity = ({ flow, setFlow }) => {

  const [userID, setUserID] = useState("");
  const [ssn, setSSN] = useState("");
  const [dob, setDOB] = useState("");

  const goToForgotUserId = () => {
    setFlow("forgot-user-id");
    navigate("/forgot-user-id");
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/delivery-method");
  };

  const errorMessageSSN =
    "Social Security Number is invalid. A minimum of 9 digits must be provided. No alphabetic or special characters are allowed.";
  const subtitle =
    flow === "forgot-user-id"
      ? "Forgot user ID"
      : flow === "reset-password"
      ? "Reset Password"
      : "New User";
  const labelUserID = (
    <>
      User ID <a onClick={() => goToForgotUserId()}>Forgot user ID</a>
    </>
  );

  const isFormValid = () => {
    if(flow === "reset-password") {
      return userID.length > 0 && ssn.length >= 11 && dob.length > 0;
    }
    return ssn.length >= 11 && dob.length > 0;
  };

  const maskSsnDigits = (e) => {
    const value = e.target.value;
    const lastChar = value[value.length - 1];
    const newValue = [];
    for (let i = 0; i < value.length - 1; i++) {
      if (value[i] !== "-" && value[i] !== " ") {
        newValue.push('*');
      }
      else {
        newValue.push(value[i]);
      }
    }
    newValue.push(lastChar);
    e.target.value = newValue.join(''); 
  }


  const ssnMask = {
    mask: '___-__-____',
    replacement: { _: /\d|\*/ }, 
  };

  return (
    <div className="verify-identity-container">
      <div className="verify-identity-content">
        <form className="verify-identity-form" onSubmit={(e) => onSubmit(e)}>
          <SectionHeader title="Verify your Identity" subtitle={subtitle} />

          {flow === "reset-password" && (
            <InputText
              type="text"
              name="userID"
              label={labelUserID}
              required
              errorMessage="Please enter your user ID"
              setValue={setUserID}
            />
          )}
          <InputText
            type="text"
            name="ssn"
            mask={ssnMask}
            label="Social security number"
            required
            onChangeExternal={(e) => maskSsnDigits(e)}
            errorMessage={errorMessageSSN}
            setValue={setSSN}
          />
          <DatePicker placeholder="MM/DD/YYYY" name="dob" label="Date of birth" required setValue={setDOB}/>
          <Button type="submit" disabled={!isFormValid()}>Verify Personal Information</Button>
          <a className="text-center" onClick={() => navigate("/login")}>
            Cancel
          </a>
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentity;
