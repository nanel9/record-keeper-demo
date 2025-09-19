import React, { useState } from "react";
import { Header, Tabs } from "../../components";
import Loans from "./Loans";
import Withdrawals from "./Withdrawals";
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
                        {activeTab === "W" && <Withdrawals showOnlyInfo={true}/>}
                    </div>
                </div>

                {activeTab === "W"   && (
                    <div className="loans-and-withdrawals-card">
                        <div className="loans-and-withdrawals-card-content">
                            <Withdrawals showOnlyInfo={false}/>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default LoansAndWithdrawals;
