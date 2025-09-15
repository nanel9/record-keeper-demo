/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoanInfoBullets from "../LoanInfoBullets";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { Button, RadioButton, InfoBanner } from "../../../components";
import "./styles.scss";

const Documentation = () => {
  const dispatch = useDispatch();

  const [documentationAccess, setDocumentationAccess] =
    useState("Print and Save");
  const [documentationApproval, setDocumentationApproval] =
    useState("");

  return (
    <div className="documentation-container">
      <div className="documentation-content">
        <div className="documentation-body">
          <div className="documentation-header">
            <div className="documentation-header-step">STEP 4 OF 5</div>
            <div className="documentation-header-title">Loan Documentation</div>
          </div>

          <InfoBanner>
            If you would like a paper copy of your loan documentation sent to you by mail free of charge, please contact a Retirement Plan Services Representative at (800) 421-4120.
          </InfoBanner>

          <div className="documentation-info">
            <div className="documentation-info-left">
              <LoanInfoBullets />
            </div>
            <div className="documentation-info-right">
              <label>Documentation access</label>
              <RadioButton
                label="Print and Save"
                value="Print and Save"
                name="documentationAccess"
                setValue={setDocumentationAccess}
                checked={documentationAccess === "Print and Save"}
              />
              <label></label>
              <label>
                Documentation approval
              </label>
              <RadioButton
                label="Electronic"
                value="Electronic"
                name="documentationApproval"
                setValue={setDocumentationApproval}
                checked={documentationApproval === "Electronic"}
                disabled={true}
              />
              <label></label>
              <label>Review loan documentation prior to proceeding</label>
              <a href="#">View documentation</a>
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
            <Button
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 4 }))}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
