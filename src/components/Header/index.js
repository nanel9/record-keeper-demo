import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./styles.scss";

const Header = (props) => {

    const navigate = useNavigate();
    const { title, button } = props;
    return (
        <div className="cg-header-container">
            <div className="title">
                {title}
            </div>
            {button && (
                <Button
                    size="small"
                    onClick={() => navigate(button.url)}
                >
                    {button.label}
                </Button>
            )}
        </div>
    );
};

export default Header;