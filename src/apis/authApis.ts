import { fetchPost } from 'utils/fetch';

import DOMAINS from 'constants/domains';
import { SOURCE } from 'constants/miscData';

import { UserType } from 'types/userTypes';

const GENERATE_OTP = `${DOMAINS.USER}/otp/generate`;
const VALIDATE_OTP = `${DOMAINS.USER}/otp/validate`;

/**
 * Generates OTP
 *
 * @param phone_number user phone number
 */
export const generateOtp = async (phone_number: string) =>
  await fetchPost({
    url: GENERATE_OTP,
    data: {
      phone_number,
      source: SOURCE,
    },
  });

export const validateOtp = async (
  phone_number: string,
  code: string,
): Promise<UserType> =>
  await fetchPost({
    url: VALIDATE_OTP,
    data: {
      code,
      phone_number,
      source: SOURCE,
    },
  });
