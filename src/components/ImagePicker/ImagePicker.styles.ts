import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import boxShadow from 'styles/boxShadow';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    ...boxShadow,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 4,
  },
  edit: {
    flexDirection: 'row',
  },
  editText: {
    marginLeft: 8,
  },
  uploadBtn: {
    width: 90,
  },
  uploadBtnTitle: {
    fontSize: fontSize.small,
  },
});
