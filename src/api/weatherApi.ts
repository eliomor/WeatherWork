import Config from 'react-native-config';

export const API = {
  GET: {
    getWeather: (cityName: string): string =>
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${Config.OPEN_WEATHER_MAP_API_KEY}`,
  },
};
