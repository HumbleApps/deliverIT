import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  tabStatusStyle: {
    textTransform: 'capitalize',
    fontSize: 14,
    marginLeft: 8,
  },
  title: {
    color: colors.white,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  chevron: {
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
