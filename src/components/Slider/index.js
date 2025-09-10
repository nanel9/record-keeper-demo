import React from "react";

import "./styles.scss";
const Slider = (props) => {

    const {min, max, step, value, setValue} = props;

    return (
        <input type="range" tabindex="0" min={min} max={max} step={step} value={value} onChange={(event) => setValue(event.target.value)} className="custom-range"></input>
    );
};

export default Slider;