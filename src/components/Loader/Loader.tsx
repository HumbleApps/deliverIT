import React from 'react';
import { useSelector } from 'react-redux';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import Overlay from 'components/Overlay';

import colors from 'styles/colors';

import { selectLoaderCount } from 'selectors/loaderSelector';

const Loader = () => {
  const loaderCount = useSelector(selectLoaderCount);

  if (loaderCount === 0) {
    return null;
  }

  return (
    <Overlay>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loader;
