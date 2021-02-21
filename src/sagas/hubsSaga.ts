import { call, put, all, takeLatest } from 'redux-saga/effects';

import { HubType } from 'types/hubTypes';

import {
  GET_MULTIPLE_HUBS,
  GetMultipleHubsAction,
  addManyHubs,
} from 'actions/hubsActions';

import { withLoadingAndErrors } from 'sagas/helperSaga';

import * as hubsApis from 'apis/hubsApis';

function* _getMultipleHubs(action: GetMultipleHubsAction) {
  try {
    const response: HubType[] = yield call(
      hubsApis.fetchHubsByIds,
      action.data.ids,
    );
    yield put(addManyHubs(response));
  } catch (error) {
    throw error;
  }
}

function* getMultipleHubs() {
  yield takeLatest(GET_MULTIPLE_HUBS, withLoadingAndErrors(_getMultipleHubs));
}

export default function* hubsSaga() {
  yield all([getMultipleHubs()]);
}
