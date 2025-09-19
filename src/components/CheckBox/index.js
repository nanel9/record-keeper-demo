import React from "react";
import classnames from "classnames";
import "./styles.scss";

const CheckBox = (props) => {

    const {label, name, value, setValue = () => {}, checked, top = false, suffix } = props;
    
    return (
        <div className="cg-checkbox">
            <label className={classnames("cg-checkbox-container", {"top": top})} onClick={(event) => setValue(event.target.checked)}>
                <input type="checkbox" name={name} value={value} checked={checked}/>
                {label}
            </label>
            {suffix && (
                <span className="suffix">
                    {suffix}
                </span>
            )}
        </div>
    );
};

export default CheckBox;