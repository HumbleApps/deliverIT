import crashlytics from '@react-native-firebase/crashlytics';
import { ToastAndroid } from 'react-native';
import { call, put } from 'redux-saga/effects';

import { showLoader, hideLoader } from 'actions/loaderActions';
// import AppData from '@Utils/appData';

type SagaArgs = {
  hasLoader?: boolean;
  recordApiStatus?: boolean;
  completionDelay?: number | undefined;
  errorMsg?: string;
};

/**
 * withLoadingAndErrors attaches loader and error actions to saga pre and post request
 *
 * @param  {Function} saga to be called
 * @param  {object} [sagaArgs={}] args with saga
 * @return {object} action object
 */
export const withLoadingAndErrors = (saga: any, sagaArgs = {} as SagaArgs) =>
  function* (action: any) {
    const { hasLoader = true, errorMsg } = sagaArgs;

    if (hasLoader) {
      yield put(showLoader());
    }

    try {
      yield call(saga, action);

      if (hasLoader) {
        yield put(hideLoader());
      }
    } catch (error) {
      crashlytics().recordError(new Error(error));
      console.log('Network Error: ', error);
      ToastAndroid.showWithGravity(
        errorMsg || error.message || 'Something went wrong!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );

      if (hasLoader) {
        yield put(hideLoader());
      }
    }
  };
