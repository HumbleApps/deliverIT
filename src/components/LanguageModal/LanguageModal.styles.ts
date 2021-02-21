import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  sectionHeader: {
    paddingTop: 20,
    // paddingVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSize.normal,
  },
  sectionItem: {
    paddingVertical: 20,
    textAlign: 'center',
  },
  sectionItemActive: {
    color: colors.primary,
    backgroundColor: colors.primaryBg,
  },
});

export default styles;
