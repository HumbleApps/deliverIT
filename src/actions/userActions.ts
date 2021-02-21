import {
  UserType,
  CreateOrUpdateUserOrgPayLoad,
  UserStaticDetailsType,
} from 'types/userTypes';
import { CityType } from 'types/cityTypes';

import { OrgType } from 'types/orgTypes';

export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const GET_USER_FROM_TOKEN = 'GET_USER_FROM_TOKEN';
export const SET_CITIES = 'SET_CITIES';
export const SET_LANG = 'SET_LANG';
export const CREATE_USER_ORG = 'CREATE_USER_ORG';
export const SET_CITY = 'SET_CITY';
export const UPDATE_STATIC_DETAILS = 'UPDATE_STATIC_DETAILS';
export const SET_LT_ORG = 'SET_LT_ORG';
export const SET_FETCHING = 'SET_FETCHING';
export const UPDATE_USER_ORG = 'UPDATE_USER_ORG';

export type SetUserAction = {
  type: typeof SET_USER;
  data: {
    user: UserType;
  };
};

export type RemoveUserAction = {
  type: typeof REMOVE_USER;
};

export type LogoutAction = {
  type: typeof LOG_OUT;
};

export type GetUserFromTokenAction = {
  type: typeof GET_USER_FROM_TOKEN;
};

export type SetCitiesAction = {
  type: typeof SET_CITIES;
  data: {
    cities: CityType[];
  };
};

export type SetLanguageAction = {
  type: typeof SET_LANG;
  data: {
    lang: string;
  };
};

export type CreateUserOrgAction = {
  type: typeof CREATE_USER_ORG;
  data: {
    userOrg: CreateOrUpdateUserOrgPayLoad;
  };
};

export type SetCityAction = {
  type: typeof SET_CITY;
  data: {
    cityCode: string;
  };
};

export type SetLTOrgAction = {
  type: typeof SET_LT_ORG;
  data: {
    org: OrgType;
  };
};

export type UpdateStaticDetailsAction = {
  type: typeof UPDATE_STATIC_DETAILS;
  data: {
    userStaticDetails: UserStaticDetailsType;
    userId: number;
  };
};

export type SetFetchingAction = {
  type: typeof SET_FETCHING;
  data: {
    isFetching: boolean;
  };
};

export type UpdateUserOrgAction = {
  type: typeof UPDATE_USER_ORG;
  data: {
    payload: CreateOrUpdateUserOrgPayLoad;
    userId: number;
  };
};

export type UserActionsTypes =
  | SetUserAction
  | RemoveUserAction
  | LogoutAction
  | GetUserFromTokenAction
  | SetCitiesAction
  | SetLanguageAction
  | CreateUserOrgAction
  | SetCityAction
  | UpdateStaticDetailsAction
  | SetLTOrgAction
  | SetFetchingAction
  | UpdateUserOrgAction;

export const setUser = (user: UserType): SetUserAction => ({
  type: SET_USER,
  data: {
    user,
  },
});

export const removeUser = (): RemoveUserAction => ({
  type: REMOVE_USER,
});

export const logout = (): LogoutAction => ({
  type: LOG_OUT,
});

export const getUserFromToken = (): GetUserFromTokenAction => ({
  type: GET_USER_FROM_TOKEN,
});

export const setCities = (cities: CityType[]): SetCitiesAction => ({
  type: SET_CITIES,
  data: {
    cities,
  },
});
export const setLanguage = (lang: string): SetLanguageAction => ({
  type: SET_LANG,
  data: {
    lang,
  },
});

export const createUserOrg = (
  userOrg: CreateOrUpdateUserOrgPayLoad,
): CreateUserOrgAction => ({
  type: CREATE_USER_ORG,
  data: {
    userOrg,
  },
});

export const setCity = (cityCode: string): SetCityAction => ({
  type: SET_CITY,
  data: {
    cityCode,
  },
});

export const updateStaticDetails = (
  userId: number,
  userStaticDetails: UserStaticDetailsType,
): UpdateStaticDetailsAction => ({
  type: UPDATE_STATIC_DETAILS,
  data: {
    userStaticDetails,
    userId,
  },
});

export const setLtOrg = (org: OrgType): SetLTOrgAction => ({
  type: SET_LT_ORG,
  data: {
    org,
  },
});

export const setFetching = (isFetching: boolean): SetFetchingAction => ({
  type: SET_FETCHING,
  data: {
    isFetching,
  },
});

export const updateUserOrg = (
  userId: number,
  payload: CreateOrUpdateUserOrgPayLoad,
): UpdateUserOrgAction => ({
  type: UPDATE_USER_ORG,
  data: {
    userId,
    payload,
  },
});
