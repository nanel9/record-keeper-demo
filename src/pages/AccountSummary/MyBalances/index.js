import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Tabs, Button } from '../../../components';
import "./styles.scss";
import { getDataAssetClass, getDataContributionTypes, getDataInvestments } from '../../../utils/balances';


const MyBalances = () => {

  const navigate = useNavigate();

  const options = {
    chart: {
        type: 'pie',    
        width: 230,
        height: 230, 
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
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
        name: 'Investments',
        colorByPoint: true,
        innerSize: '65%',
    }]
  };

  const [data, setData] = useState(getDataInvestments());
  const chartRef = useRef(null);
  

  useEffect(() => {
    chartRef.current.chart.series[0].setData(data);
  }, [data]);

  const changeChart = (tab) => {
    if (tab === 'I') {
      setData(getDataInvestments());
    } else if (tab === 'C') {
      setData(getDataContributionTypes());
    } else if (tab === 'A') {
      setData(getDataAssetClass());
    }
  };

  const tabs = [
    { id: 'I', label: 'Investments' },
    { id: 'C', label: 'Contibution types' },
    { id: 'A', label: 'Asset class' },
  ];

    return (
      <div className="my-balances-container">
        <h4 className="header">My balances</h4>

        <div className="cg-tab-container">
          <Tabs type="button" tabs={tabs} onChange={changeChart}/>
        </div>

        <HighchartsReact
          highcharts={Highcharts}
          ref={chartRef}
          options={options}
          containerProps={{
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px'
            }
          }}
        />
        <div className="legends">
          {data.map((item, index) => (
            <div className="legend-item" key={index}>
              <div className="legend-colorbox" style={{background: item.color}}></div>
              <div className="legend-title">{item.name}</div>
              <div className="legend-value">{item.y}%</div>
            </div>
          ))}
        </div>
        <Button type="button" onClick={() => navigate("/my-portfolio")}> 
              View my portfolio
        </Button>
      </div>
    );
};

export default MyBalances;
