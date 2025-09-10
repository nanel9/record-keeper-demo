import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  getDataInvestments,
} from "../../../utils/balances";
import "./styles.scss";

const Current = () => {
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

  const data = getDataInvestments();
  const chartRef = useRef(null);

  useEffect(() => {
    chartRef.current.chart.series[0].setData(data);
  }, [data]);



  return (
    <div className="portfolio-current-container">
      <div className="portfolio-current-header">Current Elections</div>

      <div className="portfolio-current-content">
        
        <div className="portfolio-current-tabs">

          <div className="portfolio-current-chart">
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

export default Current;
