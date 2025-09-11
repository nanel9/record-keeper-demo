import React from "react";
import "./styles.scss";
import classNames from "classnames";

const ToggleSwitch = (props) => {

    const [active, setActive] = React.useState(0);
    const {left, right, onChange} = props;
    return (
        <div className="cg-toggle-switch">
            <div className={classNames("cg-toggle-switch-item", { active: active === 0 })} onClick={() => {setActive(0); onChange(0)}}>{left}</div>
            <div className={classNames("cg-toggle-switch-item", { active: active === 1 })} onClick={() => {setActive(1); onChange(1)}}>{right}</div>
        </div>
    );
};

export default ToggleSwitch;
