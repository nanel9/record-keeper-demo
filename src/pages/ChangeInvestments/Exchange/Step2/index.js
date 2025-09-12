import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import { Button, InfoBanner } from "../../../../components";
import InvestmentsTable from "../../InvestmentsTable";
import "./styles.scss";

const InvestmentExchangeStep2 = () => {

  const dispatch = useDispatch();

  return (
    <div className="investment-exchange-step-2-container">
      <div className="investment-exchange-step-2-info">
        <InfoBanner>
          Any vested balances and percentages shown are based on information
          provided to Capital Group and may not reflect the most current data.
          Please check with your employer for the most recent information.
        </InfoBanner>
      </div>

      <InfoBanner noBackGround>
        These changes will only affect your existing investments. <strong>They will not affect how your future contributions are allocated.</strong> To change your future contributions, return to the Change Investments page and select Future Investment Elections.
        <br />
        <br />
        Prior to making an election, you should review your participant fee disclosure, which contains important information about the investment options offered under your retirement plan, including investment returns, fees and expenses.
      </InfoBanner>

      <div className="investment-exchange-step-2-header">
        <div className="investment-exchange-step-2-header-step">
          STEP 2 OF 3
        </div>
        <div className="investment-exchange-step-2-header-title">
          Select your investments
        </div>
      </div>

      <div className="investment-exchange-step-2-body">
        <InvestmentsTable />
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
  );
};

export default InvestmentExchangeStep2;
