import { RouteProps } from 'react-router-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import pathNames from './pathNames';

import LoginView from 'views/LoginView';
// import OtpView from 'views/OtpView';
// import RegisterView from 'views/RegisterView';
// import NoVehicleView from 'views/NoVehicleView';

// import PersonalDetailsView from 'views/PersonalDetailsView';
// import BankDetailsView from 'views/BankDetailsView';
// import VehiclesListView from 'views/VehiclesListView';
// import DriversListView from 'views/DriversListView';

// import PaymentView from 'views/PaymentView';

// import ProfileView from 'views/ProfileView';

// import NotificationView from 'views/NotificationView';
import HomeView from 'views/HomeView';
import TmpView from 'views/TmpView';

interface RouteType extends RouteProps {
  isPrivate: boolean;
  key?: string;
}

const config: RouteType[] = [
  {
    path: pathNames.home,
    component: gestureHandlerRootHOC(HomeView),
    exact: true,
    isPrivate: false,
  },
  {
    path: pathNames.tmp,
    component: gestureHandlerRootHOC(TmpView),
    exact: true,
    isPrivate: false,
  },
  // {
  //   path: pathNames.otp,
  //   component: gestureHandlerRootHOC(OtpView),
  //   exact: true,
  //   isPrivate: false,
  // },
  // {
  //   path: pathNames.register,
  //   component: gestureHandlerRootHOC(RegisterView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.noVehicle,
  //   component: gestureHandlerRootHOC(NoVehicleView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.verification,
  //   component: gestureHandlerRootHOC(VerificationView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.personalDetails,
  //   component: gestureHandlerRootHOC(PersonalDetailsView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.bankDetails,
  //   component: gestureHandlerRootHOC(BankDetailsView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.vehiclesList,
  //   component: gestureHandlerRootHOC(VehiclesListView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.driversList,
  //   component: gestureHandlerRootHOC(DriversListView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.vehicles,
  //   component: gestureHandlerRootHOC(VehicleView),
  //   exact: false,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.drivingLicense,
  //   component: gestureHandlerRootHOC(DrivingLicenseView),
  //   exact: false,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.tripManagementHomeView,
  //   component: gestureHandlerRootHOC(TripManagementHomeView),
  //   exact: false,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.payments,
  //   component: gestureHandlerRootHOC(PaymentView),
  //   exact: false,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.vehicleEarning,
  //   component: gestureHandlerRootHOC(VehicleEarningView),
  //   exact: false,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.videoTraining,
  //   component: gestureHandlerRootHOC(VideoTrainingView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.earningDetails,
  //   component: gestureHandlerRootHOC(EarningDetailsView),
  //   exact: true,
  //   isPrivate: false,
  // },

  // {
  //   path: pathNames.tripAttendence,
  //   component: gestureHandlerRootHOC(TripAttendenceView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.changeTripDriver,
  //   component: gestureHandlerRootHOC(ChangeTripDetailsView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.noEarningPage,
  //   component: gestureHandlerRootHOC(noEarningView),
  //   exact: false,
  //   isPrivate: true,
  // },

  // {
  //   path: pathNames.discoveryTripDetails,
  //   component: gestureHandlerRootHOC(DiscoveryTripDetails),
  //   exact: true,
  //   isPrivate: false,
  // },
  // {
  //   path: pathNames.vehicleSelection,
  //   component: gestureHandlerRootHOC(VehicleSelection),
  //   exact: true,
  //   isPrivate: false,
  // },
  // {
  //   path: pathNames.driverSelection,
  //   component: gestureHandlerRootHOC(DriverSelection),
  //   exact: true,
  //   isPrivate: false,
  // },
  // {
  //   path: pathNames.tripDetails,
  //   component: gestureHandlerRootHOC(TripDetailsView),
  //   exact: true,
  //   isPrivate: true,
  // },

  // {
  //   path: pathNames.profile,
  //   component: gestureHandlerRootHOC(ProfileView),
  //   exact: true,
  //   isPrivate: true,
  // },
  // {
  //   path: pathNames.notifications,
  //   component: gestureHandlerRootHOC(NotificationView),
  //   exact: true,
  //   isPrivate: true,
  // },
];

export default config;
