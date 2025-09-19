import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import {
  setPrimaryBeneficiaries,
  setContingentBeneficiaries,
} from "../../../state/withdrawal/withdrawalSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import countries from "../../../data/countries";
import states from "../../../data/states";
import {
  InfoBanner,
  Button,
  InfoTooltip,
  InputSelect,
  InputText,
  DatePicker,
  RoundButton,
} from "../../../components";
import "./styles.scss";
import classNames from "classnames";

const NewBeneficiaryForm = (props) => {
  const { index, beneficiary, primary } = props;
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const beneficiaries = useSelector(
    (state) =>
      state.withdrawal[
        primary ? "primaryBeneficiaries" : "contingentBeneficiaries"
      ]
  );

  const handleBeneficiaryChange = (field, value) => {
    const updatedBeneficiaries = beneficiaries.map((beneficiary, i) =>
      i === index ? { ...beneficiary, [field]: value } : beneficiary
    );
    dispatch(
      primary
        ? setPrimaryBeneficiaries({ beneficiaries: updatedBeneficiaries })
        : setContingentBeneficiaries({
            beneficiaries: updatedBeneficiaries,
          })
    );
  };

  const handleDeleteBeneficiary = (index) => {
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries.splice(index, 1);
    dispatch(
      primary
        ? setPrimaryBeneficiaries({ beneficiaries: updatedBeneficiaries })
        : setContingentBeneficiaries({
            beneficiaries: updatedBeneficiaries,
          })
    );
  };

  const handleShowBeneficiary = () => {
    setShow(!show);
  };

  const ssnMask = {
    mask: '___-__-____',
    replacement: { _: /\d|\*/ }, 
  };

  return (
    <div
      key={index}
      className="withdrawal-request-beneficiaries-new-beneficiary"
    >
      <div className="withdrawal-request-beneficiaries-new-beneficiary-header">
        <div className="withdrawal-request-beneficiaries-new-beneficiary-title">
          {show ? (
            <KeyboardArrowDownIcon
              onClick={handleShowBeneficiary}
              sx={{
                width: "24px",
                height: "24px",
                color: "#005F9E",
              }}
            />
          ) : (
            <ChevronRightIcon
              onClick={handleShowBeneficiary}
              sx={{
                width: "24px",
                height: "24px",
                color: "#005F9E",
              }}
            />
          )}
          {beneficiary.type === "Person"
            ? beneficiary.firstName +
              " " +
              beneficiary.middleName +
              " " +
              beneficiary.lastName
            : beneficiary.name}{" "}
          {""} | {beneficiary.relationship}
        </div>
        <div className="withdrawal-request-beneficiaries-new-beneficiary-percentage">
          Percentage:
          <InputText
            suffix="%"
            align="right"
            type="number"
            value={beneficiary.percentage}
            setValue={(value) =>
              handleBeneficiaryChange("percentage", value)
            }
          />
          <RoundButton
            icon={
              <DeleteForeverIcon
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "#fff",
                }}
              />
            }
            onClick={() => handleDeleteBeneficiary(index)}
          />
        </div>
      </div>
      <div
        className={classNames(
          `withdrawal-request-beneficiaries-new-beneficiary-content`,
          show ? "" : "hidden"
        )}
      >
        <div className="withdrawal-request-beneficiaries-new-beneficiary-rows">
          {beneficiary.type === "Person" ? (
            <>
              <InputText
                label="First Name*"
                required
                value={beneficiary.firstName}
                setValue={(value) =>
                  handleBeneficiaryChange("firstName", value)
                }
              />
              <InputText
                label="Middle Name"
                value={beneficiary.middleName}
                setValue={(value) =>
                  handleBeneficiaryChange("middleName", value)
                }
              />
              <InputText
                label="Last Name*"
                required
                value={beneficiary.lastName}
                setValue={(value) =>
                  handleBeneficiaryChange("lastName", value)
                }
              />
            </>
          ) : (
            <>
              {" "}
              <InputText
                label="Entity Name*"
                required
                value={beneficiary.name}
                setValue={(value) =>
                  handleBeneficiaryChange("name", value)
                }
              />
              <InputText
                label="Tax ID*"
                required
                value={beneficiary.taxId}
                setValue={(value) =>
                  handleBeneficiaryChange("taxId", value)
                }
              />
              <InputSelect
                label="Relationship*"
                required
                options={[{ value: "Entity", label: "Entity" }]}
                value={beneficiary.relationship}
                setValue={(value) =>
                  handleBeneficiaryChange("relationship", value)
                }
              />{" "}
            </>
          )}
        </div>
        {beneficiary.type === "Person" && (
          <div className="withdrawal-request-beneficiaries-new-beneficiary-rows">
            <InputText
              label="SSN*"
              mask={ssnMask}
              required
              value={beneficiary.ssn}
              setValue={(value) =>
                handleBeneficiaryChange("ssn", value)
              }
            />
            <InputSelect
              label="Relationship*"
              required
              options={[
                { value: "Spouse", label: "Spouse" },
                { value: "Child", label: "Child" },
                { value: "Parent", label: "Parent" },
                { value: "Sibling", label: "Sibling" },
                { value: "Widow", label: "Widow" },
                { value: "Other", label: "Other" },
              ]}
              value={beneficiary.relationship}
              setValue={(value) =>
                handleBeneficiaryChange("relationship", value)
              }
            />
            <DatePicker
              label="Date of Birth"
              value={beneficiary.dateOfBirth}
              setValue={(value) =>
                handleBeneficiaryChange("dateOfBirth", value)
              }
            />
          </div>
        )}
        <div className="withdrawal-request-beneficiaries-new-beneficiary-columns">
          <InputText
            label="Address"
            value={beneficiary.address}
            setValue={(value) =>
              handleBeneficiaryChange("address", value)
            }
          />

          <InputText
            value={beneficiary.address1}
            setValue={(value) =>
              handleBeneficiaryChange("address1", value)
            }
          />

          <InputText
            value={beneficiary.address2}
            setValue={(value) =>
              handleBeneficiaryChange("address2", value)
            }
          />
        </div>

        <div className="withdrawal-request-beneficiaries-new-beneficiary-rows">
          <InputSelect
            label="Country"
            options={countries}
            value={beneficiary.country}
            setValue={(value) =>
              handleBeneficiaryChange("country", value)
            }
          />
          <InputText
            label="City"
            value={beneficiary.city}
            setValue={(value) =>
              handleBeneficiaryChange("city", value)
            }
          />
          {beneficiary.country === "US" && (
            <InputSelect
              label="State"
              options={states}
              value={beneficiary.state}
              setValue={(value) =>
                handleBeneficiaryChange("state", value)
              }
            />
          )}
          <InputText
            label="Zip Code*"
            required
            value={beneficiary.zipCode}
            setValue={(value) =>
              handleBeneficiaryChange("zipCode", value)
            }
          />
        </div>
      </div>
    </div>
  );
};

const Beneficiaries = () => {
  const dispatch = useDispatch();
  const primaryBeneficiaries = useSelector(
    (state) => state.withdrawal.primaryBeneficiaries
  );
  const contingentBeneficiaries = useSelector(
    (state) => state.withdrawal.contingentBeneficiaries
  );
  const [primaryBeneficiaryType, setPrimaryBeneficiaryType] =
    useState("Person");
  const [contingentBeneficiaryType, setContingentBeneficiaryType] =
    useState("Person");

  const checkBeneficiaries = () => {
    if (primaryBeneficiaries.length === 0 ) {
      return false;
    } else {
      const primaryPercentage = primaryBeneficiaries.reduce((acc, beneficiary) => {
        return acc + parseFloat(beneficiary.percentage);
      }, 0);
      if (primaryPercentage < 100) {
        return false;
      }
    }

    return true;
  };

  const handleAddBeneficiary = (primary) => {
    const beneficiaryType = primary ? primaryBeneficiaryType : contingentBeneficiaryType;
    let newBeneficiary = {};
    if (beneficiaryType === "Person") {
      newBeneficiary = {
        firstName: "",
        middleName: "",
        lastName: "",
        ssn: "",
        dateOfBirth: "",
        address: "",
        address2: "",
        address3: "",
        city: "",
        country: "US",
        state: "AL",
        zipCode: "",
        relationship: "Spouse",
        percentage: "0.00",
        type: "Person",
      };
    } else {
      newBeneficiary = {
        name: "",
        taxId: "",
        address: "",
        address2: "",
        address3: "",
        city: "",
        country: "US",
        state: "AL",
        zipCode: "",
        relationship: "Entity",
        percentage: "0.00",
        type: "Entity",
      };
    }

    if (primary) {
      dispatch(
        setPrimaryBeneficiaries({
          beneficiaries: [...primaryBeneficiaries, newBeneficiary],
        })
      );
    } else {
      dispatch(
        setContingentBeneficiaries({
          beneficiaries: [...contingentBeneficiaries, newBeneficiary],
        })
      );
    }
  };

  return (
    <div className="withdrawal-request-beneficiaries-container">
      <div className="withdrawal-request-beneficiaries-content">
        <div className="withdrawal-request-beneficiaries-body">
          <InfoBanner noColor noPadding noBorder noBackGround noMargin>
            <p>
              <strong>Important Beneficiary Designation Information</strong>
            </p>
            <p>
              We encourage you to consult an advisor regarding the tax law and
              estate planning implications of your beneficiary designation. At
              the time of your death, if no designation is in effect, then the
              following default provision of the Traditional or Roth IRA
              Custodial Agreement will apply:
            </p>
            <ul>
              <li>
                The beneficiary will be your spouse or, if none, your children
                equally.
              </li>
              <li>
                If any child does not survive you, then the deceased child’s
                share will be distributed to his or her children (your
                grandchildren) equally or, if none, the surviving children
                equally.
              </li>
              <li>
                If none of the foregoing survives you, the beneficiary will be
                your estate.
              </li>
            </ul>
            <p>
              By clicking the Next button, I certify that, if I am married and
              have not named my spouse as primary beneficiary, I have consulted
              a legal or tax adviser and determined spousal consent is not
              required by my state.
            </p>
            <p>
              If I am married and naming my spouse a beneficiary, I elect to
              treat such spouse as a beneficiary while we are married. Effective
              immediately upon the divorce, annulment or other lawful
              dissolution of my marriage, the designation shall be null and
              void, unless after the dissolution of my marriage I affirmatively
              elect to name my former spouse as my non-spouse beneficiary.
            </p>
            I have expressly selected the beneficiary(ies) entered above and
            revoke any previous designation. I acknowledge that neither the
            custodian nor any affiliate of the custodian shall be liable for any
            claims, losses, damages, expenses or taxes (including penalties and
            interest) arising out of or in any manner, directly or indirectly,
            connected with this beneficiary change. If the beneficiary is
            considered not valid, the default designation outlined in the
            Custodial Agreement will apply. I acknowledge that I am
            electronically signing this request.
          </InfoBanner>

          <div className="withdrawal-request-beneficiaries-header">
            <div className="withdrawal-request-beneficiaries-header-title">
              Identify rollover beneficiaries
            </div>
          </div>

          <div className="withdrawal-request-beneficiaries-form">
            <div className="withdrawal-request-beneficiaries-form-container">
              <div className="withdrawal-request-beneficiaries-info-title">
                Add/update primary beneficiaries
              </div>
              <div className="withdrawal-request-beneficiaries-controls">
                <label>
                  Add a primary beneficiary
                  <span className="sub-label">
                    <InfoTooltip
                      placement="bottom"
                      title="The individuals (or entities) designated to inherit the assets from your account."
                    />
                  </span>
                </label>
                <div className="withdrawal-request-beneficiaries-controls-input">
                  <InputSelect
                    label="Please note percentage allocations must total 100%."
                    options={[
                      { value: "Person", label: "Person" },
                      { value: "Entity", label: "Entity" },
                    ]}
                    value={primaryBeneficiaryType}
                    setValue={setPrimaryBeneficiaryType}
                  />
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => handleAddBeneficiary(true)}
                  >
                    Add
                  </Button>
                </div>

                <div className="withdrawal-request-beneficiaries-new-beneficiaries-container">
                  {primaryBeneficiaries.map((beneficiary, index) => {
                    return (
                      <NewBeneficiaryForm
                        key={index}
                        index={index}
                        beneficiary={beneficiary}
                        primary={true}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="withdrawal-request-beneficiaries-controls">
                <label>
                  Add a contingent beneficiary
                  <span className="sub-label">
                    <InfoTooltip
                      placement="bottom"
                      title="The individuals (or entities) designated to secondarily inherit the assets from your account if there are no surviving primary beneficiaries."
                    />
                  </span>
                </label>
                <div className="withdrawal-request-beneficiaries-controls-input">
                  <InputSelect
                    label="Please note percentage allocations must total 100%."
                    options={[
                      { value: "Person", label: "Person" },
                      { value: "Entity", label: "Entity" },
                    ]}
                    value={contingentBeneficiaryType}
                    setValue={setContingentBeneficiaryType}
                  />
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => handleAddBeneficiary(false)}
                  >
                    Add
                  </Button>
                </div>

                <div className="withdrawal-request-beneficiaries-new-beneficiaries-container">
                  {contingentBeneficiaries.map((beneficiary, index) => {
                    return (
                      <NewBeneficiaryForm
                        key={index}
                        index={index}
                        beneficiary={beneficiary}
                        primary={false}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

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
              disabled={!checkBeneficiaries()}
              onClick={() => dispatch(setActiveStep({ value: 6 }))}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
