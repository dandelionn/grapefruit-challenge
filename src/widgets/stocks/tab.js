import { symbol } from 'prop-types';
import react from 'react';
import classes from './tab.module.css';

const Tab = (props) => {
    console.log("here");
    const procent = -40.7;
    return (
       <div className={classes.tab}>
           <div className={classes.tabContent}>
                <div className={classes.symbolAndPrice}>
                    <div className={classes.symbol}>{"NASDAQ"}</div>
                    <div className={classes.price}>{"5,055.55"}</div>
                </div>
                <div className={classes.procent}>
                    <div className={ procent > 0 ? classes.increase : classes.decrease }>{-40.7}%</div>
                </div>
           </div>
       </div> 
    );
}


export default Tab;