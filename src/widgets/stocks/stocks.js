import react, {useState, useEffect } from 'react';
import classes from './stocks.module.css';
import Tab from './tab';

import * as faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  tension: 0.4,
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis',
    },
    legend: {
      display: false
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false, 
      }
    },
    y: {
      type: 'linear',
      display: false,
      position: 'left',
      grid: {
        drawBorder: false, 
        display: false,
        drawOnChartArea: false,
      },
    },
    y1: {
      type: 'linear' ,
      display: true,
      position: 'right',
      grid: {
        drawBorder: false, 
        display: false,
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
const values = faker.datatype.number({ min: 0, max: 1000 });

export const testData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(212, 202, 202)',
      pointRadius: [ 13, '', ''],
      pointBorderColor: "rgba(249,99,50,0.2)",
      pointBorderWidth: 26,
      yAxisID: 'y',
    },
  ],
};

const Stocks = (props) => {
  const [data, setData] = useState(props.src)

  useEffect(() => {
    if(!data) {
      props.load();
    }
  }, [props.src]);

  return data ? (
    <div className={classes.stocks}>
        <div className={classes.stockListWrapper}>
          <div className={classes.stockList}>
            {
              data.map((item, index) => {
                return <Tab key={index} name={item.symbol} currentValue={item.priceData}/> 
              })
            }
          </div>
        </div>
        <div className={classes.chartSection}>
          <div className={classes.chart}>
              <Line data={testData} options={options}/>
          </div>
        </div>
    </div>
  ) : null;
};

export default Stocks;