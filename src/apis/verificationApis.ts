import DOMAINS from 'constants/domains';

import { fetchGet, fetchPost, fetchPut } from 'utils/fetch';
import {
  VerificationType,
  CreateVerificationPayloadType,
} from 'types/verificationTypes';
import { UserType } from 'types/userTypes';

import { VerificationTypeKey } from 'constants/verification';

export const VERIFICATION = `${DOMAINS.DRIVER}/verification/:type`;
export const CREATE_VERIFICATION = `${DOMAINS.DRIVER}/verifications`;
export const GET_VERIFICATION = `${VERIFICATION}/entitykey/:phoneNumber`;
export const UPDATE_VERIFICATION = `${DOMAINS.DRIVER}/verification/:id`;
export const SEND_TO_INSTAVERITAS_API = `${DOMAINS.DRIVER}/verification/:id/sendtoinstaveritas`;
export const VALIDATE_IFSC_CODE_API = 'https://ifsc.letstransport.in/:ifscCode';

export const fetchVerification = async (
  phoneNumber: number,
  type: VerificationTypeKey,
): Promise<VerificationType> => {
  const url = GET_VERIFICATION.replace(':type', type);

  return await fetchGet({
    url: url.replace(':phoneNumber', phoneNumber.toString()),
  });
};

export const createVerification = async (
  cityOrgId: number,
  user: UserType,
): Promise<VerificationType> => {
  const payload: CreateVerificationPayloadType = {
    created_by: user.id,
    entity_key: user.phone_number.toString(),
    organization: cityOrgId,
    verification_type: VerificationTypeKey.owner_verification,
    verification_payload: {
      owner_name: user.name,
      owner_organization_id: user.id,
      owner_number: user.phone_number.toString(),
      city: user.city,
    },
  };

  return await fetchPost({
    url: CREATE_VERIFICATION,
    data: payload,
  });
};

export const updateVerification = async (
  verification: VerificationType,
): Promise<VerificationType> => {
  const { _id, ...rest } = verification;
  // console.log(UPDATE_VERIFICATION.replace(':id', _id), rest);
  return await fetchPut({
    url: UPDATE_VERIFICATION.replace(':id', _id),
    data: rest,
  });
};

export const sendToInstaVeritas = async (
  groups: string[],
  verificationId: string,
) => {
  const payload = {
    groups: groups,
  };
  return await fetchPost({
    url: SEND_TO_INSTAVERITAS_API.replace(':id', verificationId),
    data: payload,
  });
};

export const validateIfscCode = async (ifscCode: string) => {
  return await fetchGet({
    url: VALIDATE_IFSC_CODE_API.replace(':ifscCode', ifscCode),
  });
};
