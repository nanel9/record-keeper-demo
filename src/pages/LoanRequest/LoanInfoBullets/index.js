import React from "react";
import { useSelector } from "react-redux";
import { InfoBullet } from "../../../components";
import "./styles.scss";


const LoanInfoBullets = (props) => {
  const { hideFirst, hideOthers } = props;
  const calculatorResult = useSelector((state) => state.loanCalculator.calculatorResults);

  return (
    <div className="loan-info-bullets">
      {!hideFirst && (
        <InfoBullet title="New loan terms" value={calculatorResult.loanAmount} subtitle={<>9.00% interest (10.46% APR), repayable in {calculatorResult.numberOfPayments} {calculatorResult.paymentFrequency} payments</>}/>
      )}
      {!hideOthers && (
        <>
        <InfoBullet title="Loan balances as 08/04/2025" value="$0.00"/>
        <InfoBullet title="Estimated amount available" value="$22,488.24"/>
        </>
      )}
    </div>
  );
};

export default LoanInfoBullets;
