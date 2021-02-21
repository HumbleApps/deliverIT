import React, { FC } from 'react';
import {
  Linking,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from 'components/Text';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

import { GOOGLE_MAP_ICON } from 'images';

type Props = {
  label: string;
  lat: number;
  long: number;
  maxLength?: number;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  labelStyle?: StyleProp<TextStyle>;
  trackOnPress?: () => void;
};

const GoogleMapLink: FC<Props> = ({
  label,
  lat,
  long,
  style = {},
  iconStyle = {},
  labelStyle = {},
  maxLength = Infinity,
  trackOnPress = '',
}) => {
  const newLabel =
    label.length > maxLength ? `${label.substr(0, maxLength)}...` : label;
  const handlePress = () => {
    if (trackOnPress) {
      trackOnPress();
    }
    Linking.openURL(`google.navigation:q=${lat}+${long}`);
  };
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
      <Image style={[styles.icon, iconStyle]} source={GOOGLE_MAP_ICON} />
      <Text style={[styles.label, labelStyle]}>{newLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
  },
  label: {
    color: colors.primary,
    fontSize: fontSize.medium,
    textDecorationLine: 'underline',
  },
});

export default GoogleMapLink;
