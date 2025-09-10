import React from "react";
import "./styles.scss";

const LoginMenu = () => {

const links = [
    { label : <>Retirement<br/>Planning</>, url: "https://www.capitalgroup.com/retirement/participant/planning.html" },
    { label : <>Mutual Fund<br/>Basics</>, url: "https://www.capitalgroup.com/retirement/participant/basics.html" },
    { label : <>Rollovers</>, url: "https://www.capitalgroup.com/retirement/participant/rollovers.html" },
    { label : <><div className="nowrap">Calculators & Learning</div><div className="nowrap w-100">Tools</div></>, url: "https://www.capitalgroup.com/retirement/participant/tools.html" },
    { label : <>Fund<br/>Information</>, url: "https://www.capitalgroup.com/retirement/participant/fund-info.html" },
    { label : <>About<br/>Us</>, url: "https://www.capitalgroup.com/retirement/participant/about-us.html" },
];

    return (
        <div className="login-menu-container">
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    {links.map((link, index) => (
                        <a className="bottom-bar-link" href={link.url} target="_blank" rel="noopener noreferrer" key={index}>{link.label}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoginMenu;
