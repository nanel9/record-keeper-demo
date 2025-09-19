import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import {
  InfoBullet,
  InfoBanner,
  Button,
  InputText,
  SuccessDialog,
  Table,
} from "../../../components";
import EditIcon from "@mui/icons-material/Edit";
import "./styles.scss";

const buildBeneficiaryData = (beneficiaries, primary) => {
  let headers = [];
  if (beneficiaries.length === 0) {
    headers = [
      {
        content: `You have no ${
          primary ? "primary" : "contingent"
        } beneficiaries defined.`,
        key: "nobeneficiaries",
        align: "left",
      },
    ];
  } else {
    headers = [
      {
        content: "Name",
        key: "name",
        align: "left",
      },
      {
        content: "SSN/TIN",
        key: "ssn",
        align: "left",
      },
      {
        content: "Relationship",
        key: "relationship",
        align: "left",
      },
      {
        content: "Birthdate",
        key: "birthdate",
        align: "left",
      },
      {
        content: "Address",
        key: "address",
        align: "left",
      },
      {
        content: "Percentage",
        key: "percentage",
        align: "right",
      },
    ];
  }

  const rows = beneficiaries.map((beneficiary) => {
    return {
      columns: [
        {
          content:
            beneficiary.type === "Person"
              ? beneficiary.firstName + " " + beneficiary.lastName
              : beneficiary.name,
          key: "name",
          align: "left",
        },
        {
          content:
            beneficiary.type === "Person" ? beneficiary.ssn : beneficiary.taxId,
          key: "ssn",
          align: "left",
        },
        {
          content: beneficiary.relationship,
          key: "relationship",
          align: "left",
        },
        {
          content: beneficiary.dateOfBirth,
          key: "birthdate",
          align: "left",
        },
        {
          content: beneficiary.address,
          key: "address",
          align: "left",
        },
        {
          content: `${beneficiary.percentage}%`,
          key: "percentage",
          align: "right",
        },
      ],
    };
  });

  return {
    headers,
    rows,
  };
};

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const withdrawalType = useSelector(
    (state) => state.withdrawal.withdrawalType
  );
  const withdrawalReason = useSelector(
    (state) => state.withdrawal.withdrawalReason
  );

  const primaryBeneficiaries = useSelector(
    (state) => state.withdrawal.primaryBeneficiaries
  );
  const contingentBeneficiaries = useSelector(
    (state) => state.withdrawal.contingentBeneficiaries
  );

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleSubmit = () => {
    setOpenSuccessDialog(true);
  };

  const handleReturnToMyLoans = () => {
    setOpenSuccessDialog(false);
    navigate("/loans-and-withdrawals");
  };

  const dataResumeTable = {
    headers: [
      {
        content: "Details",
        key: "details",
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
            content: "Rollover amount",
            key: "details",
            align: "left",
          },
          {
            content: (
              <>
                <strong>$45,045.78</strong>
              </>
            ),
            key: "amount",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "Fees to be deducted",
            key: "details",
            align: "left",
          },
          {
            content: (
              <div style={{ color: "#DA1944" }}>
                <strong>-$50.00</strong>
              </div>
            ),
            key: "amount",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "Estimated taxable amount",
            key: "details",
            align: "left",
          },
          {
            content: (
              <>
                <strong>$44,995.78</strong>
              </>
            ),
            key: "amount",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "Federal withholding",
            key: "details",
            align: "left",
          },
          {
            content: (
              <div style={{ color: "#DA1944" }}>
                <strong>-$9,030.19</strong>
              </div>
            ),
            key: "amount",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "State withholding",
            key: "details",
            align: "left",
          },
          {
            content: (
              <div style={{ color: "#DA1944" }}>
                <strong>-$1,903.01</strong>
              </div>
            ),
            key: "amount",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: <strong>Estimated rollover total</strong>,
            key: "details",
            align: "left",
          },
          {
            content: (
              <>
                <strong>$34,062.58</strong>
              </>
            ),
            key: "amount",
            align: "right",
          },
        ],
      },
    ],
  };

  const dataInvestmentsTable = {
    headers: [
      {
        content: "Investment",
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
          {
            content: "American Funds Global Insight Fund",
            key: "investment",
            align: "left",
          },
          {
            content: "100%",
            key: "rollover",
            align: "right",
          },
        ],
      },
    ],
  };

  const dataPrimaryBeneficiaryTable = buildBeneficiaryData(
    primaryBeneficiaries,
    true
  );
  const dataContingentBeneficiaryTable = buildBeneficiaryData(
    contingentBeneficiaries,
    false
  );

  return (
    <div className="withdrawal-request-review-container">
      <div className="withdrawal-request-review-content">
        <div className="withdrawal-request-review-body">
          <div className="withdrawal-request-review-header">
            <div className="withdrawal-request-review-header-title">
              Review your withdrawal
            </div>
          </div>

          <div className="withdrawal-request-review-content">
            <div className="withdrawal-request-review-left">
              <InfoBullet title="Total rollover*" value={"$0.00"} />
              <InfoBullet title="Remaining available amount*" value={"$0.00"} />
              <InfoBanner noPadding noBorder noBackGround noColor>
                <i>
                  *Note: Amounts may vary based on the current market value of
                  your assets.
                </i>
              </InfoBanner>
            </div>
            <div className="withdrawal-request-review-right">
              <div className="withdrawal-request-review-table">
                <div className="withdrawal-request-review-title">
                  Reason & type of withdrawal
                  <Button
                    size="small"
                    onClick={() => {
                      dispatch(setActiveStep({ value: 1 }));
                    }}
                  >
                    <EditIcon />
                    Make changes
                  </Button>
                </div>
                <div className="withdrawal-request-review-info-list">
                  <div className="withdrawal-request-review-info-item">
                    <div>Reason</div>
                    <strong>{withdrawalType}</strong>
                  </div>
                  <div className="withdrawal-request-review-info-item">
                    <div>Type</div>
                    <strong>{withdrawalReason}</strong>
                  </div>
                </div>
              </div>

              <div className="withdrawal-request-review-table">
                <div className="withdrawal-request-review-title">
                  Rollover
                  <Button
                    size="small"
                    onClick={() => {
                      dispatch(setActiveStep({ value: 4 }));
                    }}
                  >
                    <EditIcon />
                    Make changes
                  </Button>
                </div>
                <div className="withdrawal-request-review-info-list">
                  <div className="withdrawal-request-review-info-item">
                    <div>Account type</div>
                    <strong>Roth IRA</strong>
                  </div>
                  <div className="withdrawal-request-review-info-item">
                    <div>Total amount available for distribution</div>
                    <strong>$45,045.78</strong>
                  </div>
                  <div className="withdrawal-request-review-info-item">
                    <div>Fees to be deducted</div>
                    <strong>$50.00</strong>
                  </div>
                  <div className="withdrawal-request-review-info-item">
                    <div>Rollover amount total</div>
                    <strong>100%</strong>
                  </div>
                </div>
              </div>

              <div className="withdrawal-request-review-resume">
                <label>
                  You are making a rollover with the following taxes and fees:
                </label>
                <Table data={dataResumeTable} noBorderedTable></Table>
              </div>

              <div className="withdrawal-request-review-investments">
                <div className="withdrawal-request-review-title no-border">
                  Available investments
                </div>
                <Table data={dataInvestmentsTable} noBorderedTable></Table>
                <div className="withdrawal-request-review-email-check">
                  <label>Physical address for IRA rollover</label>
                  6455 IRVINE CENTER DR
                  <br />
                  IRVINE, CA 92618
                </div>
              </div>

              <div className="withdrawal-request-review-beneficiaries">
                <div className="withdrawal-request-review-title">
                  Beneficiaries
                  <Button
                    size="small"
                    onClick={() => {
                      dispatch(setActiveStep({ value: 5 }));
                    }}
                  >
                    <EditIcon />
                    Make changes
                  </Button>
                </div>

                <div className="withdrawal-request-review-title small no-border">
                  Primary beneficiary
                </div>
                <Table data={dataPrimaryBeneficiaryTable}></Table>
                <div className="withdrawal-request-review-title small no-border">
                  Contingent beneficiary
                </div>
                <Table data={dataContingentBeneficiaryTable}></Table>
              </div>

              <div className="withdrawal-request-review-email">
                {/* Withdrawal cash */}
                <div className="withdrawal-request-review-email-check">
                  <label>Mail check to</label>
                  6455 IRVINE CENTER DR
                  <br />
                  IRVINE, CA 92618
                </div>
                <div className="divider"></div>
                <label>Email me with the status of my request (required)</label>
                <InputText
                  label="Email*"
                  required
                  value={email}
                  setValue={setEmail}
                ></InputText>
                <InfoBanner noMargin>
                  Format: somebody@somecompany.com
                </InfoBanner>
                <InputText
                  label="Confirm email*"
                  required
                  value={confirmEmail}
                  setValue={setConfirmEmail}
                ></InputText>
              </div>

              {/* Rollover */}
              <div className="withdrawal-request-review-email-rollover">
                <label>Email address</label>
                <InfoBanner noMargin noPadding noBorder noBackGround noColor>
                  somebody@somecompany.com
                </InfoBanner>
              </div>

              <InfoBanner>
                You authorize the liquidation of your account. This means that
                all investments will be sold or redeemed for cash.
              </InfoBanner>

              <InfoBanner noPadding noMargin noBorder noBackGround noColor>
                <ul>
                  <li>
                    IMPORTANT: Once a distribution or rollover has been
                    processed, it cannot be changed or reversed.
                  </li>
                  <li>
                    Distribution requests that are approved after 4:00 PM
                    Eastern time on a business day will be processed on the next
                    business day and receive that day’s closing share price.
                  </li>
                  <li>
                    If you’ve requested a rollover, after tax assets will be
                    included with your request, if applicable. If this is not
                    your intent, do not proceed with your online submission and
                    contact us for further instructions.
                  </li>
                  <li>If you’re establishing a new American Funds IRA:</li>
                  <li>
                    Your account will be accessed at capitalgroup.com. An email
                    with instructions for accessing your account online will be
                    sent to the email address you provided.
                  </li>
                  <li>
                    Your dividends and capital gains will be automatically
                    reinvested.
                  </li>
                  <li>
                    Your telephone exchange and redemption options will be
                    automatically enabled. You may disable them once the account
                    has been opened.
                  </li>
                  <li>
                    If requesting a hardship withdrawal, your plan may require
                    you to provide supporting documents or additional
                    information to your employer prior to approval.
                  </li>
                  <li>
                    Once a distribution is approved by your employer, payment is
                    issued according to your selected disbursement method.
                    Requests expire after 30 days if your employer does not
                    approve or deny it. Checks sent by standard mail should be
                    received within 7-10 business days. Checks sent via
                    Expedited Delivery should be received within 2 business
                    days. Electronic transfers to a bank account via ACH should
                    be received within 2-3 business days.
                  </li>
                </ul>
              </InfoBanner>

              <div className="wizard-footer">
                <Button
                  color="secondary"
                  size="small"
                  onClick={() => dispatch(setActiveStep({ value: 5 }))}
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
            </div>
          </div>
        </div>
      </div>

      <SuccessDialog
        open={openSuccessDialog}
        onClose={handleReturnToMyLoans}
        title="Success"
        content={`Your withdrawal request has been submitted. Confirmation #: ${Math.floor(
          Math.random() * 90000000 + 10000000
        )}`}
        textButton="Return to Loans & Withdrawals"
      />
    </div>
  );
};

export default Review;
