import React from 'react';
import "./styles.scss";

const InfoBanner = (props) => {
    const { children } = props;
    return (
        <div className="cg-info-banner">
            {children}
        </div>
    );
};

export default InfoBanner;