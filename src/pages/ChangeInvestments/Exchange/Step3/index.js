import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, InfoBanner, Table } from "../../../../components";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import EditIcon from "@mui/icons-material/Edit";
import "./styles.scss";

const InvestmentExchangeStep3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
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
            content: "$5,000",
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
        content: "$5,000",
        key: "amount",
        align: "right",
      },
    ],
  };

  return (
    <div className="investment-exchange-step-3-container">
      <div className="investment-exchange-step-3-header">
        <div className="investment-exchange-step-3-header-step">
          STEP 3 OF 3
        </div>
        <div className="investment-exchange-step-3-header-title">
          Verify your changes
        </div>
      </div>

      <div className="investment-exchange-step-3-body">
        <InfoBanner>
          Any vested balances and percentages shown are based on information
          provided to Capital Group and may not reflect the most current data.
          Please check with your employer for the most recent information.
        </InfoBanner>

        <div className="investment-exchange-step-3-table-container">
          <div className="changes-verify-item">
            <div className="changes-verify-item-title big">My investments</div>
            <div className="changes-verify-item-value">
              <Button
                size="small"
                onClick={() => {
                  dispatch(setActiveStep({ value: 2 }));
                }}
              >
                <EditIcon sx={{ width: "20px", height: "20px" }} />
                Make changes
              </Button>
            </div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Action</div>
            <div className="changes-verify-item-value">Exchange</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Process Date</div>
            <div className="changes-verify-item-value">
              {new Date().toLocaleDateString()}
            </div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">
              Investment To Exchange
            </div>
            <div className="changes-verify-item-value">
              Af U.S. Government Money Market-R2
            </div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Amount To Exchange</div>
            <div className="changes-verify-item-value">$5,000</div>
          </div>
        </div>

        <div className="investment-exchange-step-3-resume-container">
          <div className="investment-exchange-step-3-resume-title">
            You are exchanging funds to the following investments:
          </div>
          <div className="investment-exchange-step-3-resume-table-container">
            <Table data={dataTable} />
          </div>
        </div>
      </div>

      <div className="wizard-footer">
        <Button
          color="secondary"
          size="small"
          onClick={() => dispatch(setActiveStep({ value: 2 }))}
        >
          Back
        </Button>
        <Button color="primary" size="small" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default InvestmentExchangeStep3;
