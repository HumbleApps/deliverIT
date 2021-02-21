import { StyleSheet, Dimensions } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  header: {
    color: colors.white,
    paddingHorizontal: 10,
    fontWeight: '500',
    fontSize: fontSize.medium,
  },
  langText: {
    color: colors.white,
    paddingHorizontal: 10,
    fontWeight: '500',
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default styles;
