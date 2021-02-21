import DOMAINS from 'constants/domains';

import { fetchPost, fetchPut } from 'utils/fetch';

import { CreateDriverPayload } from 'types/driverTypes';
import { VerificationType } from 'types/verificationTypes';

const FETCH_DRIVERS_MULTI = `${DOMAINS.DRIVER}/verifications/getmulti`;
const CREATE_DRIVER = `${DOMAINS.DRIVER}/verifications`;
const UPDATE_DRIVER = `${DOMAINS.DRIVER}/verification/:id`;
const GET_DRIVER_IN_USE = `${DOMAINS.REAL_TIME}/driver/bookingstatus`;

export const fetchDrivers = (ids: string[]): Promise<VerificationType[]> =>
  fetchPost({
    url: FETCH_DRIVERS_MULTI,
    data: {
      ids,
    },
  });

export const createDriver = (
  payload: CreateDriverPayload,
): Promise<VerificationType> =>
  fetchPost({
    url: CREATE_DRIVER,
    data: payload,
  });

export const updateDriver = async (
  vehicleVerification: VerificationType,
): Promise<VerificationType> => {
  const { _id, ...rest } = vehicleVerification;
  return await fetchPut({
    url: UPDATE_DRIVER.replace(':id', _id),
    data: rest,
  });
};

export const getDriverInUseStatus = async (payload: any) => {
  return await fetchPost({
    url: GET_DRIVER_IN_USE,
    data: payload,
  });
};
