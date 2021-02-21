import React from 'react';
import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-native';
// import DiscoveryView from './DiscoveryView';
// import { selectUserType } from 'selectors/userSelector';
import pathNames from 'routes/pathNames';
import { LTUserType } from 'constants/user';

const HomeView = () => {
  // const history = useHistory();
  // const userType = useSelector(selectUserType);
  // if (userType === LTUserType.Driver) {
  //   history.push(pathNames.tripManagementHomeView);
  // }
  return (
    // <View>{userType !== LTUserType.Driver ? <DiscoveryView /> : <View />}</View>
    <View><Text>This is Homepage 2</Text></View>
  );
};

export default HomeView;
