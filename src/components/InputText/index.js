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
    subLabel,
    name,
    type,
    inputmode,
    placeholder,
    required = false,
    errorMessage,
    mask = {},
    onChangeExternal,
    value,
    initialValue,
    prefix,
    suffix,
    setValue,
    align = "left",
    disabled = false,
    min,
    max,
  } = props;
  const inputRef = useMask(mask);
  const [isPristine, setIsPristine] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [internalValue, setInternalValue] = useState(initialValue);

  const validateRequired = (event) => {
    if(setValue) {
        setValue(event.target.value);
    } else {
        setInternalValue(event.target.value);
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
      {label && 
        <label htmlFor={name}>{label}
        {subLabel && <span className="sub-label">{subLabel}</span>}
      </label>}

      <div className="input-container">
        {prefix && <div className="input-prefix">{prefix}</div>}
        <div className="input-content">
            <input
              className={align}
              onChange={(event) => validateRequired(event)}
              type={showPassword ? "text" : type}
              id={name}
              name={name}
              placeholder={placeholder}
              ref={mask.mask ? inputRef : null}
              value={value ? value : internalValue}
              inputmode={inputmode}
              min={min}
              max={max}
              disabled={disabled}
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
        {suffix && <div className="input-suffix">{suffix}</div>}
      </div>
      <div className={classNames("input-error", { hidden: !isErrorVisible() })}>
        {required ? (errorMessage ? errorMessage : `${label} is required`) : ""}
      </div>
    </div>
  );
};

export default InputText;
