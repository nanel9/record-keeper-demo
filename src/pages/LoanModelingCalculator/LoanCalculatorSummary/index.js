import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetCalculatorResult } from "../../../state/loanCalculator/loanCalculatorSlice";
import LoanInfoBullets from "../../LoanRequest/LoanInfoBullets";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { Button, InfoBanner } from "../../../components";
import "./styles.scss";

const LoanCalculatorSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const calculatorResult = useSelector((state) => state.loanCalculator.calculatorResults);

  const handleGoToLoanRequest = () => {
    navigate("/loan-request");
  };

  useEffect(() => {
    return () => {
      dispatch(resetCalculatorResult());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loan-calculator-summary-container">
      <div className="loan-calculator-summary-content">
        <div className="loan-calculator-summary-body">
          <div className="loan-calculator-summary-header">
            <div className="loan-calculator-summary-header-title">Loan Modeling Results</div>
          </div>

          <InfoBanner>
            In addition to the loan origination fees shown below, a loan maintenance fee will be deducted from your account each year that the loan remains outstanding. The amount of the loan maintenance fee is reflected in your participant fee disclosure document – accessible on the participant website or mobile app.
          </InfoBanner>

          <div className="loan-calculator-summary-info">
            <div className="loan-calculator-summary-info-left">
              <LoanInfoBullets hideFirst />
            </div>
            <div className="loan-calculator-summary-info-right">
              <div className="loan-calculator-summary-info-item">
                <div className="loan-calculator-summary-info-item-title">Loan type</div>
                <div className="loan-calculator-summary-info-item-value">{calculatorResult.loanType}</div>
              </div>
              <div className="loan-calculator-summary-info-item">
                <div className="loan-calculator-summary-info-item-title">Payment frequency</div>
                <div className="loan-calculator-summary-info-item-value">{calculatorResult.paymentFrequency}</div>
              </div>
              <div className="loan-calculator-summary-info-item">
                <div className="loan-calculator-summary-info-item-title">Interest rate (APR)</div>
                <div className="loan-calculator-summary-info-item-value">9.00% (10.46 APR)</div>
              </div>
              <div className="loan-calculator-summary-info-item">
                <div className="loan-calculator-summary-info-item-title">Loan amount</div>
                <div className="loan-calculator-summary-info-item-value">{calculatorResult.loanAmount}</div>
              </div>
              <div className="loan-calculator-summary-info-item">
                <div className="loan-calculator-summary-info-item-title">Number of payments</div>
                <div className="loan-calculator-summary-info-item-value">{calculatorResult.numberOfPayments}</div>
              </div>
              <div className="loan-calculator-summary-info-item">
                <div className="loan-calculator-summary-info-item-title">Payment amount</div>
                <div className="loan-calculator-summary-info-item-value">{calculatorResult.paymentAmount}</div>
              </div>
              <div className="loan-calculator-summary-info-item">
                <div className="loan-calculator-summary-info-item-title">Origination fee</div>
                <div className="loan-calculator-summary-info-item-value">$85.00</div>
              </div>
            </div>
          </div>

          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 0 }))}
            >
              Back
            </Button>
            <Button color="primary" size="small" onClick={handleGoToLoanRequest}>
              Request loan
            </Button>
          </div>
        </div>
      </div>

      <div className="loan-calculator-summary-content">
        <div className="loan-calculator-summary-body">
          <div className="loan-calculator-summary-link">
            Find out about the <a href="https://www.capitalgroup.com/retirement/participant/planning/access.html" target="_blank" rel="noreferrer">pros and cons of taking a loan</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorSummary;
