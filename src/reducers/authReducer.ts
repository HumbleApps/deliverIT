import {
  AuthActionTypes,
  SET_PHONE_NUMBER,
  OTP_GENERATED,
  RESET_AUTH,
} from 'actions/authActions';

type InitialState = {
  isOtpSent: boolean;
  phoneNumber: string | null;
};

const initialState: InitialState = {
  isOtpSent: false,
  phoneNumber: null,
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.data.phoneNumber,
      };
    }
    case OTP_GENERATED: {
      return {
        ...state,
        isOtpSent: action.data.isSent,
      };
    }

    case RESET_AUTH: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
