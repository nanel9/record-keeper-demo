import React, {useState, useEffect, useRef } from "react";
import PendingIcon from '@mui/icons-material/Pending';
import "./styles.scss";

const DotMenu = (props) => {

    const {options} = props;
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const toggleOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="cg-dot-menu">
            <button className="dot-menu-button" onClick={toggleOpen}>
                <PendingIcon sx={{ width: 24, height: 24, color: "#005f9e" }} />
            </button>
            {open && (
                <div className="dot-menu-dropdown" ref={ref}>
                    {options.map((option, index) => (
                        <a href={option.url} key={index} target="_blank" rel="noopener noreferrer" className="dot-menu-dropdown-item">{option.content}</a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DotMenu;