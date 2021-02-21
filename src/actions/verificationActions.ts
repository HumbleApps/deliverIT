import { VerificationType } from 'types/verificationTypes';
import { VerificationTypeKey } from 'constants/verification';

export const GET_VERIFICATION = 'GET_VERIFICATION';
export const SET_VERIFICATION = 'SET_VERIFICATION';
export const CREATE_VERIFICATION = 'CREATE_VERIFICATION';
export const UPDATE_VERIFICATION = 'UPDATE_VERIFICATION';
export const SEND_TO_INSTAVERITAS = 'SEND_TO_INSTAVERITAS';
export const VALIDATE_IFSC_AND_SUBMIT = 'VALIDATE_IFSC_AND_SUBMIT';
export const UPDATE_CONNECTION = 'UPDATE_CONNECTION';

export type GetVerificationAction = {
  type: typeof GET_VERIFICATION;
  data: {
    phoneNumber: number;
  };
};

export type SetVerificationAction = {
  type: typeof SET_VERIFICATION;
  data: {
    verification: VerificationType;
  };
};

export type UpdateVerificationAction = {
  type: typeof UPDATE_VERIFICATION;
  data: {
    verification: VerificationType;
  };
};

export type UpdateConnectionAction = {
  type: typeof UPDATE_CONNECTION;
  data: {
    type:
      | VerificationTypeKey.vehicle_verification
      | VerificationTypeKey.driver_verification;
    ids: string[];
  };
};

export type VerificationActionTypes =
  | GetVerificationAction
  | SetVerificationAction
  | UpdateVerificationAction
  | UpdateConnectionAction;

export const getVerification = (phoneNumber: number): GetVerificationAction => {
  return {
    type: GET_VERIFICATION,
    data: {
      phoneNumber,
    },
  };
};

export type InstaVeritasAction = {
  type: typeof SEND_TO_INSTAVERITAS;
  data: {
    groups: string[];
    verificationId: string;
    docType: string;
  };
};

export type ValidateIfscAndSubmitAction = {
  type: typeof VALIDATE_IFSC_AND_SUBMIT;
  data: {
    ifscCode: string;
    verification: VerificationType;
  };
};

export const setVerification = (
  verification: VerificationType,
): SetVerificationAction => {
  return {
    type: SET_VERIFICATION,
    data: {
      verification,
    },
  };
};

export const updateVerification = (
  verification: VerificationType,
): UpdateVerificationAction => {
  return {
    type: UPDATE_VERIFICATION,
    data: {
      verification,
    },
  };
};

export const sendToInstaVeritas = (
  groups: string[],
  verificationId: string,
  docType: string,
) => {
  return {
    type: SEND_TO_INSTAVERITAS,
    data: {
      groups,
      verificationId,
      docType,
    },
  };
};

export const validateIfscAndSubmit = (
  ifscCode: string,
  verification: VerificationType,
) => {
  return {
    type: VALIDATE_IFSC_AND_SUBMIT,
    data: {
      ifscCode,
      verification,
    },
  };
};
export const updateConnection = (
  type:
    | VerificationTypeKey.driver_verification
    | VerificationTypeKey.vehicle_verification,
  ids: string[],
): UpdateConnectionAction => ({
  type: UPDATE_CONNECTION,
  data: {
    type,
    ids,
  },
});
