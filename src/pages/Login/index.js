/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginHero from "./LoginHero";
import LoginForm from "./LoginForm";
import LoginMenu from "./LoginMenu";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VerifyIdentity from "../SecurityFlows/VerifyIdentity";
import DeliveryMethod from "../SecurityFlows/DeliveryMethod";
import EnterPassCode from "../SecurityFlows/EnterPassCode";
import ChangePassword from "../SecurityFlows/ChangePassword";
import RetrieveUserID from "../SecurityFlows/RetrieveUserID";
import "./styles.scss";


const LoginLayout = () => {
    return (
        <div className="login-container">
            <LoginHeader/>
            <LoginMenu/>
            <LoginHero/>
            <LoginForm/>
        </div>
    );
};

const SecurityFlowsLayout = ({children}) => {
    return (
        <div className="security-flows-container">
            <LoginHeader/>
            <div className="security-flows-link">
                <a href="https://www.capitalgroup.com/retirement/participant/faq-trac.html#gettingStarted" target="_blank" rel="noopener noreferrer">Need help logging in?</a>
            </div>
            {children}
        </div>
    );
};

const Login = ({ setIsAuthenticated }) => {

    const [flow, setFlow] = useState(window.location.href.includes("forgot-user-id") ? "forgot-user-id" : window.location.href.includes("reset-password") ? "reset-password" : window.location.href.includes("new-user") ? "new-user" : "");

    useEffect(() => {
        if(localStorage.getItem('TOKEN_CG_USER')) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <>
            <Router> 
                <Routes>
                    <Route path="/login" element={<LoginLayout/>}/>
                    <Route path="forgot-user-id" element={<SecurityFlowsLayout><VerifyIdentity flow={flow} setFlow={setFlow}/></SecurityFlowsLayout>}/>
                    <Route path="reset-password" element={<SecurityFlowsLayout><VerifyIdentity flow={flow} setFlow={setFlow}/></SecurityFlowsLayout>}/>
                    <Route path="new-user" element={<SecurityFlowsLayout><VerifyIdentity flow={flow} setFlow={setFlow}/></SecurityFlowsLayout>}/>

                    <Route path="delivery-method" element={<SecurityFlowsLayout><DeliveryMethod flow={flow} setFlow={setFlow}/></SecurityFlowsLayout>}/>
                    <Route path="enter-passcode" element={<SecurityFlowsLayout><EnterPassCode flow={flow} setFlow={setFlow}/></SecurityFlowsLayout>}/>
                    <Route path="change-password" element={<SecurityFlowsLayout><ChangePassword flow={flow} setFlow={setFlow}/></SecurityFlowsLayout>}/>
                    <Route path="retrieve-user-id" element={<SecurityFlowsLayout><RetrieveUserID flow={flow} setFlow={setFlow}/></SecurityFlowsLayout>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />  
                </Routes>   
            </Router>
            <div className="cg-footer">
                Capital Client Group, Inc.
            </div>
        </>
    );
};

export default Login;

