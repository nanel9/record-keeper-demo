import React from "react";
import "./styles.scss";

const InfoBullet = ({ title, value, subtitle }) => {
    return (
        <div className="cg-info-bullet">
            <div className="cg-info-bullet-content">
                <div className="cg-info-bullet-title">{title}</div>
                <div className="cg-info-bullet-value">{value}</div>
                {subtitle &&
                    <div className="cg-info-bullet-title">{subtitle}</div>
                }
            </div>
        </div>
    );
};

export default InfoBullet;