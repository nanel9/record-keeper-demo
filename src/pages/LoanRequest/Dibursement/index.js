import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoanInfoBullets from "../LoanInfoBullets";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { setDeliveryFee } from "../../../state/loanCalculator/loanCalculatorSlice";
import {
  Button,
  InfoBanner,
  InputSelect,
  InfoTooltip,
  RadioButton,
  InputText,
  CheckBox,
} from "../../../components";
import { TermsAndConditions } from "../termsAndCondtions";
import "./styles.scss";

const Dibursement = () => {
  const dispatch = useDispatch();

  const [dibursementAccountType, setDibursementAccountType] =
    useState("ACH Deposit");
  const [dibursementAccountInformation, setDibursementAccountInformation] = useState(); 
  const [dibursementAccountNumber, setDibursementAccountNumber] = useState();
  const [dibursementRoutingNumber, setDibursementRoutingNumber] = useState();
  const [dibursementNameOnAccount, setDibursementNameOnAccount] = useState();
  const [dibursementCarrier, setDibursementCarrier] = useState('0');
  const [dibursementTerms, setDibursementTerms] = useState();

  const handleDeliveryFee = (event) => {
    dispatch(setDeliveryFee({ deliveryFee: event.target.value }));  
  };

  const isComplete = (dibursementAccountType === "ACH Deposit") ? (dibursementAccountInformation && dibursementAccountNumber && dibursementRoutingNumber && dibursementNameOnAccount && dibursementTerms) : true;

  return (
    <div className="dibursement-container">
      <div className="dibursement-content">
        <div className="dibursement-body">
          <div className="dibursement-header">
            <div className="dibursement-header-step">STEP 2 OF 5</div>
            <div className="dibursement-header-title">Disbursement method</div>
          </div>
          <InfoBanner>
            Automated Clearing House (ACH) disbursements require a routing
            number and an account number. Both numbers can be confirmed with
            your bank.
          </InfoBanner>

          <div className="dibursement-info">
            <div className="dibursement-info-left">
              <LoanInfoBullets />
            </div>
            <div className="dibursement-info-right">
              <InputSelect
                subLabel={
                  <InfoTooltip
                    placement="left"
                    title="Select the desired disbursement method."
                  />
                }
                label="Method"
                options={[
                  { value: "ACH Deposit", label: "ACH Deposit" },
                  { value: "Check", label: "Check" },
                ]}
                setValue={setDibursementAccountType}
                value={dibursementAccountType}
              />

              {dibursementAccountType === "ACH Deposit" && (
                <div className="dibursement-form-radio-group">
                  <label>
                    Bank account information
                    <span className="sub-label">
                      <InfoTooltip
                        placement="left"
                        title="Provide banking information for dibursement of the withdrawal."
                      />
                    </span>
                  </label>
                  <RadioButton
                    label="Checking"
                    value="Checking"
                    name="dibursementAccountType"
                    setValue={setDibursementAccountInformation}
                    checked={dibursementAccountInformation === "Checking"}
                  />
                  <RadioButton
                    label="Savings"
                    value="Savings"
                    name="dibursementAccountType"
                    setValue={setDibursementAccountInformation}
                    checked={dibursementAccountInformation === "Savings"}
                  />
                </div>
              )}

              {dibursementAccountType === "Check" && (
                <>
                  <InputSelect
                    label="Carrier (FedEx is unable to deliver to P.O. Box addresses)"
                    options={[
                      {
                        value: "0",
                        label: "US Postal Service Standard Delivery: $0.00",
                      },
                      {
                        value: "25",
                        label: "UPS Priority Mail: $25.00",
                      },
                      {
                        value: "25",
                        label: "FedEX Overnight Priority: $25.00",
                      },
                    ]}
                    onChangeExternal={handleDeliveryFee}
                    setValue={setDibursementCarrier}
                    value={dibursementCarrier}
                  />

                  <div className="dibursement-info-title">
                    Check delivery information
                  </div>

                  <label className="dibursement-info-label">
                    Amanda Test
                    <br />
                    6455 IRVIN CENTER DR
                    <br />
                    IRVINE, CALIFORNIA 92618-4518
                  </label>
                </>
              )}

              {dibursementAccountType === "ACH Deposit" && (
                <>
                  <div className="dibursement-form-input-container top-border">
                    <InputText
                      subLabel={
                        <InfoTooltip
                          placement="left"
                          title="Enter the routing number for your bank."
                        />
                      }
                      value={dibursementRoutingNumber}
                      setValue={setDibursementRoutingNumber}
                      label="Routing number"
                    />
                  </div>

                  <div className="dibursement-form-input-container">
                    <InputText
                      subLabel={
                        <InfoTooltip
                          placement="left"
                          title="Enter your account number."
                        />
                      }
                      value={dibursementAccountNumber}
                      setValue={setDibursementAccountNumber}
                      label="Account number"
                    />
                  </div>

                  <div className="dibursement-form-input-container">
                    <InputText
                      subLabel={
                        <InfoTooltip
                          placement="left"
                          title="Enter the name of the person associated with the bank account."
                        />
                      }
                      value={dibursementNameOnAccount}
                      setValue={setDibursementNameOnAccount}
                      label="Name on account"
                    />
                  </div>

                  <InfoBanner noBackGround noMargin noPadding>
                    Note: Users have two opportunities to enter their banking
                    instructions before the request is prohibited.
                  </InfoBanner>

                  <CheckBox
                    label="Terms and conditions"
                    name="dibursementTerms"
                    value={dibursementTerms}
                    setValue={setDibursementTerms}
                  />


                  <div className="dibursement-form-terms-and-conditions">
                    <TermsAndConditions/>
                  </div>

                </>
              )}
            </div>
          </div>

          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 0 }))}
            >
              Back
            </Button>
            <Button
              disabled={!isComplete}
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 2 }))}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dibursement;
