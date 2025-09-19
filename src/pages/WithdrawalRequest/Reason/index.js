import React from "react";
import { Button, InfoBanner, RadioButton, InfoBullet } from "../../../components";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../state/wizard/wizardSlice";
import { setWithdrawalReason } from "../../../state/withdrawal/withdrawalSlice";
import "./styles.scss";
import { useSelector } from "react-redux";

const Reason = () => {
  const dispatch = useDispatch();
  const [selectedReason, setSelectedReason] = React.useState(null);
  const withdrawalType = useSelector((state) => state.withdrawal.withdrawalType);


  const handleWithdrawalReason = (value) => {
    setSelectedReason(value);
    dispatch(setWithdrawalReason({ withdrawalReason: value }));
  }


  const withdrawalReasons = [
    {
      label: "Termination of employment",
      value: "Termination",
      type: "I'm leaving my employer",
      description:
        "You may request a withdrawal when your employment has been terminated for any reason.",
      amount: "$45,045.78",
    },
    {
      label: "Retirement",
      value: "Retirement",
      type: "I'm leaving my employer",
        description:
        "If you are retiring and have reached the plan’s normal retirement age, you may take a withdrawal from your account.",
      amount: "$45,045.78",
    },
    {
      label: "Hardship withdrawal",
      value: "Hardship withdrawal",
      type: "I'm staying with my employer but want to make a withdrawal",
      description: (
        <>
          The amount available is limited to your documented financial need plus
          any taxes and penalties that may be due on account of the withdrawal.
          See your employer for details.
          <br />
          <br />
          You may withdraw your employee pretax and/or Roth contributions from
          the plan if you have a financial hardship. Depending on plan rules,
          you may also be able to withdraw investment earnings on your employee
          contributions and/or other contribution types. The amount available is
          limited to your documented financial need plus any taxes and penalties
          that may be due on account of the withdrawal. You must provide
          supporting documentation to your employer for approval.
          <br />
          <br />
          The withdrawal must be due to an immediate and heavy financial need.
          You must also take all other currently available distributions from
          your employer's plans.
          <br />
          <br />
          Please check with your employer to discuss restrictions, determine
          eligibility, and any other additional requirements.
        </>
      ),
      amount: "$45,045.78",
    },
    {
      label: "After-tax",
      value: "After-tax",
      type: "I'm staying with my employer but want to make a withdrawal",
      description:
        "You may withdraw voluntary after-tax contributions without penalty at any time. Earnings from after-tax contributions may be taxable. Please speak to your financial professional for more information.",
      amount: "$45,045.78",
    },
    {
      label: "Withdrawal (Before 59 ½)",
      value: "Withdrawal (Before 59 ½)",
      type: "I'm staying with my employer but want to make a withdrawal",
      description: "  ",
      amount: "$45,045.78",
    },
    {
      label: "Domestic Abuse",
      value: "Domestic Abuse",
      type: "I'm staying with my employer but want to make a withdrawal",
      description: "",
      amount: "$45,045.78",
    },
  ];

  return (
    <div className="withdrawal-request-reason-container">
      <div className="withdrawal-request-reason-content">
        <div className="withdrawal-request-reason-body">
          <div className="withdrawal-request-reason-header">
            <div className="withdrawal-request-reason-header-title">
              Select a reason for the withdrawal or distribution
            </div>
          </div>

          {withdrawalType === "Leaving" && (
            <div className="withdrawal-request-reason-info-title">
              Leaving the plan
            </div>
          )}

          <div className="withdrawal-request-reason-options">
            {withdrawalReasons.filter((reason) => reason.type === withdrawalType).map((reason, index) => (
              <div className="withdrawal-request-reason-option" key={index}>
                <div className="withdrawal-request-reason-option-radio">
                  <RadioButton
                    label={reason.label}
                    name="withdrawal-request-reason"
                    value={reason.value}
                    setValue={handleWithdrawalReason}
                  />
                  <div className="withdrawal-request-reason-option-description">
                    {reason.description}
                  </div>
                </div>
                <InfoBullet title="Estimated available amount" value={reason.amount}/>

              </div>
            ))}
          </div>
          <div className="wizard-footer">
            <Button
              color="secondary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 1 }))}
            >
              Back
            </Button>
            <Button
              color="primary"
              size="small"
              onClick={() => dispatch(setActiveStep({ value: 3 }))}
              disabled={!selectedReason}
            >
              Next
            </Button>
          </div>
          <InfoBanner noBackGround noMargin noPadding noColor>
            Note: The amount available is limited to your vested account balance
            and subject to the terms of the plan. An early distribution penalty
            of 10% may apply to distributions made prior to reaching age 59 1/2
          </InfoBanner>
        </div>
      </div>
    </div>
  );
};

export default Reason;
