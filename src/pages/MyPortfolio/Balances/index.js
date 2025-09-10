import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Tabs } from "../../../components";
import {
  getDataAssetClass,
  getDataContributionTypes,
  getDataInvestments,
} from "../../../utils/balances";
import "./styles.scss";

const Balances = () => {
  const options = {
    chart: {
      type: "pie",
      width: 238,
      height: 238,
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.2f}%</b>",
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
    },
    series: [
      {
        name: "Investments",
        colorByPoint: true,
        innerSize: "65%",
      },
    ],
  };

  const tabs = [
    { id: "I", label: "Investments" },
    { id: "C", label: "Contibution types" },
    { id: "A", label: "Asset class" },
  ];

  const [data, setData] = useState(getDataInvestments());
  const chartRef = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    chartRef.current.chart.series[0].setData(data);
  }, [data]);

  const changeChart = (tab) => {
    setActiveTab(tab);
    if (tab === "I") {
      setData(getDataInvestments());
    } else if (tab === "C") {
      setData(getDataContributionTypes());
    } else if (tab === "A") {
      setData(getDataAssetClass());
    }
  };

  return (
    <div className="portfolio-balances-container">
      <div className="portfolio-balances-header">Balances as of 09/05/2025</div>

      <div className="portfolio-balances-content">
        <div className="portfolio-balances-totals">
          <div className="portfolio-balances-total">
            <div className="portfolio-balances-total-label">Total balance</div>
            <div className="portfolio-balances-total-value">$45,724.47</div>
          </div>
          <div className="portfolio-balances-total">
            <div className="portfolio-balances-total-label">Vested balance</div>
            <div className="portfolio-balances-total-value">$45,124.24</div>
          </div>
        </div>
        <div className="portfolio-balances-tabs">
          <div className="cg-tab-container">
            <Tabs type="button" tabs={tabs} onChange={changeChart} />
          </div>

          <div className="portfolio-balances-title">
            {tabs.find((tab) => tab.id === activeTab).label}
          </div>
          <div className="portfolio-balances-chart">
            <HighchartsReact
              highcharts={Highcharts}
              ref={chartRef}
              options={options}
              containerProps={{
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "238px",
                },
              }}
            />
            <div className="legends">
              {data.map((item, index) => (
                <div className="legend-item" key={index}>
                  <div
                    className="legend-colorbox"
                    style={{ background: item.color }}
                  ></div>
                  <div className="legend-title">{item.name}</div>
                  <div className="legend-value">{item.y}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
