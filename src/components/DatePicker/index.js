/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import classNames from "classnames";
import { DatePicker as AntdDatepicker } from "antd";
import "./styles.scss";

const DatePicker = (props) => {
  const { label, name, placeholder, required = false, errorMessage, setValue } = props;
  const [isPristine, setIsPristine] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  const validateRequired = (date) => {
    if(setValue) {
      setValue(date.format("MM/DD/YYYY"));
    }
    setIsPristine(false);
    setIsEmpty(date ? false : true);
  };

  const isErrorVisible = () => {
    return required && !isPristine && isEmpty;
  };
  
  return (
    <div className="cg-input-date-picker">
      <label htmlFor={name}>{label}</label>
      <div className="input-container">
        <AntdDatepicker name={name} placeholder={placeholder} format="MM/DD/YYYY" onChange={(event) => validateRequired(event)} allowClear={false}/>
        <span className={classNames("input-error-warning", {hidden: !isErrorVisible()})}><ErrorIcon sx={{ width: 24, height: 24 }}/></span>
      </div>
      <div className={classNames("input-error", {hidden: !isErrorVisible()})}>{required ? errorMessage ? errorMessage : `${label} is required` : ""}</div>
    </div>
  );
};

export default DatePicker;
