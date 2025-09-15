import React, { useState } from "react";
import { Header, Tabs } from "../../components";
import Loans from "./Loans";
import "./styles.scss";

const LoansAndWithdrawals = () => {
    const [activeTab, setActiveTab] = useState("L");

    const tabs = [
        { id: "L", label: "Loan Information" },
        { id: "W", label: "Withdrawal Information" },
    ];

    const onChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="loans-and-withdrawals-container">
            <div className="loans-and-withdrawals-content">
                <Header title="Loans & withdrawals" />

                <div className="loans-and-withdrawals-card">
                    <Tabs type="header" tabs={tabs} onChange={onChange}/>
                    <div className="loans-and-withdrawals-card-content">
                        {activeTab === "L" && <Loans />}
                        {activeTab === "W" && <></>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoansAndWithdrawals;
