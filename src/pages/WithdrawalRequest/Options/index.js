import React from "react";
import { Button, RadioButton } from "../../../components";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { setWithdrawalType } from "../../../state/withdrawal/withdrawalSlice";
import "./styles.scss";

const Options = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleWithdrawalType = (value) => {
    setSelectedOption(value);
    dispatch(setWithdrawalType({ withdrawalType: value }));
  };

  return (
    <div className="withdrawal-request-options-container">
      <div className="withdrawal-request-options-content">
        <div className="withdrawal-request-options-body">
          <div className="withdrawal-request-options-header">
            <div className="withdrawal-request-options-header-title">
              Tell us why you want to withdraw fund
            </div>
          </div>

          <div className="withdrawal-request-options-options">
            <div className="withdrawal-request-options-option">
              <div className="withdrawal-request-options-option-title">
                <RadioButton
                  label="I'm leaving my employer"
                  name="withdrawal-request-option"
                  value="I'm leaving my employer"
                  setValue={handleWithdrawalType}
                  />
                <div className="withdrawal-request-options-option-description">
                  This selection will show you the options available to you for
                  a withdrawal after you leave your employer.
                </div>
              </div>
            </div>
            <div className="withdrawal-request-options-option top">
              <div className="withdrawal-request-options-option-title">
                <RadioButton
                  label="I'm staying with my employer but want to make a withdrawal"
                  name="withdrawal-request-option"
                  value="I'm staying with my employer but want to make a withdrawal"
                  setValue={handleWithdrawalType}
                />
                <div className="withdrawal-request-options-option-description">
                  This selection will show you the options available to you for
                  a withdrawal while employed.
                </div>
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
            <Button
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 2 }))}
              disabled={!selectedOption}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
