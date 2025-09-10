/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Table } from "../../../components";
import PrintIcon from "@mui/icons-material/Print";
import "./styles.scss";

const ContributionsDetails = () => {
  const tableDataHeader = {
    headers: [
      {
        content: "Contribution type",
        key: "name",
        align: "left",
        height: "32px",
      },
    ],
  };


  const tableDataScrollerHeader = {
    headers: [
      {
        content: <div className="table-header-blue">Last Contribution Date</div>,
        key: "name",
        align: "left",
        width: "16.66%",
      },
      {
        content: <div className="table-header-blue">Last Contribution Amount</div>,
        key: "name",
        align: "right",
        width: "16.66%",
      },
      {
        content: <div className="table-header-blue">QTD Contributions</div>,
        key: "name",
        align: "right",
        width: "16.66%",
      },
      {
        content: <div className="table-header-blue">YTD Contributions</div>,
        key: "name",
        align: "right",
        width: "16.66%",
      },
      {
        content: <div className="table-header-blue">Gross Contributions to Date</div>,
        key: "name",
        align: "right",
        width: "16.66%",
      },
      {
        content: <div className="table-header-blue">Net Contributions to Date</div>,
        key: "name",
        align: "right",
        width: "16.66%",
      },
    ],
  };

  const tableDataEmployee = {
    headers: [
      {
        content: "Employee",
        key: "name",
        align: "left",
      },
    ],
    rows: [
      {
        columns: [
          {
            content: "Employee Elective Deferral",
            key: "name",
            align: "left",
          },
        ],
      },
    ],
    footer: [
      {
        content: "Total Employee",
        key: "total",
        align: "left",
        colspan: 5,
      },
    ],
  };

  const tableDataScrollerEmployee = {
    headers: [
      {
        content: <div>&nbsp;</div>,
        key: "name",
        align: "left",
        colspan: 6,
      },
    ],
    rows: [
      {
        columns: [
          {
            content: "03/11/2024",
            key: "name",
            align: "left",
            width: "16.66%",
          },
          {
            content: "$50,000.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },
          {
            content: "$0.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },  
          {
            content: "$0.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },
          {
            content: "$50,080.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },
          {
            content: "$43,192.55",
            key: "name",
            align: "right",
            width: "16.66%",
          },
        ],
      },
    ],
    footer: [
      {
        content: "$0.00",
        key: "name",
        align: "right",
        colspan: 3,
      },  
      {
        content: "$0.00",
        key: "name",
        align: "right",
      },
      {
        content: "$50,080.00",
        key: "name",
        align: "right",
      },
      {
        content: "$43,192.55",
        key: "name",
        align: "right",
      },
    ],
  };

  const tableDataEmployer = {
    headers: [
      {
        content: "Employer",
        key: "name",
        align: "left",
      },
    ],
    rows: [
      {
        columns: [
          {
            content: "Employer Matrfhing",
            key: "name",
            align: "left",
          },
        ],
      },
    ],
    footer: [
      {
        content: "Total Employer",
        key: "total",
        align: "left",
        colspan: 5,
      },
    ],
  };


  const tableDataScrollerEmployer = {
    headers: [
      {
        content: <div>&nbsp;</div>,
        key: "name",
        align: "left",
        colspan: 6,
      },
    ],
    rows: [
      {
        columns: [
          {
            content: "03/11/2024",
            key: "name",
            align: "left",
            width: "16.66%",
          },
          {
            content: "$1,000.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },
          {
            content: "$0.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },  
          {
            content: "$0.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },
          {
            content: "$1,080.00",
            key: "name",
            align: "right",
            width: "16.66%",
          },
          {
            content: "$972.47",
            key: "name",
            align: "right",
            width: "16.66%",
          },
        ],
      },
    ],
    footer: [
      {
        content: "$0.00",
        key: "name",
        align: "right",
        colspan: 3,
      },  
      {
        content: "$0.00",
        key: "name",
        align: "right",
      },
      {
        content: "$1,080.00",
        key: "name",
        align: "right",
      },
      {
        content: "$972.47",
        key: "name",
        align: "right",
      },
    ],
  };

  const tableDataTotal = {
    headers: [
      {
        content: "Total",
        key: "name",
        align: "left",
      },
    ],
  };

  const tableDataScrollerTotal = {
    headers: [
      {
        content: "$0.00",
        key: "name",
        align: "right",
        colspan: 3,
      },
      {
        content: "$0.00",
        key: "name",
        align: "right",
        width: "16.66%",
      },
      {
        content: "$51,080.00",
        key: "name",
        align: "right",
        width: "16.66%",
      },
      {
        content: "$44,165.02",
        key: "name",
        align: "right",
        width: "16.66%",
      },
    ],
  };

  return (
    <div className="contributions-details-container">
      <div className="contributions-details-header">Contributions details</div>
      <div className="contributions-details-bullets">
        <div className="contributions-details-bullet">
          <div className="contributions-details-bullet-content">
            <div className="contributions-details-bullet-title">
              Total employee and employer contributions since initial investment
            </div>
            <div className="contributions-details-bullet-value">$51,080.00</div>
          </div>
        </div>
        <div className="contributions-details-bullet">
          <div className="contributions-details-bullet-content">
            <div className="contributions-details-bullet-title">
              Total employee contributions since initial investment
            </div>
            <div className="contributions-details-bullet-value">$50,080.00</div>
          </div>
        </div>
        <div className="contributions-details-bullet">
          <div className="contributions-details-bullet-content">
            <div className="contributions-details-bullet-title">
              Total employee YTD contributions
            </div>
            <div className="contributions-details-bullet-value">$0.00</div>
          </div>
        </div>
      </div>

      <div className="contributions-details-print">
        <a href="#">
          <PrintIcon
            sx={{
              width: 16,
              height: 16,
            }}
          />
          Print table
        </a>
      </div>

      <div className="contributions-details-table-container">
        <div className="contributions-details-fixed-table">
          <Table data={tableDataHeader} />
          <Table data={tableDataEmployee} />
          <Table data={tableDataEmployer} />
          <Table data={tableDataTotal} />
        </div>  
        <div className="contributions-details-scrolled-table">
          <Table data={tableDataScrollerHeader} />
          <Table data={tableDataScrollerEmployee} />
          <Table data={tableDataScrollerEmployer} />
          <Table data={tableDataScrollerTotal} />
        </div>  
      </div>

      <div className="contributions-details-footer">
        Totals reflect contributions into your account posted by payroll date.
      </div>

      <div className="contributions-details-button-container">
        <Button variant="primary">Change contributions</Button>
      </div>
    </div>
  );
};

export default ContributionsDetails;
