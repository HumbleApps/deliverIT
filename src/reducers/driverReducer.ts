import { VerificationType } from 'types/verificationTypes';

import {
  UPDATE_ONE_DRIVER,
  ADD_ONE_DRIVER,
  SET_DRIVERS,
  DriverActionsTypes,
} from 'actions/driverActions';

const initialState = [] as VerificationType[];

const driverReducer = (state = initialState, action: DriverActionsTypes) => {
  switch (action.type) {
    case ADD_ONE_DRIVER: {
      return [...state, action.data];
    }
    case SET_DRIVERS: {
      return [...action.data.drivers];
    }
    case UPDATE_ONE_DRIVER: {
      const drivers = [...state];
      const foundIndex = drivers.findIndex((v) => v._id === action.data._id);

      if (foundIndex > -1) {
        drivers[foundIndex] = action.data;
      }
      return drivers;
      //return [...state, drivers];
    }
    default:
      return state;
  }
};

export default driverReducer;
