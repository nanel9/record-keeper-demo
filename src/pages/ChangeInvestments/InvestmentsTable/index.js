import React from "react";
import { InputText, Table, DotMenu  } from "../../../components";
import "./styles.scss";
import investments from "./investments";

const InvestmentsTable = () => {

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


    const rows = investments.map((investment) => {
      return {
        columns: [
          {
            content: investment.name,
            key: "name",
            align: "left",
          },
          {
            content: <DotMenu options={options} />,
            key: "docs",
            align: "center",
          },
          {
            content: investment.assetClass,
            key: "assetClass",
            align: "left",
          },
          {
            content: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(investment.currentBalance),
            key: "currentBalance",
            align: "right",
          },
          {
            content: investment.currentUnits,
            key: "currentUnits",
            align: "right",
          },
          {
            content: <InputText label="" type="number" prefix="$" />,
            key: "amountToExchange",
            align: "right",
          },
        ]
      }
    })

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
        rows: rows,
      }


    return (
        <div className="investments-table">
            <Table data={dataTable} />
        </div>
    );
};

export default InvestmentsTable;