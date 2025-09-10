/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useMask } from "@react-input/mask";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import classNames from "classnames";
import "./styles.scss";

const InputText = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
    required = false,
    errorMessage,
    mask = {},
    onChangeExternal,
    value,
    setValue,
  } = props;
  const inputRef = useMask(mask);
  const [isPristine, setIsPristine] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const validateRequired = (event) => {
    if(setValue) {
        setValue(event.target.value);
    }
    setIsPristine(false);

    if (required) {
      event.target.value.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
    }

    if (onChangeExternal) {
      onChangeExternal(event);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isErrorVisible = () => {
    return required && !isPristine && isEmpty;
  };

  return (
    <div className="cg-input-text">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-container">
          <input
            onChange={(event) => validateRequired(event)}
            type={showPassword ? "text" : type}
            id={name}
            name={name}
            placeholder={placeholder}
            ref={mask.mask ? inputRef : null}
            value={value}
          />
        <span
          className={classNames("input-error-warning", {
            hidden: !isErrorVisible(),
          })}
        >
          <ErrorIcon sx={{ width: 24, height: 24 }} />
        </span>
        <span
          className={classNames("input-show-password", {
            hidden: isErrorVisible() || type !== "password",
          })}
        >
          {showPassword ? (
            <VisibilityOffIcon
              sx={{ width: 24, height: 24 }}
              onClick={toggleShowPassword}
            />
          ) : (
            <VisibilityIcon
              sx={{ width: 24, height: 24 }}
              onClick={toggleShowPassword}
            />
          )}
        </span>
      </div>
      <div className={classNames("input-error", { hidden: !isErrorVisible() })}>
        {required ? (errorMessage ? errorMessage : `${label} is required`) : ""}
      </div>
    </div>
  );
};

export default InputText;
