import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoanInfoBullets from "../LoanInfoBullets";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { Button } from "../../../components";
import "./styles.scss";

const Repayment = () => {
  const dispatch = useDispatch();
  const calculatorResult = useSelector((state) => state.loanCalculator.calculatorResults);

  return (
    <div className="repayment-container">
      <div className="repayment-content">
        <div className="repayment-body">
          <div className="repayment-header">
            <div className="repayment-header-step">STEP 3 OF 5</div>
            <div className="repayment-header-title">Repayment</div>
          </div>

          <div className="repayment-info">
            <div className="repayment-info-left">
              <LoanInfoBullets />
            </div>
            <div className="repayment-info-right">
              <label>Method</label>
              <label className="repayment-info-value">Payroll method</label>
              <div className="repayment-space"></div>
              <label>Payment frequency</label>
              <label className="repayment-info-value">{calculatorResult.paymentFrequency}</label>
            </div>
          </div>

          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 1 }))}
            >
              Back
            </Button>
            <Button
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 3 }))}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repayment;
