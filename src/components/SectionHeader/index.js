import React from "react";
import "./styles.scss";

const SectionHeader = ({title, subtitle}) => {
    return (
        <div className="cg-section-header-container">
            {subtitle && <div className="subtitle">{subtitle}</div>}
            <div className="title">
                {title}
            </div>
        </div>
    );
};

export default SectionHeader;