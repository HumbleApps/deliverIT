import { put, takeLatest, all, call } from 'redux-saga/effects';

import { withLoadingAndErrors } from 'sagas/helperSaga';

import { FETCH_VEHICLE_TYPES, setVehicleTypes } from 'actions/assetActions';
import {
  GET_ALL_MATERIALS,
  GET_ALL_VEHICLES_TYPES,
  GET_ALL_WORKS,
  setAllMaterials,
  setAllVehicleTypes,
  setAllWorks,
} from 'actions/allAssetsActions';

import { MaterialType, VehicleTypeType, WorkType } from 'types/assetTypes';

import * as assetApis from 'apis/assetApis';

function* _fetchVehicleTypes() {
  const vehicleTypes = yield call(assetApis.fetchVehiclesTypes);

  yield put(setVehicleTypes(vehicleTypes));
}

function* fetchVehicleTypes() {
  yield takeLatest(
    FETCH_VEHICLE_TYPES,
    withLoadingAndErrors(_fetchVehicleTypes, { hasLoader: false }),
  );
}

function* _fetchAllMaterials() {
  try {
    const materials: MaterialType[] = yield call(assetApis.fetchMaterials);

    yield put(setAllMaterials(materials));
  } catch (error) {
    throw error;
  }
}

function* fetchAllMaterials() {
  yield takeLatest(
    GET_ALL_MATERIALS,
    withLoadingAndErrors(_fetchAllMaterials, { hasLoader: false }),
  );
}

function* _fetchAllWorks() {
  try {
    const works: WorkType[] = yield call(assetApis.fetchWorks);

    yield put(setAllWorks(works));
  } catch (error) {
    throw error;
  }
}

function* fetchAllWorks() {
  yield takeLatest(
    GET_ALL_WORKS,
    withLoadingAndErrors(_fetchAllWorks, { hasLoader: false }),
  );
}

function* _fetchAllVehicleTypes() {
  try {
    const vehicleTypes: VehicleTypeType[] = yield call(
      assetApis.fetchVehiclesTypes,
    );

    yield put(setAllVehicleTypes(vehicleTypes));
  } catch (error) {
    throw error;
  }
}

function* fetchAllVehicleTypes() {
  yield takeLatest(
    GET_ALL_VEHICLES_TYPES,
    withLoadingAndErrors(_fetchAllVehicleTypes, { hasLoader: false }),
  );
}

export default function* vehicleSaga() {
  yield all([
    fetchVehicleTypes(),
    fetchAllMaterials(),
    fetchAllWorks(),
    fetchAllVehicleTypes(),
  ]);
}
