import React, { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./styles.scss";

const Results = () => {

  const chartRef = useRef(null);

  const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
      title: {
        text: '<strong>Rate of Return Time Frame</strong>'
      },
        categories: ["YTD", "1 YEAR"]
    },
    plotOptions: {
      column: {
        minPointLength: 3,
      }
    },
    legend: {
      symbolRadius: 0,
      symbolHeight: 12,
      symbolWidth: 12,
      enabled: false
    },
    yAxis: {
        title: {
            text: '<strong>Rate of Return (%)</strong>'
        },
        labels: {
          formatter: function () {
            return this.axis.defaultLabelFormatter.call(this) + '%';
          }
      },
    },
    series: [{
        name: '',
        data: [7.3, 10.12],
        color: 'rgb(0, 41, 75)',
    }],
    tooltip: {
     valueSuffix: '%',
     formatter: function() {
      return `<b>${this.x}</b>
              <br/>
              <b>${this.x === 'Year to Date' ? '06/10/2025 - 08/31/2025' : '09/30/2024 - 08/31/2025'}</b>
              <br/>
              <b>${Highcharts.numberFormat(this.y, 2)}%</b>`;
    }
  }};


  return (
    <div className="portfolio-results-container">
      <div className="portfolio-results-header">Investment results</div>

      <div className="portfolio-results-content">
        <div className="portfolio-results-totals">
          <div className="portfolio-results-total">
            <div className="portfolio-results-total-label">Year-to-date (YTD)<br/>06/10/2025 - 08/31/2025</div>
            <div className="portfolio-results-total-value">$7.3%</div>
          </div>
          <div className="portfolio-results-total">
            <div className="portfolio-results-total-label">1 Year total<br/>09/30/2024 - 08/31/2025</div>
            <div className="portfolio-results-total-value">$10.12%</div>
          </div>
        </div>
        <div className="portfolio-results-tabs">

          <div className="portfolio-results-title">
            Portfolio performance
          </div>

          <div className="portfolio-results-text">
            Your personal rate of return is one measure of whether your investment strategy is on track. Keep in mind, however, that investment should have a long-term focus. Your financial professional can help put your rate of return in perspective.
            <br/>
            <br/>
            Learn more about <a href="https://betaretirement.financialtrans.com/cg/" target="_blank" rel="noopener noreferrer">how your personal rate of return is calculated.</a>
          </div>

          <div className="portfolio-results-chart">
            <HighchartsReact
              highcharts={Highcharts}
              ref={chartRef}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
