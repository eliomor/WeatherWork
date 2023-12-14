import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';

import SvgImage from '~/components/SvgImage';
import {icon_undo_tab, icon_search_tab, icon_logout_tab} from '~/assets/icons';

import CustomTabBarStyles from './CustomTabBar.styles';

interface CustomTabBarProps {
  state: {
    routes: Array<{
      key: string;
      name: string;
    }>;
    index: number;
  };
  descriptors: Record<string, any>;
  navigation: {
    emit: (args: any) => any;
    navigate: (routeName: string) => void;
  };
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const handlePress = useCallback(
    (route: string, index: number) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route,
        canPreventDefault: true,
      });

      if (!event.defaultPrevented && state.index !== index) {
        navigation.navigate(route);
      }
    },
    [navigation, state.index],
  );

  const renderIcon = (label: string) => {
    switch (label) {
      case 'Search':
        return <SvgImage xml={icon_search_tab} width={33} height={33} />;
      case 'History':
        return <SvgImage xml={icon_undo_tab} width={33} height={33} />;
      case 'Logout':
        return <SvgImage xml={icon_logout_tab} width={33} height={33} />;
      default:
        return null;
    }
  };

  return (
    <View style={CustomTabBarStyles.tabBar}>
      {state.routes.map((route, index) => {
        const label = descriptors[route.key].options.tabBarLabel || route.name;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => handlePress(route.name, index)}
            style={CustomTabBarStyles.tabButton}>
            {renderIcon(label)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
