import React, { FC } from 'react';
import {
  TouchableOpacityProps,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import Text from 'components/Text';
import Icon from 'components/Icon';

import styles from './Button.style';
import colors from 'styles/colors';

interface Props extends TouchableOpacityProps {
  title: string;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  titleStyle?: TextStyle;
  isOutlined?: boolean;
  isClear?: boolean;
}

const Button: FC<Props> = ({
  title,
  style,
  titleStyle,
  iconLeft = undefined,
  iconRight = undefined,
  isOutlined = false,
  isClear = false,
  onPress = () => {},
  disabled,
  ...props
}) => {
  const handlePress = (e: NativeSyntheticEvent<NativeTouchEvent>) => {
    onPress(e);
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isOutlined && styles.outlinedContainer,
        isClear && styles.clearedContainer,
        disabled && styles.disabledContainer,
        style,
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={disabled}
      {...props}
    >
      {iconLeft && (
        <Icon icon={iconLeft} color={isClear ? colors.primary : colors.white} />
      )}
      <Text
        style={[
          styles.title,
          isOutlined && styles.outlinedTitle,
          isClear && styles.clearedTitle,
          titleStyle,
        ]}
      >
        {title}
      </Text>
      {iconRight && (
        <Icon
          icon={iconRight}
          color={isClear ? colors.primary : colors.white}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
