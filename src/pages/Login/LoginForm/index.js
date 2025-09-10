/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, createRef } from "react";
import { InputText, Button } from "../../../components";
import ErrorIcon from "@mui/icons-material/Error";
import "./styles.scss"; 


const LoginForm = () => {
    const [errorLoging, setErrorLoging] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginForm = createRef();
    const login = (e, form) => {
        e.preventDefault();
        if(username === "000078807a" && password === "test1234") {
            localStorage.setItem("TOKEN_CG_USER", "admin");
            goTo("#/account-summary");
        } else {
            setErrorLoging(true);
        }
    };

    const goTo = (path) => {
        window.location.href = path;
        window.location.reload();
    };

    const isFormValid = () => {
        return username.length > 0 && password.length > 0;
    };


    return (
        <div className="login-form-container">
            <div className="login-form-left">
            <h2>Welcome to our new participant website</h2>
            <br/>
            <p className="info">We've enhanced our website with a refreshed design and convenient new features to support you in your retirement journey.</p>
            <br/>
            <p className="info">If you've previously bookmarked the login page or use a password manager, you will need to make updates to reflect the revised website URL above.</p>
            <br/>
            <p className="info">Otherwise, we invite you to log in using your existing user ID and password to access our updated participant online experience.</p>
            <br/>
            <p className="info mt-4">Protect your account against cybercrime. Learn what you can do to <a href="https://www.capitalgroup.com/retirement/participant/security.html" target="_blank" rel="noopener noreferrer">safeguard your assets and information</a>.</p>
            <br/>
            <p className="info mt-4"><a href="https://www.capitalgroup.com/retirement/participant/faq-trac.html" target="_blank" rel="noopener noreferrer">Account FAQs</a></p>
            </div>
            <div className="login-form-right">
                <form id="login-form" className="login-form" onSubmit={(e) => login(e, e.target)} ref={loginForm}>
                    {errorLoging && (
                        <div className="login-error-message">
                            <ErrorIcon sx={{ width: 24, height: 24 }}/> 
                            <div style={{display: "contents"}}>Please enter your correct credentials.</div>
                        </div>
                    )}
                    <InputText type="text" name="username" label="User ID" required setValue={setUsername}/>
                    <InputText type="password" name="password" label="Password" setValue={setPassword} required/>
                    <div className="login-button-container">
                        <Button type="submit" disabled={!isFormValid()}>Log In</Button>
                    </div>
                </form>
                <a onClick={() => goTo("#/forgot-user-id")} className="mb-1">Forgot User ID</a>
                <a onClick={() => goTo("#/reset-password")} className="mb-2">Reset Password</a>
                <div>New User? <a onClick={() => goTo("#/new-user")}>Get Started</a></div>
            </div>
        </div>
    );
};

export default LoginForm;
