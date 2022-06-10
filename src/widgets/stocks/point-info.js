import classes from './point-info.module.css';


const PointInfo = (props) => {
    return <div className={classes.current}>
                <div className={classes.symbol}>{props.data.symbol}</div>
                <div className={classes.value}>{props.data.value}</div>
                <div className={classes.date}>{props.data.date}</div>
            </div>;
}

export default PointInfo