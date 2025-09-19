import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  RadioButton,
  InputText,
  InputSelect,
  CheckBox,
  InfoTooltip,
  InfoBanner,
  Table,
  InfoBullet,
} from "../../../components";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import "./styles.scss";

const Rollover = () => {
  const dispatch = useDispatch();

  const savedAvailable ="$45,045.78";

  const [rolloverType, setRolloverType] = useState();
  const [rolloverAmount, setRolloverAmount] = useState();
  const [rolloverAccount, setRolloverAccount] = useState("Traditional IRA");
  const [accountType, setAccountType] = useState();
  const [acceptCustodian, setAcceptCustodian] = useState();
  const [acceptInfo, setAcceptInfo] = useState();
  const [acceptCitizenship, setAcceptCitizenship] = useState();
  const [email, setEmail] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [address, setAddress] = useState("6455 IRVINE CENTER DR");
  const [city, setCity] = useState("IRVINE");
  const [state, setState] = useState("CA");
  const [zipCode, setZipCode] = useState("92618");
  const [country, setCountry] = useState("USA");

  const [totalRollover, setTotalRollover] = useState("$0.00");
  const [availableAmount, setAvailableAmount] = useState(savedAvailable);

  const dataInvestments = {
    headers: [
      {
        content: "Investments",
        key: "investment",
        align: "left",
      },
      {
        content: "Rollover % (must equal 100%)",
        key: "rollover",
        align: "right",
      },
    ],
    rows: [
      {
        columns: [
          { content: "Eupac Fund", key: "investment", align: "left" },
          {
            content: <InputText suffix="%" align="right" />,
            key: "rollover",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "The Investments Company of America",
            key: "investment",
            align: "left",
          },
          {
            content: <InputText suffix="%" align="right" />,
            key: "rollover",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "Emerging Markets Bond Fund",
            key: "investment",
            align: "left",
          },
          {
            content: <InputText suffix="%" align="right" />,
            key: "rollover",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "Short-Term Bond Fund of America",
            key: "investment",
            align: "left",
          },
          {
            content: <InputText suffix="%" align="right" />,
            key: "rollover",
            align: "right",
          },
        ],
      },
      {
        columns: [
          { content: "Smallcap World Fund", key: "investment", align: "left" },
          {
            content: <InputText suffix="%" align="right" />,
            key: "rollover",
            align: "right",
          },
        ],
      },
    ],
  };

  const getOptionsAccountType = () => {
    if (rolloverAccount === "Traditional IRA") {
      return [{ value: "Traditional IRA", label: "Traditional IRA" }];
    } else if (rolloverAccount === "Roth IRA") {
      return [{ value: "Roth IRA", label: "Roth IRA" }];
    }
    return [
      { value: "Traditional IRA", label: "Traditional IRA" },
      { value: "Qualified Plan", label: "Qualified Plan" },
      { value: "Roth IRA", label: "Roth IRA" },
    ];
  };

  const handleRolloverType = (value) => {
    setRolloverType(value);
    if (value === "All") {
      setTotalRollover(availableAmount);
      setRolloverAmount(availableAmount);
      setAvailableAmount("$0.00");
    } else {
      setTotalRollover("$0.00");
      setAvailableAmount(savedAvailable);
    }
  };

  return (
    <div className="withdrawal-request-rollover-container">
      <div className="withdrawal-request-rollover-content">
        <div className="withdrawal-request-rollover-body">
          <div className="withdrawal-request-rollover-header">
            <div className="withdrawal-request-rollover-header-title">
              How much do you want to rollover?
            </div>
          </div>

          <InfoBanner noColor>
            Fields marked with an asterisk (*) are required
          </InfoBanner>

          <div className="withdrawal-request-rollover-form">
            <div className="withdrawal-request-rollover-form-left">
              <InfoBullet title="Total rollover*" value={totalRollover} />
              <InfoBullet
                title="Remaining available amount*"
                value={availableAmount}
              />
              <InfoBanner noPadding noBorder noBackGround noColor>
                <i>
                  *Note: Amounts may vary based on the current market value of
                  your assets.
                </i>
              </InfoBanner>
            </div>
            <div className="withdrawal-request-rollover-form-right">
              <div className="withdrawal-request-rollover-form-radio-group">
                <label>Rollover amount</label>
                <RadioButton
                  label="Rollover all"
                  value="All"
                  name="rolloverType"
                  setValue={handleRolloverType}
                  checked={rolloverType === "All"}
                />
                <RadioButton
                  label="Rollover dollar amount"
                  value="Dollar"
                  name="rolloverType"
                  setValue={handleRolloverType}
                  checked={rolloverType === "Dollar"}
                />
              </div>

              <InputText
                label=" "
                subLabel={
                  <>
                    Max amount: <strong>{availableAmount}</strong>
                  </>
                }
                prefix="$"
                disabled={rolloverType === "All"}
                setValue={setRolloverAmount}
                value={rolloverAmount}
              />

              <InputSelect
                label="Rollover account"
                setValue={setRolloverAccount}
                value={rolloverAccount}
                options={[
                  {
                    value: "Traditional IRA",
                    label: "A New American Funds Traditional IRA",
                  },
                  { value: "Roth IRA", label: "A New American Funds Roth IRA" },
                  {
                    value: "Other",
                    label: "An IRA or retirement plan at another company",
                  },
                ]}
              />

              <InputSelect
                label="Account type"
                setValue={setAccountType}
                value={accountType}
                options={getOptionsAccountType()}
              />

              <CheckBox
                top
                label="By checking this box, I agree to establish an American Funds IRA and appoint Capital Bank and Trust as custodian.*"
                name="acceptCustodian"
                value={acceptCustodian}
                setValue={setAcceptCustodian}
              />

              <InfoBanner noPadding noBorder noBackGround noColor>
                <i>
                  I certify that I have received, read and agree to the terms of
                  the{" "}
                  <a
                    href="https://www.capitalgroup.com/advisor/pdf/shareholder/IRGEFM-036-568471.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    American Funds IRA Custodial Agreement
                  </a>{" "}
                  and the <a href="https://www.capitalgroup.com/advisor/pdf/shareholder/irgefm-013_iradiscl.pdf" target="_blank" rel="noopener noreferrer">IRA Disclousure Statement</a> and affirm
                  that all the information I provide is true and correct. If you
                  need a peper copy of these items or the Special Tax Notice,
                  please call us at (800) 421-9923 and we'll provide it to tou
                  at no charge.
                </i>
              </InfoBanner>

              <div className="withdrawal-request-rollover-personal-info">
                <div className="withdrawal-request-rollover-info-title border-bottom no-margin-top">
                  Verify personal information
                </div>
                <div className="withdrawal-request-rollover-personal-info-list">
                  <div className="withdrawal-request-rollover-personal-info-item">
                    <div>SSN</div>
                    <strong>000078807</strong>
                  </div>
                  <div className="withdrawal-request-rollover-personal-info-item">
                    <div>Full name</div>
                    <strong>Amanda Test</strong>
                  </div>
                  <div className="withdrawal-request-rollover-personal-info-item">
                    <div>Date of birth</div>
                    <strong>01/01/1980</strong>
                  </div>
                </div>
              </div>

              <CheckBox
                top
                label="By checking the box, I certified that the above information is accurate and can be used to establish my new individual Retirement Account. I understand that, to comply with federal regulations, this information will be used to verify my identity. For example, my identity may be verified through the use of a database maintained by a third party. If Capital Bank and Trust is unable to verify my identity, I understand that it may need to take action, possibly including closing my account and redeeming the shares at the fund´s current market price, and that such action may have tax consequences, including a tax penalty.*"
                suffix={
                  <InfoTooltip
                    placement="left"
                    title="Need a correction? Please contact your employer (or former employer) if your name, SSN or date of birth are incorrect. This information must be corrected before you can proceed with stablishing your IRA. "
                  />
                }
                name="acceptInfo"
                value={acceptInfo}
                setValue={setAcceptInfo}
              />

              <div className="withdrawal-request-rollover-form-radio-group">
                <label>
                  Citizenship
                  <span className="sub-label">
                    <InfoTooltip
                      placement="up"
                      title="If you are not U.S. citizen, please contact a Rollover Specialist. They are available to assist you Monday through Friday from 8 a.m. to 7 p.m. Eastern time. Just call (800) 421-9923."
                    />
                  </span>
                </label>

                <CheckBox
                  label="I am a US Citizen"
                  name="citizenship"
                  value={acceptCitizenship}
                  setValue={setAcceptCitizenship}
                />

                <div className="withdrawal-request-rollover-info-title">
                  Available investments
                </div>

                <InfoBanner noPadding noBorder noBackGround noColor>
                  <p>
                    Rollover investments into an American Funds IRA, with
                    Capital Bank and Trust as custodian, will automatically be
                    invested in Class A shares at no sales charge regardless of
                    the share class available in your retirement plan. Any
                    future contributions will be assessed the apppropiate sales
                    charge based on the applicable break points.
                  </p>
                  <p>
                    A one-time $10.00 set-up fee will be deducted from your
                    account. There is also an annual custodian fee (currently
                    $10.00).
                  </p>
                  <p>
                    If you’re rolling over to a new investment, make sure to{" "}
                    <a
                      href="https://www.dev.capitalgroup.com/retirement/participant/about/funds/index.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      download and review the prospectuses
                    </a>{" "}
                    for the new investments.
                  </p>
                </InfoBanner>

                <div className="no-bordered-table">
                  <Table data={dataInvestments} />
                </div>

                <div className="withdrawal-request-rollover-dibursement">
                  <div className="withdrawal-request-rollover-info-title border-bottom">
                    Disbursement
                  </div>
                  <label>Physical address for IRA rollover</label>
                  <InputText
                    label="Address*"
                    disabled
                    setValue={setAddress}
                    required
                    value={address}
                  />
                  <div className="withdrawal-request-rollover-dibursement-column">
                    <InputSelect
                      required
                      disabled
                      label="Country*"
                      setValue={setCountry}
                      value={country}
                      options={[{ value: "USA", label: "UNITED STATES" }]}
                    />
                    <InputText
                      required
                      disabled
                      label="City*"
                      setValue={setCity}
                      value={city}
                    />
                    <InputSelect
                      required
                      disabled
                      label="State*"
                      setValue={setState}
                      value={state}
                      options={[{ value: "CA", label: "CALIFORNIA" }]}
                    />
                    <InputText
                      required
                      disabled
                      label="Zip code*"
                      setValue={setZipCode}
                      value={zipCode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="withdrawal-request-rollover-body">
          <div className="withdrawal-request-rollover-form">
            <div className="withdrawal-request-rollover-form-left">
              <div className="withdrawal-request-rollover-info-title">
                Email address
              </div>
            </div>
            <div className="withdrawal-request-rollover-form-right">
              <label>
                Provide your email address to be used for any IRA communications
              </label>

              <InputText
                label="Email*"
                required
                setValue={setEmail}
                value={email}
              />

              <InfoBanner>Format: somebody@somecompany.com</InfoBanner>
              <InputText
                label="Confirm email*"
                required
                setValue={setConfirmEmail}
                value={confirmEmail}
              />
            </div>
          </div>
          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 3 }))}
            >
              Back
            </Button>
            <Button
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 5 }))}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rollover;
