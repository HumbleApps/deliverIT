import DOMAINS from 'constants/domains';

import { fetchPost, fetchPut } from 'utils/fetch';

import {
  VerificationType,
  CreateVehiclePayload,
} from 'types/verificationTypes';

const FETCH_VEHICLES_MULTI = `${DOMAINS.DRIVER}/verifications/getmulti`;
const CREATE_VEHICLE = `${DOMAINS.DRIVER}/verifications`;
const UPDATE_VEHICLE = `${DOMAINS.DRIVER}/verification/:id`;

export const fetchVehiclesMulti = (
  ids: string[],
): Promise<VerificationType[]> =>
  fetchPost({
    url: FETCH_VEHICLES_MULTI,
    data: {
      ids,
    },
  });

export const createVehicle = async (
  payload: CreateVehiclePayload,
): Promise<VerificationType> =>
  await fetchPost({
    url: CREATE_VEHICLE,
    data: payload,
  });

export const updateVehicle = async (
  vehicleVerification: VerificationType,
): Promise<VerificationType> => {
  const { _id, ...rest } = vehicleVerification;
  return await fetchPut({
    url: UPDATE_VEHICLE.replace(':id', _id),
    data: rest,
  });
};
