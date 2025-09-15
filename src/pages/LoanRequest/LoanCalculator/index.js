import React, { useState } from "react";
import { InputSelect, InputText, Button } from "../../../components";
import { useDispatch } from "react-redux";
import { setCalculatorResult } from "../../../state/loanCalculator/loanCalculatorSlice";
import LoanInfoBullets from "../LoanInfoBullets";
import "./styles.scss";

const LoanCalculator = (props) => {

    const { onCalculate } = props;

    const [loanType, setLoanType] = useState("Personal");
    const [paymentFrequency, setPaymentFrequency] = useState("Weekly");
    const [loanAmount, setLoanAmount] = useState();
    const [numberOfPayments, setNumberOfPayments] = useState();
    const [paymentAmount, setPaymentAmount] = useState();

    const isComplete = loanType && paymentFrequency && loanAmount && numberOfPayments;
    const annualInterestRate = 9;

    const calculateInterestRate = () => {
        switch (paymentFrequency) {
            case "Weekly":
                return annualInterestRate / 100 / 52;
            case "Bi-Weekly":
                return annualInterestRate / 100 / 26;
            case "Monthly":
                return annualInterestRate / 100 / 12;
            case "Quarterly":
                return annualInterestRate / 100 / 4;
            case "Semi-Monthly":
                return annualInterestRate / 100 / 24;
            default:
                return annualInterestRate;
        }
    };

    const realInterestRate = calculateInterestRate();
    

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

    const dispatch = useDispatch();

    const calculatePaymentAmount = () => {



        const paymentAmountValue = ((loanAmount * realInterestRate * Math.pow(1 + realInterestRate, numberOfPayments)) /
        (Math.pow(1 + realInterestRate, numberOfPayments) - 1)).toFixed(2);

        const paymentAmount = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
            paymentAmountValue,
        );
        dispatch(setCalculatorResult({ loanType, paymentFrequency, loanAmount: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(loanAmount), numberOfPayments, paymentAmount }));
        setPaymentAmount(paymentAmountValue);
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
                <InputText align="right" name="loanAmount" type="number" min={1000} max={22596.99} subLabel="(From $1,000.00 to $22,596.99)" prefix="$" label="Loan amount" value={loanAmount} setValue={setLoanAmount}/>
                <InputText align="right" name="numberOfPayments" type="number" min={1} max={260} subLabel="(From 1 to 260)" label="Number of payments" value={numberOfPayments} setValue={setNumberOfPayments}/>
                <InputText prefix="$" align="right" name="paymentAmount" type="number" label="Payment Amount" value={paymentAmount} disabled setValue={setPaymentAmount}/>
                <div className="loan-calculator-buttons">
                    <Button onClick={calculatePaymentAmount} disabled={!isComplete}>Calculate</Button>
                </div>
            </div>
        </div> 
    );
};

export default LoanCalculator;