import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#000000',
    height: 1,
    width: 250,
    borderRadius: 1,
  },
});

export default Separator;
