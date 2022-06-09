import classes from './notifications.module.css';
import DayToggle from './day-toggle';

import { useState } from 'react';

const defaultDailyValues = [
    { day: 'Monday', value: false } ,
    { day: 'Tuesday', value: true },
    { day: 'Wednesday', value: false },
    { day: 'Thursday', value: true },
    { day: 'Friday', value: false },
    { day: 'Saturday', value: true },
    { day: 'Sunday', value: false },
];

const Notifications = (props) => {
    const [ dailyValues, setDailyValues ] = useState(defaultDailyValues);
    
    const onChange = (day) => {
        const items = dailyValues.slice();
        const item = items.find(item => item.day === day);
        item.value = !item.value;
        setDailyValues(items);
    }

    return (
        <div className={classes.notifications}>
            <div className={classes.title}>Email Notifications</div>
            <div className={classes.daysListWrapper}>
                <div className={classes.daysList}>
                    { 
                        dailyValues.map((item) => {
                            return <DayToggle name={item.day} day={item.name} value={item.value} onChange={() => onChange(item.day)} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Notifications;