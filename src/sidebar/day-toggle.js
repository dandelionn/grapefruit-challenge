import { useState } from 'react';
import classes from './day-toggle.module.css';

const DayToggle = (props) => {
    return (
        <div className={classes.dayToggle}>
            <div className={classes.dayName}>{props.name}</div>
            <div className={classes.toggle}>
                <label className={classes.switch}>
                    <input type="checkbox" checked={props.value} onClick={props.onChange}/>
                    <span className={classes.slider}></span>
                </label>
            </div>
        </div>
    );
}

export default DayToggle;
