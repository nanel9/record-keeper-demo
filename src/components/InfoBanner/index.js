import React from 'react';
import "./styles.scss";

const InfoBanner = (props) => {
    const { children, noBackGround, noMargin, noPadding, noColor } = props;
    return (
        <div className={`cg-info-banner ${noBackGround ? "no-background" : ""} ${noMargin ? "no-margin" : ""} ${noPadding ? "no-padding" : ""} ${noColor ? "no-color" : ""}`}>
            {children}
        </div>
    );
};

export default InfoBanner;