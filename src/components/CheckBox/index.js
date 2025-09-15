import React from "react";
import "./styles.scss";

const CheckBox = (props) => {

    const {label, name, value, setValue = () => {}, checked } = props;
    
    return (
        <label className="cg-checkbox-container" onClick={(event) => setValue(event.target.value)}>
            <input type="checkbox" name={name} value={value} checked={checked}/>
            {label}
        </label>
    );
};

export default CheckBox;