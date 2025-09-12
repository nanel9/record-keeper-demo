import React from "react";
import { Wizard } from "../../components";
import TypeChangeStep from "./TypeChangeStep";
import InvestmentExchangeStep1 from "./Exchange/Step1";
import InvestmentExchangeStep2 from "./Exchange/Step2";
import InvestmentExchangeStep3 from "./Exchange/Step3";
import InvestmentRebalanceStep1 from "./Rebalance/Step1";
import InvestmentRebalanceStep2 from "./Rebalance/Step2";
import InvestmentRebalanceStep3 from "./Rebalance/Step3";
import FutureInvestmentStep1 from "./FutureInvestments/Step1";
import FutureInvestmentStep2 from "./FutureInvestments/Step2";
import FutureInvestmentStep3 from "./FutureInvestments/Step3";
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
            {/* Step 4 */}
            <InvestmentRebalanceStep1 />
            {/* Step 5 */}
            <InvestmentRebalanceStep2 />
            {/* Step 6 */}
            <InvestmentRebalanceStep3 />
            {/* Step 7 */}
            <FutureInvestmentStep1 />
            {/* Step 8 */}
            <FutureInvestmentStep2 />
            {/* Step 9 */}
            <FutureInvestmentStep3 />   
        </Wizard>
    );
};

export default ChangeInvestments;