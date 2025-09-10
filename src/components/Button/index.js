import React from "react";
import "./styles.scss";

const Button = (props) => {

    const { children, type , disabled, size = "full", onClick, color = "primary"} = props;
    return (
        <button type={type} className={`cg-button ${size} ${color}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;