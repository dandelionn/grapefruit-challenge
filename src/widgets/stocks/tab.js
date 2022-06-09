import { symbol } from 'prop-types';
import react, { useState } from 'react';
import classes from './tab.module.css';

const Tab = (props) => {
    const [active, setActive] = useState(false);
    console.log("here");
    const procent = -40.7;

    const handleClick = () => {
        setActive(!active);
    }

    return (
       <div className={active? [classes.tab, classes.active].join(' ') : classes.tab} onClick={handleClick}>
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