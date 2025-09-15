import React from "react";
import LoanCalculatorTerms from "./LoanCalculatorTerms";
import LoanCalculatorSummary from "./LoanCalculatorSummary";
import { Wizard } from "../../components";
import "./styles.scss";

const LoanModelingCalculator = () => {
    return (
        <Wizard title="Loan modeling calculator" urlReturn="/loans-and-withdrawals">    
            <LoanCalculatorTerms />
            <LoanCalculatorSummary />
        </Wizard>
    );
};

export default LoanModelingCalculator;
