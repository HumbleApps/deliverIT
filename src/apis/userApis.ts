import { fetchPost, fetchGet, fetchPut } from 'utils/fetch';

import DOMAINS from 'constants/domains';

import {
  UserType,
  UserLoginPayload,
  CreateOrUpdateUserOrgPayLoad,
  UserStaticDetailsType,
} from 'types/userTypes';
import { CityType } from 'types/cityTypes';
import { LTUserType } from 'constants/user';
import { SOURCE } from 'constants/miscData';

const LOG_OUT = `${DOMAINS.USER}/logout`;
const GET_USER = `${DOMAINS.USER}/partnerapp/login`;
const ORG = `${DOMAINS.USER}/organization`;
const DRIVER = `${DOMAINS.USER}/driver`;
const ORG_SEARCH = `${ORG}/search`;
const GET_CITIES = `${DOMAINS.USER}/cities/active`;
const CREATE_ORG = `${DOMAINS.USER}/organizations`;
const STATIC_DETAILS = `${DOMAINS.USER}/:type/:id`;
const FCM_TOKEN = `${DOMAINS.REAL_TIME}/fcmtokens`;

export const logout = async () =>
  await fetchGet({
    url: LOG_OUT,
  });

export const getUser = async (): Promise<UserLoginPayload> =>
  await fetchPost({
    url: GET_USER,
    data: {
      lang: 'en',
      unique_device_id: null,
    },
  });

export const getCityOrg = async (city: string): Promise<UserType[]> =>
  await fetchPost({
    url: ORG_SEARCH,
    data: {
      where: [
        {
          key: 'is_lt',
          value: true,
          logic: '=',
        },
        {
          key: 'city',
          value: city,
          logic: '=',
          condition: 'AND',
        },
        {
          key: 'type',
          value: 'demand',
          logic: '=',
          condition: 'AND',
        },
      ],
    },
  });

export const fetchCities = async (): Promise<CityType[]> =>
  await fetchGet({
    url: GET_CITIES,
  });

export const createUserOrg = async (
  user: CreateOrUpdateUserOrgPayLoad,
): Promise<UserLoginPayload> => {
  const { phoneNumber, name, ...rest } = user;

  const response = await fetchPost({
    url: CREATE_ORG,
    data: {
      phone_number: phoneNumber,
      primary_contact_number: phoneNumber,
      primary_contact_name: name,
      name,
      user_name: phoneNumber,
      type: 'supply',
      code: phoneNumber,
      is_lt: false,
      ...rest,
    },
  });

  return response;
};

export const updateUserOrg = async (
  userId: number,
  payload: CreateOrUpdateUserOrgPayLoad,
  type: LTUserType,
): Promise<UserType> =>
  await fetchPut({
    url:
      type === LTUserType.Driver
        ? `${DRIVER}/${userId.toString()}`
        : `${ORG}/${userId.toString()}`,
    data: payload,
  });

export const updateStaticDetails = async (
  userId: number,
  userStaticDetails: UserStaticDetailsType,
  type: LTUserType,
): Promise<UserType> => {
  const url = STATIC_DETAILS.replace(':type', type.toLowerCase());
  console.log('url---->', url);
  return await fetchPut({
    url: url.replace(':id', userId.toString()),
    data: {
      user_details: userStaticDetails,
    },
  });
};

export const sendFCMToken = async (
  user_id: number,
  unique_device_id: string,
  fcm_token: string,
) =>
  await fetchPost({
    url: FCM_TOKEN,
    data: {
      // TODO: remove this after backend integration
      source: SOURCE,
      user_id,
      unique_device_id,
      fcm_token,
    },
  });
