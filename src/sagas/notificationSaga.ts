import * as notificationsApis from 'apis/notificationsApis';

import {
  NotificationActionTypes,
  setNotifications,
} from 'actions/notificationActions';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { withLoadingAndErrors } from 'sagas/helperSaga';
import {
  GET_NOTIFICATIONS,
  SetNotificationResponse,
} from 'types/notificationTypes';

function* _getNotifications(action: NotificationActionTypes) {
  try {
    const NotificationList: NotificationActionTypes = yield call(
      notificationsApis.fetchNotifications,
      action.data,
    );
    yield put(setNotifications(NotificationList as SetNotificationResponse));
  } catch (error) {
    throw error;
  }
}

function* getNotifications() {
  yield takeLatest(GET_NOTIFICATIONS, withLoadingAndErrors(_getNotifications));
}

export default function* paymentsSaga() {
  yield all([getNotifications()]);
}
