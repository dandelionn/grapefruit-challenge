import react, { useState, useEffect } from 'react';
import classes from './stock-details.module.css';
import Statistics from './statistics';
import PointInfo from './point-info';
import IconGraph from '../../assets/icons/icon-graph.svg';

const StockDetails = ({data:{symbol, value, date, low, high, open, marketCap, dividentYield, PERatio}}) => {
    return (
        <div className={classes.stockDetails}>
            <PointInfo data={{symbol, value, date}} />
            <Statistics data={{low, high, open, marketCap, dividentYield, PERatio}} />
            <div className={classes.buttons}>
                <div className={classes.buttonInterval}>
                     <img src={IconGraph} alt="Image"/> 
                     <div>1 Year</div>
                </div>
                <div className={classes.buttonDots}>
                   {/* <img src={IconDot} alt="Image"/> */}
                </div>
            </div>
        </div>
    );
}

export default StockDetails;