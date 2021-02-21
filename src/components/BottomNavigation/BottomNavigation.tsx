import React from 'react';
import { View } from 'react-native';
import { useRouteMatch, useHistory } from 'react-router-native';
import { selectUserDetails } from 'selectors/userSelector';

import BottomNavigationItem from './BottomNavigationItem';

import pathNames from 'routes/pathNames';

import styles from './BottomNavigation.styles';
import TrackEvents from 'constants/trackEvents';
import useSegment from 'hooks/useSegment';
import { useSelector } from 'react-redux';
import { Icons } from 'constants/icons';

const BottomNavigation = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const userDetails = useSelector(selectUserDetails);
  const { trackEventInSegment } = useSegment();

  const otherProperties = {
    UI_Item: 'Bottom Navigation Panel',
  };

  const logIconClicksToSegment = (path: string) => {
    if (path === pathNames.vehiclesList) {
      trackEventInSegment({
        collectData: userDetails,
        eventName: TrackEvents.click_my_vehicles_icon,
        otherProperties,
      });
    } else if (path === pathNames.driversList) {
      trackEventInSegment({
        collectData: userDetails,
        eventName: TrackEvents.click_my_drivers_icon,
        otherProperties,
      });
    }
  };

  const handlePress = (path: pathNames) => {
    logIconClicksToSegment(path);
    history.push(path);
  };

  return (
    <View style={styles.container}>
      <BottomNavigationItem
        title="Home"
        iconName={Icons.HOME}
        isActive={match.path === pathNames.home}
        onPress={() => handlePress(pathNames.home)}
      />
      <BottomNavigationItem
        title="My Bookings"
        iconName={Icons.CALENDAR}
        onPress={() => handlePress(pathNames.tripManagementHomeView)}
        isActive={match.path === pathNames.tripManagementHomeView}
      />
      <BottomNavigationItem
        title="My Vehicles"
        iconName={Icons.TRUCK}
        onPress={() => handlePress(pathNames.vehiclesList)}
        isActive={match.path === pathNames.vehiclesList}
      />
      <BottomNavigationItem
        title="My Drivers"
        iconName={Icons.DRIVER}
        onPress={() => handlePress(pathNames.driversList)}
        isActive={match.path === pathNames.driversList}
      />
      <BottomNavigationItem
        title="Payments"
        iconName={Icons.RUPEE}
        isActive={match.path === pathNames.payments}
        onPress={() => handlePress(pathNames.payments)}
      />
    </View>
  );
};

export default BottomNavigation;
