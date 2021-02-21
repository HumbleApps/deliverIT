import React, { FC } from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ColorTypes } from 'styles/colors';

import styles from './Ribbon.styles';

type Props = {
  //color of the ribbon background
  color?: ColorTypes;
  // title to be shown for the Ribbon
  title: string;
  tagStyle?: StyleProp<ViewStyle>;
  tagText?: StyleProp<TextStyle>;
  // if you want to extend to the left of the container
  leftExpanded?: Boolean;
};

/**
 *
 * Ribbon component to be shown on the card like : "PAID", "RECOMMENDED"
 */
const Ribbon: FC<Props> = ({
  title,
  color,
  leftExpanded = false,
  tagStyle,
  tagText,
}) => {
  let ribbonColor = styles.success;

  switch (color && color.toLowerCase()) {
    case ColorTypes.success:
      ribbonColor = styles.success;
      break;
    case ColorTypes.info:
      ribbonColor = styles.info;
      break;
    case ColorTypes.primary:
      ribbonColor = styles.primary;
      break;
  }
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.tag,
          ribbonColor,
          tagStyle,
          leftExpanded && styles.leftExpanded,
        ]}
      >
        <Text style={[styles.tagText, tagText]}>{title}</Text>
      </View>
      <View style={[styles.leftTriangleCut, ribbonColor]} />
    </View>
  );
};

export default Ribbon;
