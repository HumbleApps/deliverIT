import { UserType } from 'types/userTypes';
import { CityType } from 'types/cityTypes';
import { OrgType } from 'types/orgTypes';

import {
  SET_USER,
  REMOVE_USER,
  SET_CITIES,
  SET_LANG,
  SET_CITY,
  SET_LT_ORG,
  SET_FETCHING,
  UserActionsTypes,
} from 'actions/userActions';

type InitialState = {
  details: UserType;
  isAuthenticated: boolean;
  cities: CityType[];
  city: string;
  organization: OrgType;
  isFetching: boolean;
};

const initialState: InitialState = {
  details: {} as UserType,
  isAuthenticated: false,
  cities: [] as CityType[],
  city: 'bang',
  organization: {} as OrgType,
  isFetching: true,
};

const reducer = (state = initialState, action: UserActionsTypes) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        isOtpSent: false,
        details: action.data.user,
        isAuthenticated: true,
      };
    }
    case REMOVE_USER: {
      return initialState;
    }

    case SET_CITIES: {
      return {
        ...state,
        cities: action.data.cities,
      };
    }

    case SET_LANG: {
      return {
        ...state,
        details: {
          ...state.details,
          language: action.data.lang,
        },
      };
    }

    case SET_CITY: {
      return {
        ...state,
        city: action.data.cityCode,
      };
    }

    case SET_LT_ORG: {
      return {
        ...state,
        organization: action.data.org,
      };
    }

    case SET_FETCHING: {
      return {
        ...state,
        isFetching: action.data.isFetching,
      };
    }

    default:
      return state;
  }
};
export default reducer;
