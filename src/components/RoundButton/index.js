import React from "react";
import "./styles.scss";

const RoundButton = (props) => {

    const {icon, onClick } = props;

    return (
        <div className="cg-round-button">
            <button className="round-button" onClick={onClick}>
                {icon}
            </button>
        </div>
    );
};

export default RoundButton;