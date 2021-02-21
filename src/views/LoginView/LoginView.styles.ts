import { StyleSheet } from 'react-native';

import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: '10%',
    // flex: 1,
    // width: '100%',
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
    fontSize: fontSize.large,
  },
  tnc: {
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  img: {
    alignSelf: 'center',
  },
  phoneNumber: {
    fontSize: fontSize.normal,
    letterSpacing: 2,
  },
});

export default styles;
