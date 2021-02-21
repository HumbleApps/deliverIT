import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  tag: {
    width: 70,
    minWidth: 70,
    alignSelf: 'center',
    padding: 2,
    paddingLeft: 16,
    marginTop: 1,
  },
  tagText: {
    fontSize: fontSize.normal,
    height: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  leftTriangleCut: {
    width: 0,
    height: 0,
    borderTopWidth: 14,
    borderRightWidth: 14,
    borderBottomWidth: 14,
    borderRightColor: 'white',
    alignSelf: 'center',
    marginTop: 1,
  },
  leftExpanded: {
    paddingLeft: 30,
    width: 80,
    marginLeft: 0,
  },
  success: {
    backgroundColor: colors.success,
    borderTopColor: colors.success,
    borderBottomColor: colors.success,
  },
  info: {
    backgroundColor: colors.info,
    borderTopColor: colors.info,
    borderBottomColor: colors.info,
  },
  primary: {
    backgroundColor: colors.primary,
    borderTopColor: colors.primary,
    borderBottomColor: colors.primary,
  },
});
