import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tabs, Table, Button } from "../../../components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EditIcon from "@mui/icons-material/Edit";
import { getMonthlyIncome, getTotalAssetsData } from "../../../utils/goals";
import "./styles.scss";

const GoalsCalculatorChart = () => {
  const [chartTitle, setChartTitle] = useState("");
  const [chartValue, setChartValue] = useState("");
  const [chartLegend, setChartLegend] = useState("");
  const [chartSecondLegend, setChartSecondLegend] = useState("");
  const chartRef = useRef(null);
  const navigate = useNavigate();
  const savingAccounts = useSelector((state) => state.savingAccounts);

  const getValues = (tab) => {
    if (tab === "M") {
      setChartTitle(
        "You are projected to have a monthly income goal in retirement of"
      );
      setChartValue(
        `$${Highcharts.numberFormat(
          getMonthlyIncome()[0].y + getMonthlyIncome()[1].y,
          2,
          ".",
          ","
        )}`
      );
      setChartLegend(
        <>
          You are projected to have a monthly income{" "}
          <strong>
            ${Highcharts.numberFormat(getMonthlyIncome()[0].y, 2, ".", ",")}
          </strong>{" "}
          at retirement.
        </>
      );
      setChartSecondLegend(
        <>
          You have a potential monthly income <strong>shortfall</strong> of{" "}
          <strong>
            ${Highcharts.numberFormat(getMonthlyIncome()[1].y, 2, ".", ",")}
          </strong>
          .
        </>
      );
    } else if (tab === "C") {
      setChartTitle("You have set a retirement goal of");
      setChartValue(
        `$${Highcharts.numberFormat(
          getTotalAssetsData()[0].y + getTotalAssetsData()[1].y,
          2,
          ".",
          ","
        )}`
      );
      setChartLegend(
        <>
          You are projected to have{" "}
          <strong>
            ${Highcharts.numberFormat(getTotalAssetsData()[0].y, 2, ".", ",")}
          </strong>{" "}
          at retirement.
        </>
      );
      setChartSecondLegend(
        <>
          You have a potential <strong>shortfall</strong> of{" "}
          <strong>
            ${Highcharts.numberFormat(getTotalAssetsData()[1].y, 2, ".", ",")}
          </strong>
          .
        </>
      );
    }
  };

  const options = {
    chart: {
      type: "pie",
      width: 450,
      height: 450,
      custom: {},
      events: {
        render() {
          const chart = this,
            series = chart.series[0];
          let customLabel = chart.options.chart.custom.label;
          if (!customLabel) {
            customLabel = chart.options.chart.custom.label = chart.renderer
              .label(
                'You are <br/>protected to <br/>meet <br/> <span style="font-size: 25px;line-height: 40px;font-weight: 600;">18%</span><br/>of your goal'
              )
              .css({
                color: "var(--highcharts-neutral-color-100, #000)",
                textAnchor: "middle",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "24px",
              })
              .add();
          }

          const x = series.center[0] + chart.plotLeft,
            y =
              series.center[1] + chart.plotTop - customLabel.attr("height") / 2;

          customLabel.attr({
            x,
            y,
          });
        },
      },
    },
    title: {
      text: "",
    },
    tooltip: {
      valuePrefix: "$",
      valueDecimals: 2,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
          },
          {
            enabled: true,
            distance: -15,
            format: "{point.percentage:.2f}%",
            style: {
              fontSize: "0.9em",
            },
          },
        ],
        showInLegend: true,
      },
      pie: {
        states: {
          hover: {
            halo: {
              size: 0,
            },
          },
        },
      },
    },
    series: [
      {
        name: "",
        colorByPoint: true,
        innerSize: "75%",
        data: [
          {
            name: "Protected Amount",
            y: 3130784.02,
            color: "#005f9e",
          },
          {
            name: "Shortfall Amount",
            y: 13701978.47,
            color: "#00294B",
          },
        ],
      },
    ],
  };

  const tabs = [
    { id: "M", label: "Monthly income" },
    { id: "C", label: "Total assets" },
  ];

  const [data, setData] = useState(getMonthlyIncome());

  useEffect(() => {
    chartRef.current.chart.series[0].setData(data);
  }, [data]);

  useEffect(() => {
    getValues("M");
    setData(getMonthlyIncome());
  }, []);

  const changeChart = (tab) => {
    if (tab === "M") {
      setData(getMonthlyIncome());
    } else if (tab === "C") {
      setData(getTotalAssetsData());
    }
    getValues(tab);
  };

  const buildDataTable = () => {
    const totalBalance = savingAccounts.reduce((total, account) => total + parseFloat(account.balance.replace('$', '').replace(',', '')), 0);
    const totalProtected = savingAccounts.reduce((total, account) => total + parseFloat(account.protected.replace('$', '').replace(',', '')), 0);
    const rows = savingAccounts.map((account) => ({
      columns: [
        {
          content: <div className="saving-account-name"><strong>{account.name}</strong><div className="saving-account-type">{account.type}</div></div>,
          key: "source",
          align: "left",
        },
        {
          content: account.balance,
          key: "balance",
          align: "right",
        },
        {
          content: account.protected,
          key: "protected",
          align: "right",
        },
      ],
    }));

    const footer = [
      {
        content: "Total",
        key: "total",
        align: "left",
      },
      {
        content: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
          totalBalance,
        ),
        key: "total",
        align: "right",
      },
      {
        content: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
          totalProtected,
        ),
        key: "total",
        align: "right",
      },
    ];

    return { rows, footer };
  };

  const { rows, footer } = buildDataTable();
  const totalBalance = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    savingAccounts.reduce((total, account) => total + parseFloat(account.balance.replace('$', '').replace(',', '')), 0)
  );

  const dataTable = {
    title: "Accounts and income sources",
    widgets: [
      <Button size="full" onClick={() => navigate("/saving-accounts")}>
        <EditIcon sx={{ width: "16px", height: "16px" }} />
        Adjustments
      </Button>,
    ],
    headers: [
      {
        content: "Source",
        key: "source",
        align: "left",
      },
      {
        content: "Balance",
        key: "balance",
        align: "right",
      },
      {
        content: "Protected monthly income",
        key: "protected",
        align: "right",
      },
    ],
    rows: rows,
    footer: footer,
  };

  return (
    <div className="goals-calculator-chart-container">
      <div className="goals-calculator-chart-title">My retirement goals</div>

      <Tabs type="button" tabs={tabs} onChange={changeChart} />

      <div className="chart-title-container">
        <div className="chart-text">{chartTitle}</div>
        <div className="chart-value">{chartValue}</div>
      </div>

      <HighchartsReact
        highcharts={Highcharts}
        ref={chartRef}
        options={options}
        containerProps={{
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />

      <div className="legends">
        <div className="legend-item">
          <div
            className="legend-colorbox"
            style={{ background: "#005F9E" }}
          ></div>
          <div className="legend-title">{chartLegend}</div>
        </div>
        <div className="legend-item">
          <div
            className="legend-colorbox"
            style={{ background: "#00294B" }}
          ></div>
          <div className="legend-title">{chartSecondLegend}</div>
        </div>
      </div>

      <div className="review-goals-details">
        <div className="review-goals-details-title">
          Retirement goal details
        </div>
        <div className="review-goals-details-total">
          Total current account balances
          <div className="review-goals-details-total-value">{totalBalance}</div>
        </div>
      </div>

      <Table data={dataTable} />
    </div>
  );
};

export default GoalsCalculatorChart;
