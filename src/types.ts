import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type AppNavigationProp = NavigationProp<ParamListBase>;

export interface WeatherData {
  description: string;
  temp: number;
  feels_like: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherForecast {
  date: string;
  weatherData: WeatherData[];
}

export interface UserState {
  userName: string;
  isLoggedIn: boolean;
  searchHistory: {location: string; temp: string}[];
}

export interface AppState {
  users: Record<string, UserState>;
  currentUser: string | null;
  locationName: string;
  searchResults: WeatherForecast[];
}
