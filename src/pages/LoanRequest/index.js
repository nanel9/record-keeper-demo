import React from "react";
import LoanTerms from "./LoanTerms";
import Dibursement from "./Dibursement";
import Repayment from "./Repayment";
import Documentation from "./Documentation";
import Summary from "./Summary";
import { Wizard } from "../../components";
import "./styles.scss";

const LoanRequest = () => {
    return (
        <Wizard title="Request a Loan" urlReturn="/loans-and-withdrawals">
            <LoanTerms />
            <Dibursement />
            <Repayment />
            <Documentation />
            <Summary />
        </Wizard>
    );
};

export default LoanRequest;
