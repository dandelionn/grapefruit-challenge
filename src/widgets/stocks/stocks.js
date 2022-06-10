import react, {useState, useEffect } from 'react';
import classes from './stocks.module.css';
import StockList from './stock-list';
import StockDetails from './stock-details';
import Chart from './chart';

const stockDetailsData = {
    symbol: 'NASDAQ',
    value: '127.33',
    date: 'Oct 12 2:16 PM EDT',
    low: '126.88',
    high: '127.61',
    open: '127.48',
    marketCap: '735.34B',
    dividentYield: '1.63%',
    PERatio: '15.73'
}


const Stocks = (props) => {
  const [data, setData] = useState(props.src)
  console.log("data data data", data);
  useEffect(() => {
    if(!data) {
      props.load();
    }
  }, [props.src]);

  return data ? (
    <div className={classes.stocks}>
        <StockList data={data}/>
        <div className={classes.chartSection}>
          {<StockDetails data={stockDetailsData}/>}
          {<Chart />}
        </div>
    </div>
  ) : null;
};

export default Stocks;