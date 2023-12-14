import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {useRoute, RouteProp} from '@react-navigation/native';

import {selectCurrentUser} from '~/store/selectors';
import {CustomText} from '~/components';
import {useWeatherData} from '~/hooks/useWeatherSearch';

import SearchInput from './SearchInput/SearchInput';
import WeatherItem from './WeatherItem/WeatherItem';
import styles from './SearchScreen.styles';


type SearchScreenRouteProp = RouteProp<{params: {location?: string}}, 'params'>;

const SearchScreen: React.FC = () => {
  const route = useRoute<SearchScreenRouteProp>();
  const [searchLocation, setSearchLocation] = useState<string>('');
  const currentUser = useSelector(selectCurrentUser);

  const {isLoading, isError, organizeDataByDate} =
    useWeatherData(searchLocation);

  useEffect(() => {
    if (route.params?.location) {
      setSearchLocation(route.params.location);
    }
  }, [route.params?.location]);

  const handleSearch = useCallback((location: string) => {
    setSearchLocation(location);
  }, []);

  return (
    <View style={styles.container}>
      <CustomText style={styles.nameText}>Hi, {currentUser}</CustomText>
      <SearchInput onSearch={handleSearch} />
      <CustomText>Enter any location of your choice</CustomText>
      {isLoading ? (
        <View style={styles.containerCentered}>
          <ActivityIndicator size="large" color="#2D2D2D" />
        </View>
      ) : isError ? (
        <CustomText>Location Not Found</CustomText>
      ) : (
        <>
          <CustomText style={styles.locationName}>{searchLocation}</CustomText>
          <FlatList
            data={organizeDataByDate}
            renderItem={({item}) => (
              <WeatherItem
                date={item.date}
                weatherData={[item.weatherData[0]]}
              />
            )}
            keyExtractor={item => item.date}
          />
        </>
      )}
    </View>
  );
};

export default SearchScreen;
