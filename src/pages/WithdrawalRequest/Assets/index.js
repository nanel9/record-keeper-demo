import React from "react";
import { Button, InfoBanner, RadioButton } from "../../../components";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { setWithdrawalAssets } from "../../../state/withdrawal/withdrawalSlice";
import "./styles.scss";

const Assets = () => {
  const dispatch = useDispatch();
  const [selectedAsset, setSelectedAsset] = React.useState(null);

  const handleWithdrawalAssets = (value) => {
    setSelectedAsset(value);
    dispatch(setWithdrawalAssets({ withdrawalAssets: value }));
  };

  const handleNextStep = () => {
    if(selectedAsset === "Rollover"){
      dispatch(setActiveStep({ value: 4 }));
    } else if(selectedAsset === "Withdraw"){
      dispatch(setActiveStep({ value: 4 }));
    } else {
      dispatch(setActiveStep({ value: 4 }));
    }
  }

  return (
    <div className="withdrawal-request-assets-container">
      <div className="withdrawal-request-assets-content">
        <div className="withdrawal-request-assets-body">
          <div className="withdrawal-request-assets-header">
            <div className="withdrawal-request-assets-header-title">
              Tell us what you want to do with your assets
            </div>
          </div>

          <InfoBanner>
            Before you begin, please read the{" "}
            <a
              href="https://www.capitalgroup.com/retirement/participant/pdf/shareholder/IRGEFM-029-568461.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              402(f) Notice of Special Tax Rules
            </a>
            on Distributions. By clicking Next, you acknowledge you have read
            the 402(f) Notice of Special Tax Rules on Distributions and
            understand the tax implications of this request. You understand you
            have at least 30 days in which to consider whether to directly roll
            over your distribution or have it paid to you. You understand that
            making an election during the 30-day period is a waiver of the
            30-day period.
          </InfoBanner>

          <div className="withdrawal-request-assets-options">
            <div className="withdrawal-request-assets-option">
              <div className="withdrawal-request-assets-option-title top">
                <RadioButton
                  label="Rollover to an IRA or another Retirement Plan"
                  name="withdrawal-request-assets"
                  value="Rollover"
                  setValue={handleWithdrawalAssets}
                />
              </div>
            </div>
            <div className="withdrawal-request-assets-option">
              <div className="withdrawal-request-assets-option-title">
                <RadioButton
                  label="Withdraw an amount in cash"
                  name="withdrawal-request-assets"
                  value="Withdraw"
                  setValue={handleWithdrawalAssets}
                />
              </div>
            </div>
            <div className="withdrawal-request-assets-option top">
              <div className="withdrawal-request-assets-option-title">
                <RadioButton
                  label="Request a cash withdrawal / rollover combination"
                  name="withdrawal-request-assets"
                  value="Combination"
                  setValue={handleWithdrawalAssets}
                />
              </div>
            </div>
          </div>

          {selectedAsset !== "Withdraw" && (
            <InfoBanner noColor>
              Important: If you have both pre-tax and Roth monies and are
              requesting a direct rollover to an IRA, you cannot proceed with an
              online distribution. Contact your employer to obtain the
              appropriate distribution paperwork.
            </InfoBanner>
          )}

          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 2 }))}
            >
              Back
            </Button>
            <Button
              color="primary"
              size="small"
              onClick={handleNextStep}
              disabled={!selectedAsset}
            >
              Next
            </Button>
          </div>

          <InfoBanner noBackGround noMargin noPadding noColor>
            Note: If your retirement plan account receives additional dividends,
            interest or contributions following your full account distribution,
            you may request a follow-up distribution of that balance within 180
            days of the original request without incurring an additional
            distribution fee. To process a follow-up distribution, contact your
            employer to initiate a residual distribution request.
          </InfoBanner>
        </div>
      </div>
    </div>
  );
};

export default Assets;
