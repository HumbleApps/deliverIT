import { combineReducers } from 'redux';

import loader from 'reducers/loaderReducer';
import auth from 'reducers/authReducer';
import user from 'reducers/userReducer';
import modal from 'reducers/modalReducer';
import images from 'reducers/imageReducer';
// import verification from 'reducers/verificationReducer';
import vehicles from 'reducers/vehicleReducer';
import drivers from 'reducers/driverReducer';
import assets from 'reducers/assetReducer';
// import videoTraining from 'reducers/videoTrainingReducer';
// import payments from 'reducers/paymentsReducer';
import trips from 'reducers/tripReducer';
// import clients from './clientListingReducer';
import notifications from 'reducers/notificationReducer';
import hubs from 'reducers/hubsReducer';

const rootReducer = combineReducers({
  // loader,
  // auth,
  // user,
  // modal,
  // images,
  // verification,
  // vehicles,
  // assets,
  // drivers,
  // videoTraining,
  // payments,
  // trips,
  // clients,
  // notifications,
  // hubs,
});

export default rootReducer;
