import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import Text from 'components/Text';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

type Props = {
  title: string;
};

const ModalSectionHeader: FC<Props> = ({ title }) => (
  <Text style={styles.container}>{title}</Text>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSize.normal,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
});

export default ModalSectionHeader;
