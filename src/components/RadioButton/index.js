import React from "react";
import "./styles.scss";

const RadioButton = (props) => {

    const {label, name, value, setValue = () => {}, checked } = props;
    
    return (
        <label className="cg-radio-container" onClick={(event) => setValue(event.target.value)}>
            <input type="radio" name={name} value={value} checked={checked}/>
            <span className="custom-radio"></span>
            {label}
        </label>
    );
};

export default RadioButton;