import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import {
  InfoBanner,
  Button,
  InputSelect,
  InputText,
} from "../../../../components";
import "./styles.css";

const InvestmentExchangeStep1 = () => {
  const dispatch = useDispatch();

  const [investment, setInvestment] = useState("1");
  const [amount, setAmount] = useState("1");
  const [amountToExchange, setAmountToExchange] = useState(null);
  const [amountLabel, setAmountLabel] = useState("");
  const [amountPrefix, setAmountPrefix] = useState("");

  const isCompleted =
    investment && amount && (amount !== "1" ? amountToExchange : true);

  const setFieldSettings = (value) => {
    if (value === "1") {
      setAmountLabel("");
    } else if (value === "2") {
      setAmountLabel("Dollar Amount");
      setAmountPrefix("$");
    } else if (value === "3") {
      setAmountLabel("Custom Percentage");
      setAmountPrefix("%");
    } else if (value === "4") {
      setAmountLabel("Number of Shares");
      setAmountPrefix("Shares");
    }
  };

  return (
    <div className="investment-exchange-step-1-container">
      <div className="investment-exchange-step-1-info">
        <InfoBanner>
          <strong>Asset allocation models</strong>
          <br />
          Use our{" "}
          <a href="https://www.capitalgroup.com/retirement/participant/planning/choose-your-allocation/allocation-models.html">
            sample portfolios
          </a>{" "}
          as a guide to build your investment strategy.
        </InfoBanner>
      </div>

      <div className="investment-exchange-step-1-header">
        <div className="investment-exchange-step-1-header-step">
          STEP 1 OF 3
        </div>
        <div className="investment-exchange-step-1-header-title">
          Customize your exchange
        </div>
      </div>

      <div className="investment-exchange-step-1-body">
        <InputSelect
          label="Investment you want to exchange"
          options={[
            {
              value: "1",
              label:
                "Af U.S Government Money Market-R2: $41,035.30 41,035.300 Shares",
            },
            {
              value: "2",
              label: "Af Global Insight Fund-R2: $4,752.81 4,752.810 Shares",
            },
          ]}
          value={investment}
          setValue={setInvestment}
        />

        <InputSelect
          label="Amount to exchange"
          onChangeExternal={(event) => setFieldSettings(event.target.value)}
          options={[
            { value: "1", label: "All available" },
            { value: "2", label: "Custom Dollar Amount" },
            { value: "3", label: "Custom Percentage" },
            { value: "4", label: "Custom Number of Shares" },
          ]}
          value={amount}
          setValue={setAmount}
        />
        {amount !== "1" && (
          <InputText
            label={amountLabel}
            type="number"
            prefix={amount === "2" ? amountPrefix : null}
            suffix={amount !== "2" ? amountPrefix : null}
            value={amountToExchange}
            setValue={setAmountToExchange}
          />
        )}
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
          disabled={!isCompleted}
          onClick={() => dispatch(setActiveStep({ value: 2 }))}
        >
          Next
        </Button>
      </div>

      <div className="investment-exchange-step-1-footer">
        <InfoBanner>
          If the dollar amount you own in the fund falls below the requested
          exchange amount due to market fluctuations, the entire dollar amount
          in the fund will be exchanged.
          <br />
          <br />
          Investors should carefully consider investments objectives, risks,
          charges and expenses. This and other important information is contaied
          in each fund’s prospectus and summary prospectus, which are available
          from this website or from a financial professional and should be read
          carefully before investing. This information may vary regarding group
          annuity investments and, if applicable, can be obtained from a
          financial professional.
        </InfoBanner>
      </div>
    </div>
  );
};

export default InvestmentExchangeStep1;
