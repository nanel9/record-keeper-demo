import React from "react";
import { Wizard, Button } from "../../components";
import GoalsCalculatorForm from "./GoalsCalculatorForm";
import "./styles.scss";

const GoalsCalculator = () => {
  const handleSave = () => {};
  return (
    <Wizard title="Retirement Goals" urlReturn="/account-summary" noSteps>
      <div className="goals-calculator-container">
        <div className="goals-calculator-instructions">
          Set your saving goals and monitor your progress towards achieving them
          over time. Any values you input on this page will not impact your
          current contributions to your retirement plan. If you want to adjust
          your contributions after setting your retirement goals, return to the
          home page and select Manage Contributions from the Quick Links menu.
          <br />
          <br />
          If you haven't previously set your savings goals, review the details
          below and adjust your retirement goal strategy as needed to reflect
          your retirement plans.
        </div>
        <div className="goals-calculator-content">
          <div className="goals-calculator-chart">2</div>
          <div className="goals-calculator-form">
            <GoalsCalculatorForm />
          </div>
        </div>
        <div className="goals-calculator-footer">
          <Button color="primary" size="small" onClick={handleSave}>
            Save
          </Button>
        </div>

        <div className="goals-calculator-disclaimer">
          The projections from the Retirement Goals calculator differ from the
          Lifetime Income Illustration (LII) estimates provided on your
          retirement plan statement. The LII is a government-required
          calculation that provides you with information about how much monthly
          income you could expect as an annuity if you were to retire as of the
          statement date based on your current plan account balance. It does not
          account for future contributions and assumes you're retiring as of the
          statement date. On the other hand, the Retirement Goals calculator
          allows you to estimate future contributions and earnings and
          personalize the projections further based on data you input.
          <br />
          <br />
          Projections are expressed in today’s dollars, taking the inflation
          rate you input into account. Monthly income projections are obtained
          by using the projected balance at retirement age to calculate a total
          amount for your projected retirement period (retirement age until end
          of life expectancy) inclusive of the expected rate of return in
          retirement. The resulting amount is used to calculate an annual
          payment needed (taking into account any growth based on the expected
          rate or return in retirement) to reach zero at the end of the entered
          life expectancy. The resulting annual payment is divided by twelve to
          obtain a projected monthly amount.
          <br />
          <br />
          This calculator is for illustrative purposes only and is not intended
          to provide investment advice. The projections do not reflect actual
          investment results and are not guarantees of future results. You are
          advised to consider your other assets, income, investment options,
          investment time horizon, income tax bracket and risk tolerance when
          planning for specific investment goals. Your financial situation and
          goals may change, so you may want to revisit the calculator. Be sure
          to discuss your results with your financial professional.
          <br />
          <br />
          Regular investing does not ensure a profit or protect against loss.
          Hypothetical annual rates of return are not intended to reflect actual
          results; your results may vary based on market conditions.
          <br />
          <br />
          The calculator does not take certain factors into account, including
          federal and state taxes, early withdrawal penalties, annual
          contribution limits, required minimum distributions and holding
          periods. The calculator compounds earnings annually at the beginning
          of the year, and assumes all accounts and income sources are pre-tax,
          that contributions are made in a lump sum mid-year and that monthly
          withdrawals are taken at the beginning of the month.
          <br />
          <br />
          On or around July 1, 2024, American Funds Distributors, Inc. will be
          renamed Capital Client Group, Inc.
        </div>
      </div>
    </Wizard>
  );
};

export default GoalsCalculator;
