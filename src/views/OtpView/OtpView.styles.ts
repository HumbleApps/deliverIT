import { StyleSheet } from 'react-native';

import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: fontSize.large,
  },
  text: {
    textAlign: 'center',
  },
  strong: {
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-end',
    width: '100%',
  },
  otpInput: {
    letterSpacing: 30,
  },
  timer: {
    alignSelf: 'center',
  },
});

export default styles;
