import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: colors.white,
    height: 48,
    borderRadius: 4,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderColor: colors.text,
    borderWidth: 1,
  },
  inputOpen: {
    borderBottomWidth: 0,
  },
  optionsContainer: {
    backgroundColor: colors.white,
    borderColor: colors.bg,
    elevation: 1,
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.bg,
  },
  selectedOption: {
    color: colors.primary,
    backgroundColor: colors.primaryBg,
  },
});
