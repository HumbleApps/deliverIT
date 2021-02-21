import STATUS from 'constants/status';
import colors from 'styles/colors';
import { VerificationCheckListType } from 'types/verificationTypes';

export const getDocumentStatus = (
  currentCheckList: any,
  instaVerificationStatus: STATUS | undefined = undefined,
) => {
  let currentStatus: STATUS | undefined = STATUS.UNKNOWN;
  let disableOnPress: boolean = false;
  let color: string = colors.white;
  if (currentCheckList?.is_submitted) {
    currentStatus = STATUS.UNDER_VERIFICATION;
    color = colors.info;
    disableOnPress = true;
  }
  if (
    currentCheckList?.is_submitted &&
    instaVerificationStatus === STATUS.UNINTIATED
  ) {
    currentStatus = STATUS.UPLOADED;
    disableOnPress = false;
  }
  if (currentCheckList?.is_verified) {
    currentStatus = STATUS.VERIFIED;
    color = colors.success;
    disableOnPress = true;
  } else if (currentCheckList?.is_rejected) {
    currentStatus = STATUS.REJECTED;
    color = colors.primary;
    disableOnPress = false;
  } else if (currentCheckList?.is_discarded) {
    currentStatus = STATUS.DISCARDED;
    color = colors.primary;
    disableOnPress = true;
  }
  return [currentStatus, color, disableOnPress];
};

export const getStatusColor = (status: STATUS | undefined) => {
  let color: string = colors.white;
  if (status === STATUS.UNDER_VERIFICATION) {
    color = colors.info;
  } else if (status === STATUS.VERIFIED) {
    color = colors.success;
  } else if (status === STATUS.REJECTED || status === STATUS.DISCARDED) {
    color = colors.primary;
  }
  return { color: color };
};

export const getProfileStatus = (
  status: STATUS | undefined,
  inv_status: STATUS | undefined,
) => {
  let currentStatus: STATUS = STATUS.UNKNOWN;
  let color: string = colors.white;
  if (
    status === STATUS.SUBMITTED ||
    (status === STATUS.UPLOADED &&
      (inv_status === STATUS.SUBMITTED || inv_status === STATUS.CLOSED))
  ) {
    currentStatus = STATUS.UNDER_VERIFICATION;
    color = colors.info;
  } else if (status === STATUS.REJECTED) {
    currentStatus = STATUS.REJECTED;
    color = colors.danger;
  } else if (status === STATUS.DISCARDED) {
    currentStatus = STATUS.DISCARDED;
    color = colors.danger;
  } else if (status === STATUS.VERIFIED) {
    currentStatus = STATUS.VERIFIED;
    color = colors.success;
  }
  return [currentStatus, color];
};

export const setReUploadParams = (checkProps: VerificationCheckListType) => {
  return {
    ...checkProps,
    is_submitted: false,
    is_rejected: false,
    is_discarded: false,
    is_verified: false,
  };
};

export const getDocSubmittedStatus = (status: any) => {
  let submitStatus = false;
  if (
    status?.is_submitted &&
    !status?.is_discarded &&
    !status?.is_verified &&
    !status?.is_rejected
  ) {
    submitStatus = true;
  }
  return submitStatus;
};
