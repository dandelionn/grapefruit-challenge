import react from 'react';
import classes from './stocks.module.css';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Stocks = (props) => {
  return (
    <div className={classes.stocks}>
        <div className={classes.stockList}>

        </div>
        <div className={classes.chart}>
          <ResponsiveContainer width="99%">
            <LineChart data={data} >
              <defs>
                <filter id="shadow" >
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="gray" floodOpacity="1"/>
                    <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="black" floodOpacity="1"/>
                    <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="black" floodOpacity="1"/>
                    <feDropShadow dx="0" dy="8" stdDeviation="20" floodColor="black" floodOpacity="1"/>
                </filter>
            </defs>
              <Line type="monotone" dataKey="uv" stroke="#d1cdcd" filter="url(#shadow)" strokeWidth={1} dot={false} //style={{filter: `drop-shadow(0px 10px 8px #000000)`}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};

export default Stocks;