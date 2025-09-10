import React from "react";
import { Table, Button, DotMenu } from "../../../components";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import "./styles.scss";

const BalancesTable = () => {
  const options1 = [
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

  const options2 = [
    {
      content: "Fund details",
      key: "option1",
      url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0022122&type=details",
    },
    {
      content: "Prospectus",
      key: "option2",
      url: "https://www.capitalgroup.com/retirement/participant/servlet/FundLink?fundId=0022122&cusip=999922122&type=prospectus",
    },
  ];

  const tableData = {
    title: "Investment details",
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
        content: "Assets class",
        key: "assetsClass",
        align: "left",
      },
      {
        content: "Units",
        key: "units",
        align: "right",
      },
      {
        content: "Price",
        key: "price",
        align: "right",
      },
      {
        content: "Balance",
        key: "balance",
        align: "right",
      },
      {
        content: "QTD change",
        key: "qtdChange",
        align: "right",
      },
      {
        content: "YTD change",
        key: "ytdChange",
        align: "right",
      },
    ],
    rows: [
      {
        columns: [
          {
            content: "Af U.S. Government Money Market-R2",
            key: "name",
            align: "left",
          },
          {
            content: <DotMenu options={options1} />,
            key: "docs",
            align: "center",
          },
          {
            content: "Capital Preservation",
            key: "assetsClass",
            align: "left",
          },
          {
            content: "41,035.300",
            key: "units",
            align: "right",
          },
          {
            content: "$1.000",
            key: "price",
            align: "right",
          },
          {
            content: "$41,035.30",
            key: "balance",
            align: "right",
          },
          {
            content: (
              <>
                <SouthIcon
                  sx={{ color: "#dc3545", height: "20px", width: "20px", position: "relative", top: "4px" }}
                />{" "}
                $4,590.47
              </>
            ),
            key: "qtdChange",
            align: "right",
          },
          {
            content: (
              <>
                <SouthIcon
                  sx={{ color: "#dc3545", height: "20px", width: "20px", position: "relative", top: "4px" }}
                />{" "}
                $5,590.47
              </>
            ),
            key: "ytdChange",
            align: "right",
          },
        ],
      },
      {
        columns: [
          {
            content: "Af Global Insight Fund-R2",
            key: "name",
            align: "left",
          },
          {
            content: <DotMenu options={options2} />,
            key: "docs",
            align: "center",
          },
          {
            content: "Capital Preservation",
            key: "assetsClass",
            align: "left",
          },
          {
            content: "176.750",
            key: "units",
            align: "right",
          },
          {
            content: "$26.780",
            key: "price",
            align: "right",
          },
          {
            content: "$4,733.37",
            key: "balance",
            align: "right",
          },
          {
            content: (
              <>
                <NorthIcon
                  sx={{ color: "#28a745", height: "20px", width: "20px", position: "relative", top: "4px" }}
                />{" "}
                $4,733.37
              </>
            ),
            key: "qtdChange",
            align: "right",
          },
          {
            content: (
              <>
                <NorthIcon
                  sx={{ color: "#28a745", height: "20px", width: "20px", position: "relative", top: "4px" }}
                />{" "}
                $4,733.37
              </>
            ),
            key: "ytdChange",
            align: "right",
          },
        ],
      },
    ],
    footer: [
      {
        content: "Total",
        key: "total",
        align: "left",
        colspan: 5,
      },
      {
        content: "$45,768.67",
        key: "balance",
        align: "right",
      },
      {
        content: (
          <>
            <NorthIcon
              sx={{ color: "#28a745", height: "20px", width: "20px", position: "relative", top: "4px" }}
            />
           $142.90
          </>
        ),
        key: "qtdChange",
        align: "right",
      },
      {
        content: (
          <>
            <SouthIcon
              sx={{ color: "#dc3545", height: "20px", width: "20px", position: "relative", top: "4px" }}
            />
            $857.10
          </>
        ),
        key: "ytdChange",
        align: "right",
      },
    ],
  };

  return (
    <div className="portfolio-current-table-container">
      <Table data={tableData} />

      <div className="portfolio-current-table-button-container">
        <Button variant="primary">Change investments</Button>
      </div>

      <div className="portfolio-current-table-footer">
        Any vested balances and percentages shown are based on information
        provided to Capital Group and may not reflect the most current data.
        Please check with your employer for the most recent information.
        <br />
        <br />
        This page shows limited summary information only. Please refer to the
        funds’ fact sheets and other offering and disclosure documents for a
        complete summary of all fees, expenses, financial highlights, investment
        objectives and strategies, performance information, transfer
        restrictions, and risks.
      </div>
    </div>
  );
};

export default BalancesTable;
