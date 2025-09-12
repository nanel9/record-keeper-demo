import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, InfoBanner, Table, SuccessDialog } from "../../../../components";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import EditIcon from "@mui/icons-material/Edit";
import "./styles.scss";

const FutureInvestmentStep3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);

  const handleSubmit = () => {
    setOpenSuccessDialog(true);
  };

  const handleReturnToMyPortfolio = () => {
    setOpenSuccessDialog(false);
    navigate("/my-portfolio");
  };


  const dataTable = {
    headers: [
      {
        content: "Investment",
        key: "investment",
        align: "left",
      },
      {
        content: "Amount",
        key: "amount",
        align: "right",
      },
    ],
    rows: [
      {
        columns: [
          {
            content: "Af U.S. Government Money Market-R2",
            key: "investment",
            align: "left",
          },
          {
            content: "100%",
            key: "amount",
            align: "right",
          },
        ],
      },
    ],
    footer: [
      {
        content: "Total",
        key: "investment",
        align: "left",
      },
      {
        content: "100%",
        key: "amount",
        align: "right",
      },
    ],
  };

  return (
    <div className="future-investment-step-3-container">
      <div className="future-investment-step-3-header">
        <div className="future-investment-step-3-header-step">
          STEP 3 OF 3
        </div>
        <div className="future-investment-step-3-header-title">
          Verify your changes
        </div>
      </div>

      <div className="future-investment-step-3-body">
        <InfoBanner>
          Any vested balances and percentages shown are based on information
          provided to Capital Group and may not reflect the most current data.
          Please check with your employer for the most recent information.
        </InfoBanner>

        <div className="future-investment-step-3-table-container">
          <div className="changes-verify-item">
            <div className="changes-verify-item-title big">My investments</div>
            <div className="changes-verify-item-value">
              <Button
                size="small"
                onClick={() => {
                  dispatch(setActiveStep({ value: 8 }));
                }}
              >
                <EditIcon sx={{ width: "20px", height: "20px" }} />
                Make changes
              </Button>
            </div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Action</div>
            <div className="changes-verify-item-value">Future investments elections</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Contribution type</div>
            <div className="changes-verify-item-value">All employer contribution and employee contribution types</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Affects</div>
            <div className="changes-verify-item-value">Future contributions</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Auto Rebalancing</div>
            <div className="changes-verify-item-value">Quarterly</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Rebalance Date</div>
            <div className="changes-verify-item-value">09/26/2025</div>
          </div>
        </div>

        <div className="future-investment-step-3-resume-container">
          <div className="future-investment-step-3-resume-title">
            The new investments are as follows:
          </div>
          <div className="future-investment-step-3-resume-table-container">
            <Table data={dataTable} />
          </div>
        </div>
      </div>

      <div className="wizard-footer">
        <Button
          color="secondary"
          size="small"
          onClick={() => dispatch(setActiveStep({ value: 8 }))}
        >
          Back
        </Button>
        <Button color="primary" size="small" onClick={handleSubmit}>
          Submit
        </Button>
      </div>

      <SuccessDialog
        open={openSuccessDialog}
        onClose={handleReturnToMyPortfolio}
        title="Success"
        content={`Your changes have been submitted. Confirmation #: ${Math.floor(Math.random() * 90000000 + 10000000)}`}
        textButton="Return to My Portfolio"
      />
    </div>
  );
};

export default FutureInvestmentStep3;
