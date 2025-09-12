import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveStep, setSubTitle } from "../../../state/wizard/wizardSlice";
import { Button, RadioButton } from "../../../components";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const TypeChangeStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState(null);

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleNext = () => {
    if(type === "Exchange") {
      dispatch(setActiveStep({ value: 1 }));
    } else if(type === "Rebalance") {
      dispatch(setActiveStep({ value: 1 }));
    } else if(type === "Future investment elections") {
      dispatch(setActiveStep({ value: 1 }));
    }   
    dispatch(setSubTitle({ value: type }));
  };

  return (
    <div className="type-change-step-container">
      <div className="type-change-step-header-title">
        Choose the type of change you would like to make
      </div>

      <div className="type-change-step-options">
        <div className="type-change-step-option">
          <div className="type-change-step-option-title">
            <RadioButton
              label="Exchange"
              name="type"
              value="Exchange"
              setValue={handleTypeChange}
            />
            <div className="type-change-step-option-description">
              Move current balances from investment to others. (This only
              affects existing investments.)
            </div>
          </div>
          <div className="type-change-step-option-icon">
            <img src="./investments/exchange.png" alt="Exchange" />
          </div>
        </div>
        <div className="type-change-step-option">
          <div className="type-change-step-option-title">
            <RadioButton
              label="Rebalance"
              name="type"
              value="Rebalance"
              setValue={handleTypeChange}
            />
            <div className="type-change-step-option-description">
              Move money between investments to maintain your chosen asset
              allocation.
            </div>
          </div>
          <div className="type-change-step-option-icon">
            <img src="./investments/rebalance.png" alt="Rebalance" />
          </div>
        </div>
        <div className="type-change-step-option">
          <div className="type-change-step-option-title">
            <RadioButton
              label="Future investment elections"
              name="type"
              value="Future investment elections"
              setValue={handleTypeChange}
            />
            <div className="type-change-step-option-description">
              Change where your future contributions will be invested.
            </div>
          </div>
          <div className="type-change-step-option-icon">
            <img
              src="./investments/Future-Investments.png"
              alt="Future investment elections"
            />
          </div>
        </div>
      </div>

      <div className="wizard-footer">
        <Button
          color="secondary"
          size="small"
          onClick={() => {
            navigate("/my-portfolio");
          }}
        >
          Back
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={handleNext}
          disabled={!type}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TypeChangeStep;
