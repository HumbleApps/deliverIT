import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import boxShadow from 'styles/boxShadow';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    ...boxShadow,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  clearedTitle: {
    color: colors.primary,
  },
  link: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  clearedContainer: {
    backgroundColor: colors.white,
  },
  outlinedContainer: {
    backgroundColor: colors.white,
    color: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    elevation: 0,
  },
  disabledContainer: {
    opacity: 0.7,
  },
  outlinedTitle: {
    color: colors.primary,
  },
});
