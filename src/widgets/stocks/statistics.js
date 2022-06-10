import react, { useState, useEffect } from './';
import classes from './statistics.module.css';

const Statistics = ({data:{low, high, open, marketCap, dividentYield, PERatio}}) => {
    return (
        <div className={classes.statistics}>
            <div className={classes.data}>
                <div>
                    <div>Low</div>
                    <div>High</div>
                    <div>Open</div>
                </div>
                <div>
                    <div>{low}</div>
                    <div>{high}</div>
                    <div>{open}</div>
                </div>
            </div>
            <div className={classes.data}>
                <div>
                    <div>Market cap</div>
                    <div>Divident yield</div>
                    <div>P/E ratio(ttm)</div>
                </div>
                <div>
                    <div>{marketCap}</div>
                    <div>{dividentYield}</div>
                    <div>{PERatio}</div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;