import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import { Button, InfoBanner } from "../../../../components";
import AutomaticRebalancing from "../../AutomaticRebalancing";
import "./styles.scss";

const InvestmentRebalanceStep2 = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="investment-rebalance-step-2-container">

            <div className="investment-rebalance-step-2-info">
                <InfoBanner>
                    Any vested balances and percentages shown are based on information
                    provided to Capital Group and may not reflect the most current data.
                    Please check with your employer for the most recent information.
                </InfoBanner>
            </div>
            <div className="investment-rebalance-step-2-header">
                <div className="investment-rebalance-step-2-header-step">
                    STEP 2 OF 3
                </div>
                <div className="investment-rebalance-step-2-header-title">
                    Review automatic rebalancing schedule for personal model
                </div>
            </div>

            <AutomaticRebalancing />
            

            <div className="wizard-footer">
                <Button
                color="secondary"
                size="small"
                onClick={() => dispatch(setActiveStep({ value: 4 }))}
                >
                Back
                </Button>
                <Button
                color="primary"
                size="small"
                onClick={() => dispatch(setActiveStep({ value: 6 }))}
                >
                Next
                </Button>
            </div>

        </div>
    );
};

export default InvestmentRebalanceStep2;
