import react, { useEffect, useState } from 'react';
import classes from './weather.module.css';
import IconWeather from '../../assets/icons/icon-weather.svg';

const Weather = (props) => {
  const [data, setData] = useState(props.src)
  
  useEffect(() => {
    if(!data) {
      props.load();
    }
  }, [props.src]);

  return data ? (
    <div className={classes.weather}>
        <div className={classes.description}>
          <div className={classes.logo}>
            <img src={IconWeather} alt="Weather"/>
          </div>
          <div className={classes.text}>
            <div className={classes.decription}>{data.description}</div>
            <div>{data.location}</div>
          </div>
        </div>
        <div className={classes.dayWeather}>
          <div className={classes.dayMenu}>
            <div>Today</div>
            <div>Tomorrow</div>
            <div>Week</div>
          </div>       
          <div className={classes.currentTemp}>
            <div>{data.current}</div>
            <div>&#176;</div>
          </div>
        </div>
        <div className={classes.hourlyWeather}>
            { 
              data.hourly.map((item, index) => {
                return (
                  <div key={index} className={classes.hourTemperature}>
                    <div className={classes.hourTemperatureValue}>{item.temperature}&#176;</div>
                    <div className={classes.hourValue}>{item.hour}</div>
                </div>
                );
              })
            }
        </div>
    </div>
  ) : null;
};

export default Weather;