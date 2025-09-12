import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { Button, InfoBanner, SuccessDialog } from "../../../components";
import EditIcon from "@mui/icons-material/Edit";
import "./styles.scss";

const VerifyStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);

  const handleSubmit = () => {
    setOpenSuccessDialog(true);
  };

  const handleReturnToMyPortfolio = () => {
    setOpenSuccessDialog(false);
    navigate("/contributions");
  };

  
  return (
    <>
      <InfoBanner>
        Once you click Submit, your employer will be notified of your new
        contribution elections. Your updated employee deferral elections will
        begin as soon as administratively practicable, subject to plan terms.
      </InfoBanner>
      <div className="changes-verify-container">
        <div className="changes-verify-header">
          <div className="changes-verify-header-step">STEP 2 OF 2</div>
          <div className="changes-verify-header-title">Verify your changes</div>
        </div>

        <div className="changes-verify-table-container">
          <div className="changes-verify-item">
            <div className="changes-verify-item-title big">
              My contributions
            </div>
            <div className="changes-verify-item-value">
              <Button size="small" onClick={() => {dispatch(setActiveStep({value: 0}))}}>
                <EditIcon sx={{ width: "20px", height: "20px" }} />
                Add/update
              </Button>
            </div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">
              Pre-Tax Contribution Amount
            </div>
            <div className="changes-verify-item-value">$22,000</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">
              Roth Contribution Amount
            </div>
            <div className="changes-verify-item-value">$100.00</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">
              Post-Tax Contribution Amount
            </div>
            <div className="changes-verify-item-value">$5,000</div>
          </div>
          
          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => {
                dispatch(setActiveStep({ value: 0 }));
              }}
            >
              Back
            </Button>
            <Button
              color="primary"
              size="small"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>

          <SuccessDialog
            open={openSuccessDialog}
            onClose={handleReturnToMyPortfolio}
            title="Success"
            content={`Your changes have been submitted. Confirmation #: ${Math.floor(Math.random() * 90000000 + 10000000)}`}
            textButton="Return to My Contributions"
          />
        </div>
      </div>
    </>
  );
};

export default VerifyStep;
