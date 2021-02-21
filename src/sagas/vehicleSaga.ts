import { put, takeLatest, all, call } from 'redux-saga/effects';

import { withLoadingAndErrors } from 'sagas/helperSaga';

import {
  GET_VEHICLES,
  CREATE_VEHICLE,
  UPDATE_VEHICLE,
  GetVehiclesAction,
  CreateVehiclesAction,
  setVehicles,
  updateOne,
  UpdateVehiclesAction,
  addOne,
} from 'actions/vehicleActions';
import { updateConnection } from 'actions/verificationActions';

import { VerificationType } from 'types/verificationTypes';

import * as vehicleApis from 'apis/vehicleApis';
import { VerificationTypeKey } from 'constants/verification';
import STATUS from 'constants/status';

function* _getVehicles(action: GetVehiclesAction) {
  try {
    const vehicles: VerificationType[] = yield call(
      vehicleApis.fetchVehiclesMulti,
      action.data.vehicleIds,
    );

    yield put(setVehicles(vehicles));
  } catch (error) {
    throw error;
  }
}

function* getVehicles() {
  yield takeLatest(GET_VEHICLES, withLoadingAndErrors(_getVehicles));
}

function* _createVehicle(action: CreateVehiclesAction) {
  const vehicle: VerificationType = yield call(
    vehicleApis.createVehicle,
    action.data,
  );

  const { status } = vehicle;
  if (status === STATUS.ALREADY_PRESENT) {
    throw new Error('Vehicle already present');
  }
  yield put(addOne(vehicle));
  yield put(
    updateConnection(VerificationTypeKey.vehicle_verification, [vehicle._id]),
  );
}

function* createVehicle() {
  yield takeLatest(CREATE_VEHICLE, withLoadingAndErrors(_createVehicle));
}

function* _updateVehicle(action: UpdateVehiclesAction) {
  const vehicle: VerificationType = yield call(
    vehicleApis.updateVehicle,
    action.data,
  );

  yield put(updateOne(vehicle));
}

function* updateVehicle() {
  yield takeLatest(UPDATE_VEHICLE, withLoadingAndErrors(_updateVehicle));
}

export default function* vehicleSaga() {
  yield all([getVehicles(), createVehicle(), updateVehicle()]);
}
