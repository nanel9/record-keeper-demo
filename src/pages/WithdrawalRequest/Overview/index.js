import React, { useState } from "react";
import { CheckBox, Button } from "../../../components";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import "./styles.scss";

const Overview = () => {
  const [acceptTerms, setAcceptTerms] = useState();

  const dispatch = useDispatch();

  return (
    <div className="withdrawal-request-overview-container">
      <div className="withdrawal-request-overview-content">
        <div className="withdrawal-request-overview-body">
          <div className="withdrawal-request-overview-header">
            <div className="withdrawal-request-overview-header-title">
              Overview
            </div>
          </div>
          <div className="withdrawal-request-overview-info">
            <p>
              Your retirement plan allows you to conveniently request
              withdrawals online.
            </p>
            <p>
              In order to utilize this feature, you must have a U.S. address and
              be a U.S. citizen or U.S. resident alien. If you have a foreign
              address and/or are a nonresident alien, please contact your
              employer to obtain the necessary form to submit your withdrawal
              request.
            </p>
            <p>
              Before continuing, review the contact, review the contact
              information on file for your account, including your mailing
              address and email address, to ensure everything is current and up
              to date.
            </p>
            <p>
              Onces a distribution request has been submitted and processed, it
              cannot be changed or reversed.
            </p>
          </div>
          <div className="withdrawal-request-overview-info-title">
            Terms & Conditions
          </div>
          <CheckBox
            label="I accept the terms and conditions."
            name="accept-terms"
            value={acceptTerms}
            setValue={setAcceptTerms}
          />

          <div className="wizard-footer">
            <Button
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 1 }))}
              disabled={!acceptTerms}
            >
              Next
            </Button>
          </div>
          <div className="withdrawal-request-overview-info">
            <p>
              Note: Your request may be subject to additional review/approval
              before it can be processed, depending on your account type and
              retirement plan program. Distribution options may also be limited
              and/or restricted by plan rules. For more information about your
              retirement paln distribution option and rules, contact your
              employer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
