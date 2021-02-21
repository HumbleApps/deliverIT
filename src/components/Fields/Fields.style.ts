import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
  field: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
    fontWeight: 'bold',
    letterSpacing: 1,
    borderColor: colors.text,
    color: colors.text,
    fontFamily: 'Montserrat',
  },
  inputWithPlaceHolder: {
    fontSize: fontSize.small,
  },
  inputWithAddon: {
    paddingLeft: 80,
  },
  inputWithoutAddon: {
    textAlign: 'center',
  },
  addonContainer: {
    position: 'absolute',
    paddingTop: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  addonText: { fontWeight: 'bold' },
  addonBar: {
    borderRightWidth: 2,
    height: 24,
    marginTop: 0,
    paddingHorizontal: 8,
    borderRightColor: colors.border,
  },
  label: {
    marginHorizontal: 10,
    color: colors.text,
  },
  select: {
    height: 28,
  },
  error: {
    color: colors.primary,
    fontSize: fontSize.small,
    marginHorizontal: 10,
    marginTop: 2,
    marginBottom: 10,
  },
  otp: {
    height: 60,
    marginVertical: 20,
  },
  otpUnderline: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
    color: colors.text,
    fontWeight: 'bold',
  },
});
