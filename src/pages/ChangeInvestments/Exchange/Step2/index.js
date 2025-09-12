import React from "react";
import { useDispatch } from "react-redux";
import { setActiveStep } from "../../../../state/wizard/wizardSlice";
import { Button, InfoBanner, Table, InputText, DotMenu } from "../../../../components";
import "./styles.scss";

const InvestmentExchangeStep2 = () => {

  const dispatch = useDispatch();

  const options = [
    {
      content: "Fund details",
      key: "option1",
      url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0002259&type=details",
    },
    {
      content: "Prospectus",
      key: "option2",
      url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0002259&cusip=999998255&type=prospectus",
    },
  ];

  const dataTable = {
    headers: [
      {
        content: "Name",
        key: "name",
        align: "left",
      },
      {
        content: "Docs",
        key: "docs",
        align: "center",
      },
      {
        content: "Asset Class",
        key: "assetClass",
        align: "left",
      },
      {
        content: "Current Balance",
        key: "currentBalance",
        align: "right",
      },
      {
        content: "Current Units",
        key: "currentUnits",
        align: "right",
      },
      {
        content: "Amount to Exchange",
        key: "amountToExchange",
        align: "right",
        width: "100px",
      },
    ],
    rows: [
        {
            columns: [
                {
                    content: "Af U.S Government Money Market-R2",
                    key: "name",
                    align: "left",
                },
                {
                    content: <DotMenu options={options} />,
                    key: "docs",
                    align: "center",
                },
                {
                    content: "Growth",
                    key: "assetClass",
                    align: "left",
                },
                {
                    content: "$41,035.30",
                    key: "currentBalance",
                    align: "right",
                },
                {
                    content: "41,035.300",
                    key: "currentUnits",
                    align: "right",
                },
                {
                    content: <InputText label="" type="number" prefix="$" value={"100%"} setValue={() => {}} />,
                    key: "amountToExchange",
                    align: "right",
                },
            ]
        }
    ]
  }

  return (
    <div className="investment-exchange-step-2-container">
      <div className="investment-exchange-step-2-info">
        <InfoBanner>
          Any vested balances and percentages shown are based on information
          provided to Capital Group and may not reflect the most current data.
          Please check with your employer for the most recent information.
        </InfoBanner>
      </div>

      <div className="investment-exchange-step-2-header">
        <div className="investment-exchange-step-2-header-step">
          STEP 2 OF 3
        </div>
        <div className="investment-exchange-step-2-header-title">
          Select your investments
        </div>
      </div>

      <div className="investment-exchange-step-2-body">
        <Table data={dataTable} />
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
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default InvestmentExchangeStep2;
