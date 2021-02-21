import React, { FC } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from 'components/Text';

import styles from './NavigationTabs.styles';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  onPress?: (value: string) => void;
};

const NavigationTabs: FC<Props> = ({
  options,
  value,
  containerStyle = {},
  tabStyle = {},
  textStyle = {},
  onPress = () => {},
}) => {
  const handlePress = (value: string) => {
    onPress(value);
  };
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, containerStyle]}>
        {options.map((opt, index) => (
          <View
            key={index}
            style={[
              styles.tab,
              tabStyle,
              value === opt.value && styles.activeTab,
            ]}
          >
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(opt.value || opt.label)}
            >
              <Text
                style={[
                  styles.text,
                  textStyle,
                  value === opt.value && styles.activeText,
                ]}
              >
                {opt.label}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default NavigationTabs;
