import {useMemo, useEffect} from 'react';
import {useQuery} from 'react-query';
import {useDispatch} from 'react-redux';

import {API} from '~/api/weatherApi';
import {WeatherForecast} from '~/types';
import {updateSearchHistory} from '~/store/slices/appSlice';

export const useWeatherData = (searchLocation: string) => {
  const dispatch = useDispatch();

  const {data, isLoading, isError} = useQuery(
    ['weather', searchLocation],
    async () => {
      const response = await fetch(API.GET.getWeather(searchLocation));
      if (!response.ok) {
        throw {
          name: 'LocationNotFoundError',
          message: 'Location Not Found',
          status: response.status,
        };
      }
      const jsonData = await response.json();
      return jsonData;
    },
    {
      enabled: !!searchLocation,
      retry: false,
    },
  );

  useEffect(() => {
    if (data && data.list && data.list.length > 0) {
      const currentTemp = data.list[0].main.temp.toString();
      dispatch(
        updateSearchHistory({location: searchLocation, temp: currentTemp}),
      );
    }
  }, [data, dispatch, searchLocation]);

  const organizeDataByDate = useMemo(() => {
    if (!data || !data.list) {
      return [];
    }

    const weatherByDate: {[key: string]: WeatherForecast[]} = {};

    data.list.forEach(forecast => {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();
      if (!weatherByDate[date]) {
        weatherByDate[date] = [];
      }
      weatherByDate[date].push(forecast);
    });

    return Object.entries(weatherByDate).map(([date, weatherData]) => ({
      date,
      weatherData,
    }));
  }, [data]);

  return {organizeDataByDate, isLoading, isError};
};
