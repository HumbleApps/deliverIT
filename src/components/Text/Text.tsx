import React, { FC } from 'react';
import { Text as TextRN, TextProps, StyleSheet } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

const Text: FC<TextProps> = ({ children, style = {}, ...props }) => {
  return (
    <TextRN style={[styles.text, style]} {...props}>
      {children}
    </TextRN>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.normal,
    color: colors.text,
    fontFamily: 'Montserrat',
    letterSpacing: 0.4,
  },
});

export default Text;
