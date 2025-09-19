import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoanInfoBullets from "../LoanInfoBullets";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { Button, SuccessDialog, InfoBanner } from "../../../components";
import EditIcon from "@mui/icons-material/Edit";
import "./styles.scss";

const Summary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const calculatorResult = useSelector((state) => state.loanCalculator.calculatorResults);

  const handleSubmit = () => {
    setOpenSuccessDialog(true);
  };

  const handleReturnToMyLoans = () => {
    setOpenSuccessDialog(false);
    navigate("/loans-and-withdrawals");
  };

  const accountbalanceReducedBy = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(parseFloat(calculatorResult.loanAmount.replace('$', '').replace(',', '')) + parseFloat(calculatorResult.deliveryFee.replace('$', '').replace(',', '')) + 85);

  return (
    <div className="loan-summary-container">
      <div className="loan-summary-content">
        <div className="loan-summary-body">
          <div className="loan-summary-header">
            <div className="loan-summary-header-step">STEP 5 OF 5</div>
            <div className="loan-summary-header-title">Loan Summary</div>
          </div>

          <InfoBanner>
            By clicking Submit, you certify that you have read, understand and
            agree to the following.
            <br />
            <br />
            <ul>
              <li>
                You have read and understand the terms and provisions provided
                in the loan documentation.
              </li>
              <li>
                The request will not be processed until approved by your
                employer and/or the plan's third party administrator.
              </li>
              <li>
                The first repayment will be due as soon as administratively
                practicable following 30 days from the date your loan is
                approved.
              </li>
              <li>
                Once approved, the start date and final payment date of the loan
                will be included in updated loan documentation available via the
                participant website and mobile app.
              </li>
              <li>
                You will be notified via email when your loan has been approved
                and agree to read and review the updated loan documentation.
              </li>
              <li>
                You agree to the terms of the loan by accepting the loan
                proceeds.
              </li>
              <li>
                If requesting a mortgage loan, you will be required to provide
                supporting documentation to your employer for review and
                approval.
              </li>
              <li>
                By submitting a loan request with a payroll deduction repayment
                method, you irrevocably authorize your employer to deduct from
                your compensation all loan repayments as they become due to
                repay all principal and interest.
              </li>
              <li>
                Loan requests approved by your employer after 4:00PM Eastern
                time will be processed on the next business day and receive that
                day's closing share price(s).
              </li>
              <li>Once a loan has been approved, it cannot be cancelled.</li>
            </ul>
            <br />
            Attention Florida Residents: The state of Florida imposes a
            'documentary stamp tax' on retirement plan loans. The documentary
            state tax levied against the loan by the state of Florida is $0.35
            per $100 (e.g., if your loan is $10,000, the tax on that loan is
            equal to $35). The tax payments are due to the Florida Department of
            Revenue no later than the 20th day of the month following the month
            the loan was executed. In order to remit the tax payment due on your
            loan, you will need to complete the appropriate Florida state tax
            form. You may find the appropriate forms online at
            www.floridarevenue.com or by calling the Florida Department of
            Revenue at 850-617-8600.
          </InfoBanner>

          <div className="loan-summary-button">
            <Button 
              size="small"
              onClick={() => {
                dispatch(setActiveStep({ value: 0 }));
              }}
            >
              <EditIcon sx={{ width: "20px", height: "20px" }} />
              Make changes
            </Button>
          </div>

          <div className="loan-summary-info">
            <div className="loan-summary-info-left">
              <LoanInfoBullets hideOthers />
            </div>
            <div className="loan-summary-info-right">
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Loan type</div>
                <div className="loan-summary-info-item-value">{calculatorResult.loanType}</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Payment frequency</div>
                <div className="loan-summary-info-item-value">{calculatorResult.paymentFrequency}</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Interest rate (APR)</div>
                <div className="loan-summary-info-item-value">9.00% (10.46% APR)</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Loan amount</div>
                <div className="loan-summary-info-item-value">{calculatorResult.loanAmount}</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Number of payments</div>
                <div className="loan-summary-info-item-value">{calculatorResult.numberOfPayments}</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Payment amount</div>
                <div className="loan-summary-info-item-value">{calculatorResult.paymentAmount}</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Origination fee</div>
                <div className="loan-summary-info-item-value">$85.00</div>
              </div>
              {
                calculatorResult.deliveryFee > 0 && (
                  <div className="loan-summary-info-item">
                    <div className="loan-summary-info-item-title">Rapid delivery fee</div>
                    <div className="loan-summary-info-item-value">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(calculatorResult.deliveryFee)}</div>
                  </div>
                )
              }
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Maintenance fee</div>
                <div className="loan-summary-info-item-value">$50.00 (per year)</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Account balance reduced by</div>
                <div className="loan-summary-info-item-value">{accountbalanceReducedBy}</div>
              </div>
              <div className="loan-summary-info-item">
                <div className="loan-summary-info-item-title">Application and valid thru</div>
                <div className="loan-summary-info-item-value">09/18/2025</div>
              </div>
            </div>
          </div>

          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 3 }))}
            >
              Back
            </Button>
            <Button color="primary" size="small" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>

      <SuccessDialog
        open={openSuccessDialog}
        onClose={handleReturnToMyLoans}
        title="Success"
        content={`Your loan request has been submitted. Confirmation #: ${Math.floor(
          Math.random() * 90000000 + 10000000
        )}`}
        textButton="Return to Loans & Withdrawals"
      />
    </div>
  );
};

export default Summary;
