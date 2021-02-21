import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

const styles = StyleSheet.create({
  banner: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    marginBottom: 5,
    height: 68,
  },
  bannerText: {
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  success: {
    color: colors.success,
    borderColor: colors.success,
    backgroundColor: colors.successBg,
  },
  info: {
    color: colors.info,
    borderColor: colors.info,
    backgroundColor: colors.infoBg,
  },
  primary: {
    color: colors.primary,
    borderColor: colors.primary,
    backgroundColor: colors.primaryBg,
  },
});

export default styles;
