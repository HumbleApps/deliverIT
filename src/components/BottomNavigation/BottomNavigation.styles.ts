import { StyleSheet, Dimensions } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';
import boxShadow from 'styles/boxShadow';

const CONTAINER_VERTICAL_PADDING = 4;
const HEIGHT = 80;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: Dimensions.get('window').height - HEIGHT - CONTAINER_VERTICAL_PADDING,
    width: Dimensions.get('window').width,
    height: HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 2 * CONTAINER_VERTICAL_PADDING,
    ...boxShadow,
    backgroundColor: colors.white,
  },
  item: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  itemTitle: {
    color: colors.text,
    fontSize: fontSize.small,
  },
  itemTitleActive: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
