import React from "react";
import { InfoBanner, Table, Dropdown } from "../../../components";
import "./styles.scss";

const Loans = () => {

    const dataTable = {
        headers: [
            {
                content: "Loan ID",
                key: "loanId",
                align: "left",
                height: "40px",
            },
            {
                content: "Actions",
                key: "actions",
                align: "left",
                height: "40px",
            },
            {
                content: "Outstanding Balance",
                key: "outstandingBalance",
                align: "left",
                height: "40px",
            },
            {
                content: "Payment Frequency",
                key: "paymentFrequency",
                align: "left",
                height: "40px",
            },
            {
                content: "Expected Payment",
                key: "expectedPayment",
                align: "left",
                height: "40px",
            },
            {
                content: "Payoff date",
                key: "payoffDate",
                align: "left",
                height: "40px",
            },
            {
                content: "Status",
                key: "status",
                align: "left",
                height: "40px",
            },
            {
                content: "Next payment date",
                key: "nextPaymentDate",
                align: "left",
                height: "40px",
            },
            {
                content: "Repayment method",
                key: "repaymentMethod",
                align: "left",
                height: "40px",
            },
        ],
    };

    const dropdownMenu = [
        {
            label: "Loan modeling calculator",
            key: "loanModelingCalculator",
            url: "#/loan-modeling-calculator",
        },
        {
            label: "Request a Loan",
            key: "requestLoan",
            url: "#/loan-request",
        },
    ];

    return (
        <div className="loans-container">
            <div className="loans-header">
                Loan information
                <Dropdown title="Loan Actions" options={dropdownMenu} width="155px"/>
            </div>
            <div className="loans-content">
                <p className="info">If the status of your request below is “Under Review” or “Pending Review”, this indicates that your employer and/or plan administrator are reviewing your request for approval. This process may take up to 30 days. For more information, please contact your employer.</p>
                <InfoBanner>
                    There is currently no amount available for a refinance Loan Request.
                </InfoBanner>
                <div className="loans-bullets">
                    <div className="loans-bullet">
                    <div className="loans-bullet-content">
                        <div className="loans-bullet-title">
                        Loan balances as 08/04/2025
                        </div>
                        <div className="loans-bullet-value">$51,080.00</div>
                    </div>
                    </div>
                    <div className="loans-bullet">
                    <div className="loans-bullet-content">
                        <div className="loans-bullet-title">
                        Loan refinance available
                        </div>
                        <div className="loans-bullet-value">$0.00</div>
                    </div>
                    </div>
                    <div className="loans-bullet">
                    <div className="loans-bullet-content">
                        <div className="loans-bullet-title">
                            Estimated amount available
                        </div>
                        <div className="loans-bullet-value">$22,488.24</div>
                    </div>
                    </div>
                </div>
                <Table data={dataTable} />
            </div>
        </div>
    );
};

export default Loans;