import wmoCodes from "./wmo-codes";
const API_HOST = 'https://api.open-meteo.com/v1/';

const location = {
    NewYork : {
        lon: 33.44,
        lat: -94.04
    },
    Brasov: {
      lon:25.601198,
      lat: 45.657974
    }
}

const url = `${API_HOST}forecast?latitude=${location.Brasov.lon}&longitude=${location.Brasov.lat}&hourly=temperature_2m&current_weather=true`; // &daily=temperature_2m_max,weathercode&timezone=UTC`;

const convertHourTo12HFormat = (time) => {
  const [ h, m ] = time.split(':');
  const period = Number(h) < 12 ? 'AM' : 'PM';
  const hour = Number(h) % 12;
  return `${hour === 0 ? 12 : hour} ${period}`;
}

const getTemperatures = (temperatures, start, count) => {
  return temperatures.slice(start, count);
}

const getHoursIn12HFormat = (times, start, count) => {
  return times.slice(start, count).map(time => convertHourTo12HFormat(time.slice(-5)));
}

const getHourlyTemperatures = (data) => {
    const hours = getHoursIn12HFormat(data.hourly.time, 6, 28);
    const temperatures = getTemperatures(data.hourly.temperature_2m, 6, 28);
    return hours.map((hour, index) => {
      return { hour, temperature: Math.round(temperatures[index])}
    });
}

const processWeatherData = (data) => {
  return {
    location: 'Brasov',
    current: {
      temperature: Math.round(data.current_weather.temperature),
      description: wmoCodes[data.current_weather.weathercode]
    },
    hourly: getHourlyTemperatures(data)
  }
}

const getForecast = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getWeather = async () => {
  const data = await getForecast();
  console.log(data);
  return processWeatherData(data);
}