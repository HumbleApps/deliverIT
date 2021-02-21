import { all } from 'redux-saga/effects';

import userSaga from 'sagas/userSaga';
import authSaga from 'sagas/authSaga';
// import verificationSaga from 'sagas/verificationSaga';
import vehicleSaga from 'sagas/vehicleSaga';
import driverSaga from 'sagas/driverSaga';
import assetSaga from 'sagas/assetSaga';
// import videoTrainingSaga from './videoTrainingSaga';
// import paymentsSaga from 'sagas/paymentsSaga';
import tripSaga from './tripSaga';
// import clientListingSaga from './clientListingSaga';
import hubsSaga from './hubsSaga';
import notificationSaga from './notificationSaga';

export default function* rootSaga() {
  yield all([
    // userSaga(),
    // authSaga(),
    // verificationSaga(),
    // vehicleSaga(),
    // driverSaga(),
    // assetSaga(),
    // videoTrainingSaga(),
    // paymentsSaga(),
    // tripSaga(),
    // clientListingSaga(),
    // hubsSaga(),
    // notificationSaga(),
  ]);
}
