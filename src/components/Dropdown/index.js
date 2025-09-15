import React from "react";
import "./styles.scss";

const Dropdown = (props) => {

    const [open, setOpen] = React.useState(false);
    const {title, options, width} = props;
    
    return (
        <div className="cg-dropdown">
            <div className="button-container">
                <button style={{width: width}} className="dropdown-button" onClick={() => setOpen(!open)}>{title}</button>
                {open && (
                <div className="dropdown-content" style={{width: width}}>
                    {options.map((option) => (
                        <a href={option.url} className="dropdown-item" key={option.key} onClick={() => setOpen(!open)}>{option.label}</a>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
};

export default Dropdown;