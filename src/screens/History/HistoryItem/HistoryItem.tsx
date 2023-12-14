import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CustomText, Separator } from '~/components';
import { styles } from './HistoryItem.style';

interface HistoryItemProps {
  location: string;
  temp: string;
  onRemove: () => void;
  onNavigate: () => void;
}

const HistoryItem: React.FC<HistoryItemProps> = React.memo(
  ({ location, temp, onRemove, onNavigate }) => {
    return (
      <>
        <TouchableOpacity onPress={onNavigate}>
          <View style={styles.historyItem}>
            <View style={styles.leftContainer}>
              <View style={styles.locationContainer}>
                <CustomText style={styles.locationName}>{location}</CustomText>
              </View>
              <TouchableOpacity onPress={onRemove} style={styles.customButton}>
                <CustomText style={styles.buttonText}>Clear</CustomText>
              </TouchableOpacity>
            </View>
            <CustomText style={styles.temperature}>{temp}°C</CustomText>
          </View>
        </TouchableOpacity>
        <View style={styles.separatorContainer}>
          <Separator />
        </View>
      </>
    );
  }
);

export default HistoryItem;
