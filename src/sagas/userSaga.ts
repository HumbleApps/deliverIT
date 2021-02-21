import { put, takeLatest, all, call, select } from 'redux-saga/effects';

import * as userApis from 'apis/userApis';
import * as verificationApi from 'apis/verificationApis';

import { identifyUser } from 'utils/segment';

import {
  LOG_OUT,
  GET_USER_FROM_TOKEN,
  CREATE_USER_ORG,
  UPDATE_STATIC_DETAILS,
  CreateUserOrgAction,
  UpdateStaticDetailsAction,
  setUser,
  setCities,
  removeUser,
  setLtOrg,
  setFetching,
  UpdateUserOrgAction,
  UPDATE_USER_ORG,
} from 'actions/userActions';

import { getVerification, setVerification } from 'actions/verificationActions';

import { resetAuth } from 'actions/authActions';

import { selectCityId, selectUserType } from 'selectors/userSelector';

import { UserLoginPayload, UserType } from 'types/userTypes';

import { withLoadingAndErrors } from 'sagas/helperSaga';

import { removeToken } from 'utils/token';
import { LTUserType } from 'constants/user';
import Sockets from 'utils/sockets';

function* _logout() {
  try {
    yield userApis.logout();
    yield call(removeToken);
    yield put(removeUser());
    yield put(resetAuth());
  } catch (error) {
    throw error;
  }
}

function* logout() {
  yield takeLatest(
    LOG_OUT,
    withLoadingAndErrors(_logout, {
      errorMsg: 'Failed to logout!',
    }),
  );
}

function* _getUserFromToken() {
  try {
    const userLoginData: UserLoginPayload = yield userApis.getUser();
    identifyUser(userLoginData.user.id, userLoginData.user.phone_number);
    yield put(setUser(userLoginData.user));
    yield put(setCities(userLoginData.cities));
    yield put(getVerification(userLoginData.user.phone_number));
    yield put(setFetching(false));
    if (userLoginData.organization) {
      yield put(setLtOrg(userLoginData.organization[0]));
    }
    yield Sockets.init();
    yield put(setFetching(false));
  } catch (error) {
    yield put(setFetching(false));
    throw error;
  }
}

function* getUserFromToken() {
  yield takeLatest(
    GET_USER_FROM_TOKEN,
    withLoadingAndErrors(_getUserFromToken),
  );
}

function* _createUserOrg({ data }: CreateUserOrgAction) {
  try {
    const userCityId: number = yield select(selectCityId);
    yield call(userApis.createUserOrg, data.userOrg);
    const userLoginData: UserLoginPayload = yield call(userApis.getUser);

    yield put(setUser(userLoginData.user));
    if (userLoginData.organization) {
      yield put(setLtOrg(userLoginData.organization[0]));
    }

    const verification = yield call(
      verificationApi.createVerification,
      userCityId,
      userLoginData.user,
    );

    yield put(setVerification(verification));
  } catch (error) {
    throw error;
  }
}

function* createUserOrg() {
  yield takeLatest(CREATE_USER_ORG, withLoadingAndErrors(_createUserOrg));
}

function* _updateStaticDetails(action: UpdateStaticDetailsAction) {
  const userType: LTUserType = yield select(selectUserType);
  const user: UserType = yield call(
    userApis.updateStaticDetails,
    action.data.userId,
    action.data.userStaticDetails,
    userType,
  );

  yield put(setUser(user));
}

function* updateStaticDetails() {
  yield takeLatest(
    UPDATE_STATIC_DETAILS,
    withLoadingAndErrors(_updateStaticDetails, { hasLoader: false }),
  );
}

function* _updateUserOrg(action: UpdateUserOrgAction) {
  const userType: LTUserType = yield select(selectUserType);
  const response: UserType = yield call(
    userApis.updateUserOrg,
    action.data.userId,
    action.data.payload,
    userType,
  );

  yield put(setUser(response));
}

function* updateUserOrg() {
  yield takeLatest(UPDATE_USER_ORG, withLoadingAndErrors(_updateUserOrg));
}

/**
 * userSaga handles request related to user actions
 */
export default function* userSaga() {
  yield all([
    logout(),
    getUserFromToken(),
    createUserOrg(),
    updateStaticDetails(),
    updateUserOrg(),
  ]);
}
