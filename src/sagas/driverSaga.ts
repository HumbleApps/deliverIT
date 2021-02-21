import { put, takeLatest, all, call, select } from 'redux-saga/effects';

import { withLoadingAndErrors } from 'sagas/helperSaga';

import {
  GET_DRIVERS,
  CREATE_DRIVER,
  UPDATE_DRIVER,
  GetDriversAction,
  CreateDriverAction,
  UpdateDriversAction,
  setDrivers,
  addOne,
  updateOne,
  GET_DRIVER_IN_USE,
  getDriverInUseStatusAction,
} from 'actions/driverActions';

import * as driverApis from 'apis/driverApis';
import { VerificationType } from 'types/verificationTypes';
import { VerificationTypeKey } from 'constants/verification';
import { updateConnection } from 'actions/verificationActions';
import { setDriversInUseStatus } from 'actions/clientListingAction';
import { selectDriverList } from 'selectors/verificationSelector';

function* _getDrivers(action: GetDriversAction) {
  try {
    const drivers: VerificationType[] = yield call(
      driverApis.fetchDrivers,
      action.data.driverIds,
    );

    yield put(setDrivers(drivers));
  } catch (error) {
    throw error;
  }
}

function* getDrivers() {
  yield takeLatest(GET_DRIVERS, withLoadingAndErrors(_getDrivers));
}

function* _createDriver(action: CreateDriverAction) {
  const response: VerificationType = yield call(
    driverApis.createDriver,
    action.data,
  );
  const driverIds = yield select(selectDriverList);
  if (driverIds.includes(response._id)) {
    throw new Error('Driver already present');
  }

  yield put(addOne(response));
  yield put(
    updateConnection(VerificationTypeKey.driver_verification, [response._id]),
  );
}

function* createDriver() {
  yield takeLatest(CREATE_DRIVER, withLoadingAndErrors(_createDriver));
}

function* _updateDriver(action: UpdateDriversAction) {
  const driver: VerificationType = yield call(
    driverApis.updateDriver,
    action.data,
  );

  yield put(updateOne(driver));
}

function* updateDriver() {
  yield takeLatest(UPDATE_DRIVER, withLoadingAndErrors(_updateDriver));
}

function* _getDriverInUseStatus(action: getDriverInUseStatusAction) {
  const driversStatus: any = yield call(
    driverApis.getDriverInUseStatus,
    action.data,
  );
  yield put(setDriversInUseStatus(driversStatus));
}

function* getDriverInUseStatus() {
  yield takeLatest(
    GET_DRIVER_IN_USE,
    withLoadingAndErrors(_getDriverInUseStatus),
  );
}

export default function* driverSaga() {
  yield all([
    getDrivers(),
    createDriver(),
    updateDriver(),
    getDriverInUseStatus(),
  ]);
}
