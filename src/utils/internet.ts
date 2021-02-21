import NetInfo from '@react-native-community/netinfo';

export const getInternetAvailability = async () => {
  try {
    let connectionInfo = await NetInfo.fetch();
    return connectionInfo.isInternetReachable;
  } catch (err) {
    console.log('Error while fetching internet details', err);
    return false;
  }
};
