import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import { Button } from "../../../../components";
import AutomaticRebalancing from "../../AutomaticRebalancing";
import "./styles.scss";

const FutureInvestmentStep2 = () => {
    const dispatch = useDispatch();
    return (
        <div className="future-investment-step-2-container">
            <div className="future-investment-step-2-header">
                <div className="future-investment-step-2-header-step">
                    STEP 2 OF 3
                </div>
                <div className="future-investment-step-2-header-title">
                    Review automatic rebalancing schedule for personal model
                </div>
            </div>

            <AutomaticRebalancing />

            <div className="wizard-footer">
                <Button
                color="secondary"
                size="small"
                onClick={() => dispatch(setActiveStep({ value: 7 }))}
                >
                Back
                </Button>
                <Button
                color="primary"
                size="small"
                onClick={() => dispatch(setActiveStep({ value: 9 }))}
                >
                Next
                </Button>
            </div>

        </div>
    );
};

export default FutureInvestmentStep2;
