import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import DiscoveryView from './DiscoveryView';
import { selectUserType } from 'selectors/userSelector';
import pathNames from 'routes/pathNames';
import { LTUserType } from 'constants/user';

const HomeView = () => {
  const history = useHistory();
  const userType = useSelector(selectUserType);
  if (userType === LTUserType.Driver) {
    history.push(pathNames.tripManagementHomeView);
  }
  return (
    <View>{userType !== LTUserType.Driver ? <DiscoveryView /> : <View />}</View>
  );
};

export default HomeView;
