import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "../../../components";
import "./styles.scss";

const Withdrawals = (props) => {
  const { showOnlyInfo } = props;
  const navigate = useNavigate();

  const dataTable = {
    headers: [
        {
            content: "Type",
            key: "type",
            align: "left",
            height: "40px",
        },
        {
            content: "Actions",
            key: "actions",
            align: "left",
            height: "40px",
        },
        {
            content: "Id",
            key: "id",
            align: "left",
            height: "40px",
        },
        {
            content: "Date",
            key: "date",
            align: "left",
            height: "40px",
        },
        {
            content: "Amount ",
            key: "amountEmployed",
            align: "left",
            height: "40px",
        },
        {
            content: "Status",
            key: "status",
            align: "left",
            height: "40px",
        },
    ],
};

  const dataTableAmountEmployed = {
    title: "While employed",
    rows: [
      {
        columns: [
          {
            content: (
              <>
                Hardship Withdrawal
                <br /> You are requesting an emergency withdrawal due to a
                financial hardship.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: (
              <>
                Age 59 1/2
                <br /> You are old enough to withdraw money from your retirement
                account.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: (
              <>
                After Tax
                <br /> You are requesting an after-tax withdrawal.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: <>Required Minimum Distribution.</>,
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: (
              <>
                Early Distribution (under 59 1/2)
                <br /> You are requesting to make a withdrawal before reaching
                age 1/2.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: <>Transfer of Assets.</>,
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: <>Disaster Relief Distribution.</>,
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: (
              <>
                Retirement Elig In-Service Withdrawal
                <br /> 
                You are requesting a withdrawal due to retirement.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: <>Qualified Birth Or Adoption.</>,
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: <>Emergency Expense.</>,
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: <>Domestic Abuse.</>,
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
    ],
  };

  const dataTableAmountNoEmployed = {
    title: "No longer employed",
    rows: [
      {
        columns: [
          {
            content: (
              <>
                Termination Of Employment
                <br /> You are requesting a withdrawal due to termination of employment.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: (
              <>
               Retirement
                <br /> You are requesting a withdrawal due to retirement.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
      {
        columns: [
          {
            content: (
              <>
                Disability Payment
                <br /> You are requesting a withdrawal due to a disability before reaching age 59 1/2.
              </>
            ),
            key: "type",
            align: "left",
            height: "45px",
          },
          {
            content: <strong>$45,045.78</strong>,
            key: "actions",
            align: "right",
            height: "45px",
          },
        ],
      },
    ],
  };

  return (
    <div className="withdrawals-container">
      {showOnlyInfo && (
        <div className="withdrawals-card">
          <div className="withdrawals-header">
            Withdrawal information
            <Button size="small" onClick={() => navigate("/withdrawal-request")}>Request a withdrawal</Button>
          </div>
          <div className="withdrawals-content">
            <p className="info">
              If the status of your request below is “Under Review” or “Pending
              Review”, this indicates that your employer and/or plan
              administrator are reviewing your request for approval. This
              process may take up to 30 days. For more information, please
              contact your employer.
            </p>
            <Table data={dataTable} />
          </div>
        </div>
      )}

      {!showOnlyInfo && (
        <div className="withdrawals-card">
          <div className="withdrawals-header">Available withdrawal amounts</div>
          <div className="withdrawals-content">
            <Table data={dataTableAmountEmployed} />
            <Table data={dataTableAmountNoEmployed} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdrawals;
