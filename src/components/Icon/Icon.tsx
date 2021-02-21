import React, { FC } from 'react';
import { View } from 'react-native';
import {
  FontAwesomeIcon,
  Props as FAProps,
} from '@fortawesome/react-native-fontawesome';

import colors from 'styles/colors';

import styles from './Icon.styles';

const Icon: FC<FAProps> = ({ color = colors.white, ...props }) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon color={color} {...props} />
    </View>
  );
};

export default Icon;
