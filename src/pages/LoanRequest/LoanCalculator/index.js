import React from "react";
import { InputSelect, InputText, Button } from "../../../components";
import LoanInfoBullets from "../LoanInfoBullets";
import "./styles.scss";

const LoanCalculator = (props) => {

    const { onCalculate } = props;

    const [loanType, setLoanType] = React.useState("Personal");
    const [paymentFrequency, setPaymentFrequency] = React.useState("Weekly");
    const [loanAmount, setLoanAmount] = React.useState();
    const [numberOfPayments, setNumberOfPayments] = React.useState();
    const [paymentAmount, setPaymentAmount] = React.useState();

    const optionsLoanType = [
        { value: "Personal", label: "Personal" },
        { value: "Mortgage", label: "Mortgage" },
    ];

    const optionsPaymentFrequency = [
        { value: "Weekly", label: "Weekly" },
        { value: "Bi-Weekly", label: "Bi-Weekly" },
        { value: "Monthly", label: "Monthly" },
        { value: "Quarterly", label: "Quarterly" },
        { value: "Semi-Monthly", label: "Semi-Monthly" },
    ];

    const calculatePaymentAmount = () => {
        const paymentAmount = loanAmount / numberOfPayments;
        setPaymentAmount(paymentAmount);
        if(onCalculate) {
            onCalculate();
        }
    };

    return (
        <div className="loan-calculator-container">
            <div className="loan-calculator-left">
                <LoanInfoBullets hideFirst/>
            </div>

            <div className="loan-calculator-right">
                <InputSelect label="Loan type" options={optionsLoanType} value={loanType} setValue={setLoanType}/>
                <InputSelect label="Payment frequency" options={optionsPaymentFrequency} value={paymentFrequency} setValue={setPaymentFrequency}/>
                <div className="loan-calculator-interest-rate">
                    <span>Interest rate</span>
                    <span>9.00%</span>
                </div>
                <InputText align="right" type="number" subLabel="(From $1,000.00 to $22,596.99)" prefix="$" label="Loan amount" value={loanAmount} setValue={setLoanAmount}/>
                <InputText align="right" type="number" subLabel="(From 1 to 120)" label="Number of payments" value={numberOfPayments} setValue={setNumberOfPayments}/>
                <InputText align="right" type="number" label="Payment Amount" value={paymentAmount} disabled />
                <div className="loan-calculator-buttons">
                    <Button onClick={calculatePaymentAmount}>Calculate</Button>
                </div>
            </div>
        </div> 
    );
};

export default LoanCalculator;