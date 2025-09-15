import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import LoanCalculator from "../../LoanRequest/LoanCalculator";
import "./styles.scss";

const LoanCalculatorTerms = () => {
  const dispatch = useDispatch();

  return (
    <div className="loan-calculator-terms-container">
      <div className="loan-calculator-terms-content">
        <div className="loan-calculator-terms-body">
          <div className="loan-calculator-terms-header">
            <div className="loan-calculator-terms-header-title">
              Model a loan
            </div>
          </div>

          <div className="loan-calculator-terms-info">
            <p>
              Your plan's loan interest rate, if provided by your employer, will
              be displayed below. Otherwise, check with your employer to
              confirm.
            </p>

            <p>
              Your plan's loan interest rate, if provided by your employer, will
              be displayed below. Otherwise, check with your employer to
              confirm. The estimated amount available is determined using the
              lesser of 50% of your vested account balance in available money
              types or $50,000 (or the maximum loan amount permitted by your
              plan, if lower) minus your highest outstanding loan balance in the
              last 12 months. See your plan's loan policy for additional rules
              (e.g. available money types) that may affect the estimated
              available amount.
            </p>

            <p>
              To calculate a loan payment, provide two of the following three
              data points: loan amount, number of payments and payment amount.
              The length of the loan will be determined by the number of
              payments and the payroll frequency. For example, a one-year loan
              would be 12 monthly payments, 24 semi-monthly payments or 26
              bi-weekly payments. Then click <strong>Next</strong> to view the
              results.
            </p>
          </div>
          <LoanCalculator onCalculate={() => dispatch(setActiveStep({ value: 1 }))}/>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorTerms;
