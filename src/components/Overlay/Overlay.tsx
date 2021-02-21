import React, { ReactNode, FC } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

type Props = {
  children: ReactNode;
};
const Overlay: FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(1,1,1, 0.7)',
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 10000,
  },
});

export default Overlay;
