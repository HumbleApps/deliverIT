import { put, takeLatest, all, call } from 'redux-saga/effects';

import { UserType } from 'types/userTypes';
import { CityType } from 'types/cityTypes';

import {
  GENERATE_OTP,
  VALIDATE_OTP,
  otpGenerated,
  GenerateOtpAction,
  ValidateOtpAction,
} from 'actions/authActions';

import {
  setUser,
  setCities,
  getUserFromToken,
  setFetching,
} from 'actions/userActions';

import * as authApis from 'apis/authApis';
import * as userApis from 'apis/userApis';

import { setToken } from 'utils/token';
import { identifyUser } from 'utils/segment';

import { withLoadingAndErrors } from 'sagas/helperSaga';

function* _generateOtp({ data }: GenerateOtpAction) {
  try {
    yield authApis.generateOtp(data.phoneNumber);
    yield put(otpGenerated(true));
  } catch (error) {
    throw error;
  }
}

/**
 * generateOtp calls _generateOtp
 */
function* generateOtp() {
  yield takeLatest(GENERATE_OTP, withLoadingAndErrors(_generateOtp));
}

function* _validateOtp({ data }: ValidateOtpAction) {
  try {
    const response: UserType = yield authApis.validateOtp(
      data.phoneNumber,
      data.code,
    );

    identifyUser(response.id, response.phone_number);

    yield call(setToken, response.token);

    // if user's org already created, get data from /login api
    if (response.user_type) {
      yield put(getUserFromToken());
    } else {
      const cities: CityType[] = yield call(userApis.fetchCities);

      yield put(setUser(response));
      yield put(setCities(cities));
    }

    yield put(setFetching(false));
  } catch (error) {
    yield put(setFetching(false));
    throw error;
  }
}

function* validateOtp() {
  yield takeLatest(
    VALIDATE_OTP,
    withLoadingAndErrors(_validateOtp, {
      errorMsg: 'Wrong OTP',
    }),
  );
}

export default function* userSaga() {
  yield all([generateOtp(), validateOtp()]);
}
