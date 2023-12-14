import React from 'react';
import {View} from 'react-native';
import moment from 'moment';

import {CustomText, Separator} from '~/components';

import styles from './WeatherItem.styles';

interface WeatherItemProps {
  date: string;
  weatherData: any[];
}

const KeyValComponent: React.FC<{keyText: string; val: number}> = ({
  keyText,
  val,
}) => (
  <View style={styles.keyValContainer}>
    <CustomText style={styles.boldText}>{keyText}:</CustomText>
    <CustomText style={styles.text}> {val}°C</CustomText>
  </View>
);

const WeatherItem: React.FC<WeatherItemProps> = ({date, weatherData}) => {
  const {temp, temp_max, feels_like, temp_min} = weatherData[0].main;
  const description = weatherData[0].weather[0].description;

  if (weatherData.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <CustomText style={styles.dateText}>
          {moment(date, 'MM/DD/YYYY').format('DD/MM/YYYY') ===
          moment().format('DD/MM/YYYY')
            ? 'Today'
            : moment(date, 'MM/DD/YYYY').format('DD/MM/YYYY')}{' '}
          - {description}
        </CustomText>
        <View style={styles.weatherDetailsRow}>
          <View style={styles.weatherDetail}>
            <KeyValComponent keyText="Current" val={temp} />
            <KeyValComponent keyText="Max" val={temp_max} />
          </View>
          <View style={styles.weatherDetail}>
            <KeyValComponent keyText="Feels like" val={feels_like} />
            <KeyValComponent keyText="Min" val={temp_min} />
          </View>
        </View>
      </View>
      <View style={styles.separatorContainer}>
        <Separator />
      </View>
    </View>
  );
};

export default WeatherItem;
