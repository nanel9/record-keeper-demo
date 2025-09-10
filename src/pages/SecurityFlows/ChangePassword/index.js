/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { InputText, Button, SectionHeader } from "../../../components";
import { useNavigate } from "react-router-dom"; 
import "./styles.scss";

const ChangePassword = ({flow}) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const subtitle = flow === "forgot-user-id" ? "Forgot user ID" : flow === "reset-password" ? "Reset Password" : "New User";
    
    const isFormValid = () => {
        return password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div className="change-password-container">
            <div className="change-password-content">
                <form className="change-password-form" onSubmit={(e) => onSubmit(e)}>
                    <SectionHeader title="Change your password" subtitle={subtitle}/> 
                    <InputText type="password" name="password" label="New password" required setValue={setPassword}/>
                    <InputText type="password" name="confirm-password" label="Confirm new password" required setValue={setConfirmPassword}/>
                    <Button type="submit" disabled={!isFormValid()}>Verify personal information</Button>
                    <a className="text-center" onClick={() => navigate("/login")}>Cancel</a>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;