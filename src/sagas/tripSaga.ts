import { takeLatest, all, call, put, takeEvery } from 'redux-saga/effects';
import * as vehicleApis from 'apis/vehicleApis';
import * as tripActions from 'actions/tripActions';
import * as tripApis from 'apis/tripApis';
import * as driverApis from 'apis/driverApis';
import { TripItem } from 'types/tripTypes';
import { VerificationType } from 'types/verificationTypes';
import { withLoadingAndErrors } from 'sagas/helperSaga';
import {
  extractHubIds,
  mapResponseDataToObject,
  mapDriverListWithInUseStatus,
  mapVehicleListWithInUseStatus,
} from 'utils/tripManagement';
import STATUS from 'constants/status';

function* _getDriverTrips(action: tripActions.GetDriverTripsAction) {
  try {
    const { query, params } = yield action.data;
    const trips: { data: TripItem[]; next: number } = yield call(
      tripApis.getDriverTrips,
      query,
      params,
    );
    const hubIds: string[] = yield call(extractHubIds, trips.data);
    if (hubIds.length > 0) {
      const response = yield call(tripApis.getHubList, hubIds);
      const hubMap = yield mapResponseDataToObject(response);
      yield put(tripActions.setHubList(hubMap));
    }
    yield put(
      tripActions.setIsNextTripsFetchable(trips.next === 0 ? false : true),
    );
    yield put(tripActions.setDriverTrips(trips.data));
  } catch (error) {
    throw error;
  }
}

function* _getPartnerTrips(action: tripActions.GetPartnerTripsAction) {
  try {
    const { query, params } = yield action.data;
    const trips: { data: TripItem[]; next: number } = yield call(
      tripApis.getPartnerTrips,
      query,
      params,
    );
    const hubIds: string[] = yield call(extractHubIds, trips.data);
    if (hubIds.length > 0) {
      const response = yield call(tripApis.getHubList, hubIds);
      const hubMap = yield mapResponseDataToObject(response);
      yield put(tripActions.setHubList(hubMap));
    }
    yield put(
      tripActions.setIsNextTripsFetchable(trips.next === 0 ? false : true),
    );
    yield put(tripActions.setPartnerTrips(trips.data));
  } catch (error) {
    throw error;
  }
}

function* _fetchMoreDriverTripItems(
  action: tripActions.FetchMoreDriverTripItemsAction,
) {
  try {
    const { query, params } = yield action.data;
    const trips: { data: TripItem[]; next: number } = yield call(
      tripApis.getDriverTrips,
      query,
      params,
    );
    const hubIds: string[] = yield call(extractHubIds, trips.data);
    if (hubIds.length > 0) {
      const response = yield call(tripApis.getHubList, hubIds);
      const hubMap = yield mapResponseDataToObject(response);
      yield put(tripActions.addHubItems(hubMap));
    }
    yield put(
      tripActions.setIsNextTripsFetchable(trips.next === 0 ? false : true),
    );
    yield put(tripActions.addTripItems(trips.data));
  } catch (error) {
    throw error;
  }
}

function* _fetchMorePartnerTripItems(
  action: tripActions.FetchMorePartnerTripItemsAction,
) {
  try {
    const { query, params } = yield action.data;
    const trips: { data: TripItem[]; next: number } = yield call(
      tripApis.getPartnerTrips,
      query,
      params,
    );
    const hubIds: string[] = yield call(extractHubIds, trips.data);
    if (hubIds.length > 0) {
      const response = yield call(tripApis.getHubList, hubIds);
      const hubMap = yield mapResponseDataToObject(response);
      yield put(tripActions.addHubItems(hubMap));
    }
    yield put(
      tripActions.setIsNextTripsFetchable(trips.next === 0 ? false : true),
    );
    yield put(tripActions.addTripItems(trips.data));
  } catch (error) {
    throw error;
  }
}

function* _getTripDetails(action: tripActions.GetTripDetailsAction) {
  try {
    const { tripId } = yield action.data;
    const tripDetails: TripItem[] = yield call(tripApis.getTripDetails, tripId);
    if (tripDetails.length > 0) {
      const response = yield call(tripApis.getHubList, [tripDetails[0].hub_id]);
      const hubMap = yield mapResponseDataToObject(response);
      yield put(tripActions.setHubList(hubMap));
      yield put(tripActions.setTripDetails(tripDetails[0]));
    }
  } catch (error) {
    throw error;
  }
}

function* _updateTripDetails(action: tripActions.UpdateTripDetailsAction) {
  try {
    const { bookingId, payload } = yield action.data;
    yield call(tripApis.updateTripDetails, payload, bookingId);
    yield put(tripActions.setTripUpdateIndicator(true));
  } catch (error) {
    throw error;
  }
}

function* _startTrip(action: tripActions.StartTripAction) {
  try {
    yield call(tripApis.startTrip, action.data.tripId);
    yield put(tripActions.setStartTripIndicator(true));
  } catch (error) {
    throw error;
  }
}

function* _endTrip(action: tripActions.EndTripAction) {
  try {
    yield call(tripApis.endTrip, action.data.tripId);
    yield put(tripActions.setEndTripIndicator(true));
  } catch (error) {
    throw error;
  }
}

function* _cancelTrip(action: tripActions.CancelTripAction) {
  try {
    yield call(tripApis.cancelTrip, action.data.tripId, action.data.payload);
    yield put(tripActions.setCancelTripIndicator(true));
  } catch (error) {
    throw error;
  }
}

function* _createHelpTicket(action: tripActions.CreateHelpTicketAction) {
  try {
    yield call(tripApis.createHelpTicket, action.data.payload);
    yield put(tripActions.setTripHelpIndicator(true));
  } catch (error) {
    throw error;
  }
}

function* _fetchVehicleListWithStatus(
  action: tripActions.FetchVehicleListAction,
) {
  try {
    const vehicles: VerificationType[] = yield call(
      vehicleApis.fetchVehiclesMulti,
      action.data.vehicleIds,
    );

    const verifiedVehicles: VerificationType[] = yield vehicles.filter(
      (vehicle) =>
        vehicle.status === STATUS.VERIFIED ||
        vehicle.status === STATUS.SUBMITTED ||
        (vehicle.status === STATUS.UPLOADED &&
          (vehicle.inv_status === STATUS.SUBMITTED ||
            vehicle.inv_status === STATUS.CLOSED)),
    );

    if (verifiedVehicles.length > 0) {
      const verifiedVehicleNumbers: string[] = yield verifiedVehicles.map(
        (vehicle) => {
          return vehicle.entity_key;
        },
      );

      const vehicleWithStatusObject = yield call(
        tripApis.getVehicleInUseStatus,
        verifiedVehicleNumbers,
        action.data.tripPickupAt,
        action.data.estimatedTime,
      );

      const vehicleListWithStatus = yield mapVehicleListWithInUseStatus(
        verifiedVehicles,
        vehicleWithStatusObject,
      );

      yield put(tripActions.setVehicleList(vehicleListWithStatus));
    }
  } catch (error) {
    throw error;
  }
}

function* _fetchDriverListWithStatus(
  action: tripActions.FetchDriverListAction,
) {
  try {
    const drivers: VerificationType[] = yield call(
      driverApis.fetchDrivers,
      action.data.driverIds,
    );

    const verifiedDriverList: VerificationType[] = yield drivers.filter(
      (driver) => {
        return driver.status === 'verified';
      },
    );

    if (verifiedDriverList.length > 0) {
      const verifiedDriversContacts: string[] = yield drivers.map(
        (driver) => driver.entity_key,
      );

      const driverInUseStatusObject = yield call(
        tripApis.getDriverWithInUseStatus,
        verifiedDriversContacts,
        action.data.tripPickupAt,
        action.data.estimatedTime,
      );

      const driverListWithInUseStatus: {
        driverDetails: VerificationType;
        inUseStatus: boolean;
      }[] = yield mapDriverListWithInUseStatus(
        drivers,
        driverInUseStatusObject,
      );
      yield put(tripActions.setDriverList(driverListWithInUseStatus));
    }
  } catch (error) {
    throw error;
  }
}

function* getDriverTrips() {
  yield takeLatest(
    tripActions.GET_DRIVER_TRIPS,
    withLoadingAndErrors(_getDriverTrips),
  );
}

function* getPartnerTrips() {
  yield takeLatest(
    tripActions.GET_PARTNER_TRIPS,
    withLoadingAndErrors(_getPartnerTrips),
  );
}

function* fetchMoreDriverTripItems() {
  yield takeEvery(
    tripActions.FETCH_MORE_DRIVER_TRIP_ITEMS,
    withLoadingAndErrors(_fetchMoreDriverTripItems),
  );
}

function* fetchMorePartnerTripItems() {
  yield takeEvery(
    tripActions.FETCH_MORE_PARTNER_TRIP_ITEMS,
    withLoadingAndErrors(_fetchMorePartnerTripItems),
  );
}

function* getTripDetails() {
  yield takeLatest(
    tripActions.GET_TRIP_DETAILS,
    withLoadingAndErrors(_getTripDetails),
  );
}

function* updateTripDetails() {
  yield takeLatest(
    tripActions.UPDATE_TRIP_DETAILS,
    withLoadingAndErrors(_updateTripDetails),
  );
}

function* startTrip() {
  yield takeLatest(tripActions.START_TRIP, withLoadingAndErrors(_startTrip));
}

function* endTrip() {
  yield takeLatest(tripActions.END_TRIP, withLoadingAndErrors(_endTrip));
}

function* cancelTrip() {
  yield takeLatest(tripActions.CANCEL_TRIP, withLoadingAndErrors(_cancelTrip));
}

function* fetchVehicleList() {
  yield takeLatest(
    tripActions.FETCH_VEHICLE_LIST,
    withLoadingAndErrors(_fetchVehicleListWithStatus),
  );
}

function* fetchDriverList() {
  yield takeLatest(
    tripActions.FETCH_DRIVER_LIST,
    withLoadingAndErrors(_fetchDriverListWithStatus),
  );
}

function* createHelpTicket() {
  yield takeLatest(
    tripActions.CREATE_HELP_TICKET,
    withLoadingAndErrors(_createHelpTicket),
  );
}

export default function* tripSaga() {
  yield all([
    getDriverTrips(),
    getPartnerTrips(),
    fetchMoreDriverTripItems(),
    fetchMorePartnerTripItems(),
    getTripDetails(),
    startTrip(),
    endTrip(),
    cancelTrip(),
    fetchVehicleList(),
    createHelpTicket(),
    updateTripDetails(),
    fetchDriverList(),
  ]);
}
