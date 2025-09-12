import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import { Button, InfoBanner } from "../../../../components";
import InvestmentsTable from "../../InvestmentsTable";
import "./styles.scss";

const FutureInvestmentStep1 = () => {

  const dispatch = useDispatch();

  
  return (
    <div className="future-investment-step-1-container">
      <div className="future-investment-step-1-info">
          <InfoBanner>
            <strong>Asset allocation models</strong>
            <br />
            Use our <a href="https://www.capitalgroup.com/retirement/participant/planning/choose-your-allocation/allocation-models.html" target="_blank" rel="noreferrer noopener">sample portfolios</a> as a guide to build your investment strategy.
          </InfoBanner>
      </div>
      <InfoBanner noBackGround>
        These changes will only affect how future contributions will be invested. They will not affect how your existing investments are allocated.
        <br />
        <br />
        Prior to making an election, you should review your participant fee disclosure, which contains important information about the investment options offered under your retirement plan, including investment returns, fees and expenses.
      </InfoBanner>

      <div className="future-investment-step-1-header">
        <div className="future-investment-step-1-header-step">
          STEP 1 OF 3
        </div>
        <div className="future-investment-step-1-header-title">
          Select your investments
        </div>
      </div>

      <div className="investment-rebalance-step-1-body">
        <InvestmentsTable />
      </div>

      <div className="wizard-footer">
        <Button
          color="secondary"
          size="small"
          onClick={() => dispatch(setActiveStep({ value: 0 }))}
        >
          Back
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={() => dispatch(setActiveStep({ value: 8 }))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FutureInvestmentStep1;
