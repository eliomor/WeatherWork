import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { AppNavigationProp } from '~/types';
import { removeSearchEntry } from '~/store/slices/appSlice';
import { selectCurrentUser, selectSearchHistory } from '~/store/selectors';

import HistoryItem from './HistoryItem/HistoryItem';
import styles from './HistoryScreen.style';

const HistoryScreen: React.FC = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const searchHistory = useSelector(selectSearchHistory);

  const handleRemoveHistoryItem = useCallback((location: string) => {
    if (currentUser) {
      dispatch(removeSearchEntry({ userName: currentUser, location }));
    } else {
      console.error('currentUser is null');
    }
  }, [currentUser, dispatch]);

  const navigateToSearchWithLocation = useCallback((location: string) => {
    console.log('Navigating to Search with location:', location);
    navigation.navigate('Search', { location });
  }, [navigation]);

  const renderItem = useCallback(({ item }) => (
    <HistoryItem
      location={item.location}
      temp={item.temp}
      onRemove={() => handleRemoveHistoryItem(item.location)}
      onNavigate={() => navigateToSearchWithLocation(item.location)}
    />
  ), [handleRemoveHistoryItem, navigateToSearchWithLocation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={searchHistory}
        keyExtractor={(item, index) => `${item.location}-${index}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HistoryScreen;
