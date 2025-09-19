import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { InputText, Button } from "../../../components";
import LoanCalculator from "../LoanCalculator";
import "./styles.scss";

const LoanTerms = () => {
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [emailConfirm, setEmailConfirm] = React.useState();
  const [isCalculated, setIsCalculated] = React.useState(false);

  const onCalculate = () => {
    setIsCalculated(true);
  };

  const dispatch = useDispatch();

  return (
    <div className="loan-terms-container">
      <div className="loan-terms-content">
        <div className="loan-terms-body">
          <div className="loan-terms-header">
            <div className="loan-terms-header-step">STEP 1 OF 5</div>
            <div className="loan-terms-header-title">Loan terms</div>
          </div>

          <div className="loan-terms-info">
            <div className="loan-terms-info-title">Loan Specifications</div>
            <p>
              Enter your loan parameters, including number of payments, to
              calculate the loan amount. The number of payments and your payroll
              frequency will determine the length of the loan. For example, a
              one-year loan would be 12 monthly payments, 24 semi-monthly
              payments, or 26 bi-weekly payments.
            </p>

            <p>
              The estimated amount available is determined using the lesser of
              50% of your vested account balance in available money types or
              $50,000 (or the maximum loan amount permitted by your plan, if
              lower) minus your highest outstanding loan balance in the last 12
              months. See your plan's loan policy for additional rules (e.g.
              available money types) that may affect the estimated available
              amount. Before requesting a loan, please consider the following:
            </p>

            <ul>
              <li>Repayments must be made via payroll deduction</li>
              <li>
                The loan will become due and payable in full if you terminate
                employment
              </li>
            </ul>

            <p>
              <strong>Important:</strong> You must enter or confirm your email
              address below to receive important updates about your loan
              application, including notification of loan approval and the
              availability of final loan documentation. Once your loan has been
              processed, final loan documentation including the amortization
              schedule and payment start and due dates will be posted to the
              Loan & Withdrawals section of the site. Simply access the Loan
              Information tab, select your loan ID, and click the “View
              documentation” link.
            </p>
          </div>
          <LoanCalculator onCalculate={onCalculate} />
        </div>
      </div>

      <div className="loan-terms-content">
        <div className="loan-terms-body">
          <div className="loan-terms-contact-info">
            <div className="loan-calculator-left">
              <div className="loan-terms-info-title">Contact Information</div>
            </div>
            <div className="loan-calculator-right">
              <InputText label="Phone" value={phone} setValue={setPhone} />
              <InputText label="Email" value={email} setValue={setEmail} />
              <InputText
                label="Confirm Email"
                value={emailConfirm}
                setValue={setEmailConfirm}
              />
            </div>
          </div>

          <div className="wizard-footer">
            <Button
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 1 }))}
              disabled={!isCalculated}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTerms;
