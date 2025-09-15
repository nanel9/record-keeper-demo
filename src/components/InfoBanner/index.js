import React from 'react';
import "./styles.scss";

const InfoBanner = (props) => {
    const { children, noBackGround, noMargin, noPadding } = props;
    return (
        <div className={`cg-info-banner ${noBackGround ? "no-background" : ""} ${noMargin ? "no-margin" : ""} ${noPadding ? "no-padding" : ""}`}>
            {children}
        </div>
    );
};

export default InfoBanner;