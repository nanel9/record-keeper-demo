import React, { useState } from "react";
import {
  InputText,
  RadioButton,
  Slider,
  InfoTooltip,
  Button,
} from "../../../components";
import "./styles.scss";

const GoalsCalculatorForm = () => {
  const currentAge = 45;

  const [retirementAge, setRetirementAge] = useState(65);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [currentAnnualIncome, setCurrentAnnualIncome] = useState("650,000.00");
  const [retirementIncome, setRetirementIncome] = useState("80.00");
  const [retirementPlanContributions, setRetirementPlanContributions] =
    useState("6.00");
  const [employerContributions, setEmployerContributions] = useState("3.00");
  const [inflationRate, setInflationRate] = useState("3.00");
  const [salaryIncrease, setSalaryIncrease] = useState("3.00");
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState("6.00");
  const [
    expectedRateOfReturnInRetirement,
    setExpectedRateOfReturnInRetirement,
  ] = useState("4.00");
  const [socialSecurity, setSocialSecurity] = useState("0");

  const handleRecalculate = () => {
    console.log("Recalculate");
  };

  return (
    <div className="goals-calculator-form-container">
      <div className="goals-calculator-form-title">
        Adjust retirement goals strategy
      </div>
      <div className="goals-calculator-form-subtitle">
        Your current age is <strong>{currentAge}</strong>
      </div>
      <form className="goals-calculator-form-content">
        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>
              Retirement age (Enter the age at which you plan to retire and
              begin taking withdrawals. NOTE: Tax penalties may apply on
              withdrawals taken before age 59½, unless an exemption applies.)
            </strong>
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              value={retirementAge}
              setValue={setRetirementAge}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>Life expectancy</strong>
            <InfoTooltip
              placement="left"
              title="Enter the age you expect to live to. This is used to calculate your retirement goal and your projected monthly income, based on the number of years you expect to live in retirement."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              value={lifeExpectancy}
              setValue={setLifeExpectancy}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>Current annual income</strong>
          </div>
          <div
            className="goals-calculator-form-content-item-input wider"
            style={{ position: "relative", right: "19px" }}
          >
            <InputText
              type="text"
              prefix="$"
              value={currentAnnualIncome}
              setValue={setCurrentAnnualIncome}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>Retirement income</strong>&nbsp;(% of salary){" "}
            <InfoTooltip
              placement="left"
              title="Enter the estimated percentage of your current income you would like to receive during retirement. Many financial professionals estimate retirees will need 80% or more of their pre-retirement salary. This is used to calculate your total retirement goal and monthly income goal."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              suffix="%"
              value={retirementIncome}
              setValue={setRetirementIncome}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>Retirement plan contributions</strong>&nbsp;(% of salary){" "}
            <InfoTooltip
              placement="left"
              title="Enter the estimated percentage of your current salary that you contribute towards retirement (including any contributions to outside accounts, if applicable). The selected rate will be applied annually until retirement."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              suffix="%"
              value={retirementPlanContributions}
              setValue={setRetirementPlanContributions}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>Employer contributions </strong>&nbsp;(% of salary)
            <InfoTooltip
              placement="left"
              title="Enter the estimated percentage of your salary that your employer contributes to your retirement plan, if applicable. The selected rate will be applied annually until retirement."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              suffix="%"
              value={employerContributions}
              setValue={setEmployerContributions}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>Inflation rate </strong>
            <InfoTooltip
              placement="left"
              title="Enter an estimated annual inflation rate. Inflation is the increase in the cost of goods and services over time; as a result, it lowers the profits received from investments. Over the past 50 years, the Consumer Price Index, a common measure of inflation, averaged about 4% a year."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              suffix="%"
              value={inflationRate}
              setValue={setInflationRate}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item ">
          <div className="goals-calculator-form-content-item-label">
            <strong>Expected yearly salary increase</strong>
            <InfoTooltip
              placement="left"
              title="Enter an estimated annual percentage increase for your salary from raises and/or cost-of-living increases. This percentage will be applied annually to estimate your salary each year until your projected retirement age."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              suffix="%"
              value={salaryIncrease}
              setValue={setSalaryIncrease}
            />
          </div>
        </div>

        <div className="goals-calculator-form-content-item">
          <div className="goals-calculator-form-content-item-label">
            <strong>Calculate my social security benefits for me</strong>
            <InfoTooltip
              placement="left"
              title="Social Security benefits are calculated based on the entered current annual salary and expected yearly salary increase to determine your annual salary each year until your normal retirement age (e.g., 65, 66 or 67 depending on your year of birth). If you retire before your normal retirement age, then your actual Social Security benefits may be lower. NOTE: Your actual salary may differ from the projected salary, and your Social Security contribution history is not considered for this calculation, so the actual benefits you will receive could be higher or lower than this calculation. The calculator will not include Social Security benefits in the calculation if your retirement age is set below 62. Your projected Social Security benefits will be included in your projected monthly income; if you select No for this field, your projected monthly income at retirement will be lower."
            />
          </div>
          <div className="goals-calculator-form-content-item-bottom">
            <div className="radio-button-group">
              <RadioButton
                label="Yes"
                name="socialSecurity"
                value="1"
                setValue={setSocialSecurity}
                checked={socialSecurity === "1"}
              />
              <RadioButton
                label="No"
                name="socialSecurity"
                value="0"
                setValue={setSocialSecurity}
                checked={socialSecurity === "0"}
              />
            </div>
          </div>
        </div>

        <div className="goals-calculator-form-content-item">
          <div className="goals-calculator-form-content-item-label">
            <strong>Expected rate of return</strong>
            <InfoTooltip
              placement="left"
              title="Slide the bar to select an expected rate of return and corresponding investment style before you retire. The investment style refers to the level of risk you are willing to tolerate in your investments. For example, an aggressive style, with a rate of return over 8%, involves more risk and a higher chance of both growth and loss, while a conservative style, with a rate of return under 4%, favors maintaining current assets long-term. In general, the further you are from retirement, the more aggressively you may want to invest. NOTE: Hypothetical growth rates are not intended to reflect actual results; your results may vary."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              value={expectedRateOfReturn}
              setValue={setExpectedRateOfReturn}
            />{" "}
            %
          </div>
          <div className="goals-calculator-form-content-item-bottom">
            <div className="goals-calculator-form-slider-group">
              <div className="goals-calculator-form-slider-label">
                <div>0.00%</div>
                <div>12.00%</div>
              </div>
              <Slider
                min={0}
                max={12}
                step={0.01}
                name="expectedRateOfReturn"
                value={expectedRateOfReturn}
                setValue={setExpectedRateOfReturn}
              />
              <div className="goals-calculator-form-slider-label">
                <div>Conservative</div>
                <div>Moderate</div>
                <div>Aggressive</div>
              </div>
            </div>
          </div>
        </div>

        <div className="goals-calculator-form-content-item">
          <div className="goals-calculator-form-content-item-label">
            <strong>Expected rate of return in retirement</strong>
            <InfoTooltip
              placement="left"
              title="Slide the bar to select an expected rate of return and corresponding investment style during retirement. The investment style refers to the level of risk you are willing to tolerate in your investments. An aggressive style involves more risk and a higher chance of both growth and loss, while a conservative style favors maintaining current assets long-term. Many retirees invest more conservatively in order to reduce risk. NOTE: Hypothetical growth rates are not intended to reflect actual results; your results may vary."
            />
          </div>
          <div className="goals-calculator-form-content-item-input">
            <InputText
              type="number"
              value={expectedRateOfReturnInRetirement}
              setValue={setExpectedRateOfReturnInRetirement}
            />{" "}
            %
          </div>
          <div className="goals-calculator-form-content-item-bottom">
            <div className="goals-calculator-form-slider-group">
              <div className="goals-calculator-form-slider-label">
                <div>0.00%</div>
                <div>12.00%</div>
              </div>
              <Slider
                min={0}
                max={12}
                step={0.01}
                name="expectedRateOfReturnInRetirement"
                value={expectedRateOfReturnInRetirement}
                setValue={setExpectedRateOfReturnInRetirement}
              />
              <div className="goals-calculator-form-slider-label">
                <div>Conservative</div>
                <div>Moderate</div>
                <div>Aggressive</div>
              </div>
            </div>
          </div>
        </div>

        <div className="goals-calculator-form-button">
          <Button color="primary" size="small" onClick={handleRecalculate}>
            Recalculate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GoalsCalculatorForm;
