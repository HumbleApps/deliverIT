import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tag_Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 0,
    backgroundColor: colors.primary,
  },
  txt: {
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    color: colors.white,
    fontSize: fontSize.normal,
  },
});
