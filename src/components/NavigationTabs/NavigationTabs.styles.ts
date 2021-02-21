import { StyleSheet, Dimensions } from 'react-native';

import colors from 'styles/colors';
import boxShadow from 'styles/boxShadow';

export default StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    marginTop: -30,
    overflow: 'hidden',
    paddingBottom: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    ...boxShadow,
  },
  activeTab: {
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
  },
  text: {
    color: colors.muted,
  },
  activeText: {
    color: colors.white,
  },
});
