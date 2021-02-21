import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: fontSize.large,
    fontWeight: '900',
    paddingTop: 20,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerSubSection: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'green',
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: fontSize.medium,
  },
  containerItem: {
    flex: 0.6,
  },
  tagContent: {
    width: '50%',
  },
  boldText: {
    color: colors.primary,
    fontSize: fontSize.large,
    fontWeight: 'bold',
  },
  normalText: {
    fontWeight: '800',
    paddingLeft: 30,
  },
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 10,
  },
  detailsItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: colors.white,
    color: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
    width: 140,
    height: 28,
    alignSelf: 'center',
  },
  title: {
    color: colors.primary,
    fontWeight: '100',
    fontSize: fontSize.normal,
  },
  clearBtn: {
    backgroundColor: colors.white,
  },
  clearBtnTitle: {
    color: colors.primary,
  },
  alertText: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: '700',
  },
  boldLabel: {
    fontSize: fontSize.large,
    marginVertical: 10,
    fontWeight: '500',
    padding: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: fontSize.medium,
    padding: 20,
    fontWeight: '100',
    textAlign: 'center',
  },
});

export default styles;
