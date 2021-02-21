import React, { FC } from 'react';
import {
  Text,
  Linking,
  NativeTouchEvent,
  NativeSyntheticEvent,
  TextProps,
} from 'react-native';

import isEmpty from 'utils/isEmpty';

import styles from './Button.style';

interface Props extends TextProps {
  title: string;
  url?: string;
  disabled?: boolean;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const LinkButton: FC<Props> = ({
  title = '',
  url = '',
  disabled = false,
  style,
  onPress = () => {},
}) => {
  const handlePress = (e: NativeSyntheticEvent<NativeTouchEvent>) => {
    if (disabled) {
      return;
    }

    if (!isEmpty(url)) {
      Linking.openURL(url);
    }
    onPress(e);
  };
  return (
    <Text
      onPress={handlePress}
      style={[{ ...styles.link, opacity: disabled ? 0.5 : 1 }, style]}
    >
      {title}
    </Text>
  );
};

export default LinkButton;
