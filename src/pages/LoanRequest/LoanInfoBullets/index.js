import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";


const LoanInfoBullets = (props) => {
  const { hideFirst, hideOthers } = props;
  const calculatorResult = useSelector((state) => state.loanCalculator.calculatorResults);

  return (
    <div className="loan-info-bullets">
      {!hideFirst && (
        <div className="loan-info-bullet">
          <div className="loan-info-bullet-content">
            <div className="loan-info-bullet-title">New loan terms</div>
            <div className="loan-info-bullet-value">{calculatorResult.loanAmount}</div>
            <div className="loan-info-bullet-title">
              9.00% interest (10.46% APR), repayable in {calculatorResult.numberOfPayments} {calculatorResult.paymentFrequency} payments
            </div>
          </div>
        </div>
      )}
      {!hideOthers && (
        <>
          <div className="loan-info-bullet">
            <div className="loan-info-bullet-content">
              <div className="loan-info-bullet-title">
                Loan balances as 08/04/2025
              </div>
              <div className="loan-info-bullet-value">$0.00</div>
            </div>
          </div>

          <div className="loan-info-bullet">
            <div className="loan-info-bullet-content">
              <div className="loan-info-bullet-title">
                Estimated amount available
              </div>
              <div className="loan-info-bullet-value">$22,488.24</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoanInfoBullets;
