import React from "react";
import { Wizard } from "../../components";
import TypeChangeStep from "./TypeChangeStep";
import InvestmentExchangeStep1 from "./Exchange/Step1";
import InvestmentExchangeStep2 from "./Exchange/Step2";
import InvestmentExchangeStep3 from "./Exchange/Step3";
import "./styles.scss";

const ChangeInvestments = () => {
    return (
        <Wizard title="Change investments" urlReturn="/my-portfolio" >
            {/* Step 0 */}
            <TypeChangeStep />
            {/* Step 1 */}
            <InvestmentExchangeStep1 />
            {/* Step 2 */}
            <InvestmentExchangeStep2 />
            {/* Step 3 */}
            <InvestmentExchangeStep3 />
        </Wizard>
    );
};

export default ChangeInvestments;