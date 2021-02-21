export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const GENERATE_OTP = 'GENERATE_OTP';
export const OTP_GENERATED = 'OTP_GENERATED';
export const VALIDATE_OTP = 'VALIDATE_OTP';
export const RESET_AUTH = 'RESET_AUTH';

export type SetPhoneNumberAction = {
  type: typeof SET_PHONE_NUMBER;
  data: {
    phoneNumber: string;
  };
};

export type GenerateOtpAction = {
  type: typeof GENERATE_OTP;
  data: {
    phoneNumber: string;
  };
};

export type OtpGeneratedAction = {
  type: typeof OTP_GENERATED;
  data: {
    isSent: boolean;
  };
};

export type ValidateOtpAction = {
  type: typeof VALIDATE_OTP;
  data: {
    phoneNumber: string;
    code: string;
  };
};

export type ResetAuthAction = {
  type: typeof RESET_AUTH;
};

export const setPhoneNumber = (phoneNumber: string): SetPhoneNumberAction => ({
  type: SET_PHONE_NUMBER,
  data: {
    phoneNumber,
  },
});

export const generateOtp = (phoneNumber: string): GenerateOtpAction => ({
  type: GENERATE_OTP,
  data: { phoneNumber },
});

export const otpGenerated = (isSent: boolean): OtpGeneratedAction => ({
  type: OTP_GENERATED,
  data: {
    isSent,
  },
});

export const validateOtp = (
  phoneNumber: string,
  code: string,
): ValidateOtpAction => ({
  type: VALIDATE_OTP,
  data: {
    phoneNumber,
    code,
  },
});

export const resetAuth = (): ResetAuthAction => ({
  type: RESET_AUTH,
});

export type AuthActionTypes =
  | SetPhoneNumberAction
  | GenerateOtpAction
  | ValidateOtpAction
  | OtpGeneratedAction
  | ResetAuthAction;
