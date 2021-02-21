import { StyleSheet } from 'react-native';
import fontSize from 'styles/fontSize';

export default StyleSheet.create({
  container: {
    padding: 32,
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.medium,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  content: {
    lineHeight: 30,
    fontSize: fontSize.normal,
  },
});
