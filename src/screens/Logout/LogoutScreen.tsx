import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {AppNavigationProp} from '~/types';
import {logoutUser} from '~/store/slices/appSlice';

import styles from './LogoutScreen.styles';

const LogoutScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AppNavigationProp>();

  useEffect(() => {
    dispatch(logoutUser());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LogoutScreen;
