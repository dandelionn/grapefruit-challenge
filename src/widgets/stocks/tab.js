import react, { useState } from 'react';
import classes from './tab.module.css';

const Tab = (props) => {
    const procent = -40.7;

    const getTabClassName = () => {
        return props.selected ? [classes.tab, classes.active].join(' ') : classes.tab;
    }

    const getTabContentClassName = () => {
        return props.noBorder ? [classes.tabContent, classes.noBorderBottom].join(' ') : [classes.tabContent, classes.borderBottom].join(' ');
    }

    return (
       <div className={ getTabClassName() } onClick={props.onClick}>
           <div className={ getTabContentClassName() }>
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