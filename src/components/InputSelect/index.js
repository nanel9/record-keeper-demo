/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import classNames from "classnames";
import "./styles.scss";

const InputSelect = (props) => {
  const {
    label,
    name,
    placeholder,
    required = false,
    errorMessage,
    onChangeExternal,
    value,
    subLabel,
    prefix,
    suffix,
    setValue,
    options,
    disabled,
  } = props;
  const [isPristine, setIsPristine] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  const validateRequired = (event) => {
    if (setValue) {
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

  const isErrorVisible = () => {
    return required && !isPristine && isEmpty;
  };

  return (
    <div className="cg-input-select">
      {label && (
        <label htmlFor={name}>
          {label}
          {subLabel && <span className="sub-label">{subLabel}</span>}
        </label>
      )}

      <div className="input-container">
        {prefix && <div className="input-prefix">{prefix}</div>}
        <div className="input-content">
          <select
            onChange={(event) => validateRequired(event)}
            value={value}
            id={name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span
            className={classNames("input-error-warning", {
              hidden: !isErrorVisible(),
            })}
          >
            <ErrorIcon sx={{ width: 24, height: 24 }} />
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

export default InputSelect;
