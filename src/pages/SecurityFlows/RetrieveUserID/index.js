/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SectionHeader, Button } from "../../../components";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const RetrieveUserID = ({flow, setFlow}) => {

    const goToResetPassword = () => {
        setFlow("reset-password");
        navigate("/reset-password");
    };

    const subtitle = flow === "forgot-user-id" ? "Forgot user ID" : flow === "reset-password" ? "Reset Password" : "New User";
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div className="retrieve-user-id-container">
            <div className="retrieve-user-id-content">
                <form className="retrieve-user-id-form" onSubmit={(e) => onSubmit(e)}>
                    <SectionHeader title="Retrieve user ID" subtitle={subtitle}/>
                    <div className="user-id-section">
                        <div className="instructions-text">Your user ID is:</div>
                        <div className="user-id">000078807a</div>
                    </div>
                    <Button>
                        <a onClick={() => navigate("/login")} className="no-decoration ">Access my account</a>
                    </Button>
                    <a className="text-right" onClick={() => goToResetPassword()}>Reset password</a>
                </form>
            </div>
        </div>
    );
};

export default RetrieveUserID;