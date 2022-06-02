import { checkPropTypes } from "prop-types";
import { useEffect, useState } from "react";
import LoadError from "../widgets/weather/error";

const API_KEY = '2057c6e4d28db01f7aef91ed14c6e128';
const API_HOST = 'https://api.openweathermap.org/data/3.0/';

const location = {
    NewYork : {
        lon: 33.44,
        lat: -94.04
    }
}
const url = `${API_HOST}onecall?lat=${location.NewYork.lat}&lon=${location.NewYork.lon}&appid=${API_KEY}`;


export const getWeather = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return {
      location: 'New York',
      description: 'Mostly Cloudy',
      current: 76,
      hourly: [
        { hour: "6 AM", temperature: 86 },
        { hour: "9 AM", temperature: 87 },
        { hour: "12 PM", temperature: 88 },
        { hour: "3 PM", temperature: 79 },
        { hour: "6 PM", temperature: 62 },
        { hour: "9 PM", temperature: 59 },
        { hour: "12 AM", temperature: 70 },
        { hour: "3 AM", temperature: 65 },
      ]
    }
}