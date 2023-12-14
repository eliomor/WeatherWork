import React, {useState, useEffect} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {AppNavigationProp} from '~/types';
import {loginUser} from '~/store/slices/appSlice';
import {selectCurrentUser} from '~/store/selectors';
import {CustomText, CustomButton} from '~/components';

import {styles} from './LoginScreen.styles';

const LoginScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [name, setName] = useState('');

  useEffect(() => {
    if (currentUser) {
      navigation.navigate('Main', {screen: 'Search'});
    }
  }, [currentUser, navigation]);

  const handleLogin = () => {
    if (name.trim() === '') {
      Alert.alert('Please enter your name.');
      return;
    }
    dispatch(loginUser(name));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.headerText}>Weather</CustomText>
        <CustomText style={styles.headerText}>App</CustomText>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={name}
          onChangeText={setName}
          style={styles.textInput}
        />
      </View>
      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
