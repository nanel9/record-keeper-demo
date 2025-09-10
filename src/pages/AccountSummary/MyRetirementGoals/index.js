/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Button } from "../../../components";
import "./styles.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MyRetirementGoals = () => {

  const [chartTitle, setChartTitle] = useState("");
  const [chartValue, setChartValue] = useState("");
  const [chartLegend, setChartLegend] = useState("");
  const chartRef = useRef(null);

  const navigate = useNavigate();

  const getValues = (tab) => {
    if(tab === "M") { 
      setChartTitle("You have a monthly income goal in retirement of");
      setChartValue("$3,529.60");
      setChartLegend(<>You are projected to have a monthly income <strong>$3,555.75</strong> at retirement.</>);
    } else if(tab === "C") {
      setChartTitle("You have set a retirement goal of");
      setChartValue("$1,622,332.94");
      setChartLegend(<>You are projected to have <strong>$1,622,332.94</strong> at retirement.</>);
    }
  };

  const options = {
    chart: {
      type: 'pie',
      width: 301,
      height: 296, 
      custom: {},
      events: {
          render() {
              const chart = this,
                  series = chart.series[0];
              let customLabel = chart.options.chart.custom.label;
              if (!customLabel) {
                  customLabel = chart.options.chart.custom.label =
                      chart.renderer.label(
                          'You are <br/>protected to <br/>meet <br/> <span style="font-size: 25px;line-height: 40px;font-weight: 600;">2687%</span><br/>of your goal'
                      )
                      .css({
                          color:
                              'var(--highcharts-neutral-color-100, #000)',
                          textAnchor: 'middle',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '24px'
                      })
                      .add();
              }

              const x = series.center[0] + chart.plotLeft,
                  y = series.center[1] + chart.plotTop -
                  (customLabel.attr('height') / 2);

              customLabel.attr({
                  x,
                  y
              });
             
          }
      },
    },
    title: {
      text: ''
    },
    tooltip: {
        // eslint-disable-next-line no-template-curly-in-string
        pointFormat: '<b>${point.y:.2f}</b>'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
       pie: {
        states: {
          hover: {
            halo: {
              size: 0
            }
          }
        }
       },

       series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 8,
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -15,
                format: '{point.percentage:.2f}%',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: true
        }
    },
    series: [{  
      innerSize: 200,
      size: 250,
      data: [
         {
          name: "Protected Amount",
          y: 3555.75,
          color: "rgb(0, 41, 75)",
        },
      ]
    }, {
      innerSize: 150,
      size: 200,
      data: [
        {
          name: "Surplus Amount",
          y: 3555.75,
          color: "rgb(0, 156, 220)",
        },
      ]
    }]
  };

  const tabs = [
    { id: "M", label: "Monthly income" },
    { id: "C", label: "Total assets" },
  ];

  useEffect(() => {
    getValues("M");
  }, []);

  const changeChart = (tab) => {
    getValues(tab);
  };

  return (
    <div className="my-retirement-goals-container">
      <h4 className="header">My retirement goals</h4>

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
            height: "296px",
          },
        }}
      />

      <div className="legends">
          <div className="legend-item">
            <div
              className="legend-colorbox"
              style={{ background: "rgb(0, 41, 75)" }}
            ></div>
            <div className="legend-title">{chartLegend}</div>
          </div>
          <div className="legend-item">
            <div
              className="legend-colorbox"
              style={{ background: "rgb(0, 156, 220)" }}
            ></div>
            <div className="legend-title">You have a potential <strong>surplus</strong></div>
          </div>
        
      </div>

      <div className="review-goals-link">
        <a onClick={() => navigate("/goals-calculator")}>Review and update your goals here</a>
      </div>

      <div className="cg-button-container">
        <Button onClick={() => navigate("/contributions")}>
          Increase contributions
        </Button>

        <Button onClick={() => navigate("/my-portfolio")}>
          View my portfolio
        </Button>
      </div>
    </div>
  );
};

export default MyRetirementGoals;
