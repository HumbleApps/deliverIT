import React, { FC } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

import boxShadow from 'styles/boxShadow';
import colors from 'styles/colors';

/**
 * Generic component that renders content with box shadow, padding & border-radius
 *
 */
const Box: FC<ViewProps> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...boxShadow,
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Box;
