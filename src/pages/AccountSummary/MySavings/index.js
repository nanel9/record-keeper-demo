import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import classNames from "classnames";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "./styles.scss";

const MySavings = () => {

  const navigate = useNavigate();

  const timelapses = [
    { id: "3", label: "3M" },
    { id: "6", label: "6M" },
    { id: "12", label: "YTD" },
  ];
    const chartRef = useRef(null);
    const [activeTab, setActiveTab] = useState(timelapses[0].id);

    const getData = function(months) {

        const finalMonth = new Date().getMonth();
        const initialMonth = finalMonth - months;

        const values = [{'Jan 25': 46625.77}, {'Feb 25': 46625.77}, {'Mar 25': 46625.77}, {'Apr 25': 46625.77}, {'May 25': 46625.77}, {'Jun 25': 45625.77}, {'Jul 25': 45634.54}, {'Aug 25': 45717.77}, {'Sep 25': 45678.77}, {'Oct 25': 45717.77}];
        const monthsArray = [];
        for (let i = Math.max(0, initialMonth + 1); i <= finalMonth; i++) {
            monthsArray.push(values[i]);
        }

        return monthsArray;
    };

  const options = {
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      xAxis: {
          categories: getData(activeTab).map(item => Object.keys(item)[0])
      },
      legend: {
        symbolRadius: 0,
        symbolHeight: 12,
        symbolWidth: 12
      },
      yAxis: {
          title: {
              text: ''
          },
          labels: {
            formatter: function () {
              return "$" + this.axis.defaultLabelFormatter.call(this);
            }
        },
      },
      series: [{
          name: 'ABC COMPANY "DRPP ONLY" - 401K',
          data: getData(activeTab).map(item => item[Object.keys(item)[0]]),
          color: 'rgb(0, 41, 75)',
      }],
      tooltip: {
       valuePrefix: '$',
      }
    };


  const selectTimelapse = (timelapse) => {
    setActiveTab(timelapse.id);
  };
    

  return (
    <div className="my-savings-container">
      <h4 className="header">
        My savings to date

        <div className="timelapses">
          {timelapses.map((timelapse) => (
            <span key={timelapse.id} className={classNames("timelapse", { active: activeTab === timelapse.id })} onClick={() => selectTimelapse(timelapse)}>{timelapse.label}</span>
          ))}
        </div>
      
      </h4>


      <HighchartsReact
        highcharts={Highcharts}
        ref={chartRef}
        options={options}
      />

      <Button onClick={() => navigate("/my-portfolio")}> 
        View my portfolio
      </Button>

    </div>
  );
};

export default MySavings;

