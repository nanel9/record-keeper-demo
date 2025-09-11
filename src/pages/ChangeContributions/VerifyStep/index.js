import React from "react";
import { Button, InfoBanner } from "../../../components";
import EditIcon from '@mui/icons-material/Edit';
import "./styles.scss";

const VerifyStep = () => {
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
            <div className="changes-verify-item-title big">My contributions</div>
            <div className="changes-verify-item-value">
              <Button size="small">
                <EditIcon sx={{ width: '20px', height: '20px' }} />
                Add/update
              </Button>
            </div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Pre-Tax Contribution Amount</div>
            <div className="changes-verify-item-value">$22,000</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Roth Contribution Amount</div>
            <div className="changes-verify-item-value">$100.00</div>
          </div>
          <div className="changes-verify-item">
            <div className="changes-verify-item-title">Post-Tax Contribution Amount</div>
            <div className="changes-verify-item-value">$5,000</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyStep;
