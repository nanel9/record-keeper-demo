import React from 'react';
import "./styles.scss";

const InfoBanner = (props) => {
    const { children, noBackGround } = props;
    return (
        <div className={`cg-info-banner ${noBackGround ? "no-background" : ""}`}>
            {children}
        </div>
    );
};

export default InfoBanner;