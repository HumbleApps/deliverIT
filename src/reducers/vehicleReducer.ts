import {
  SET_VEHICLES,
  UPDATE_ONE_VEHICLE,
  ADD_ONE_VEHICLE,
  VehiclesActionTypes,
} from 'actions/vehicleActions';

import { VerificationType } from 'types/verificationTypes';

const initialState = {
  vehicles: [] as VerificationType[],
};

const vehicleReducer = (state = initialState, action: VehiclesActionTypes) => {
  switch (action.type) {
    case SET_VEHICLES: {
      return {
        ...state,
        vehicles: action.data.vehicles,
      };
    }
    case UPDATE_ONE_VEHICLE: {
      const vehicles = [...state.vehicles];
      const foundIndex = vehicles.findIndex((v) => v._id === action.data._id);

      if (foundIndex > -1) {
        vehicles[foundIndex] = action.data;
      }
      return {
        ...state,
        vehicles,
      };
    }

    case ADD_ONE_VEHICLE: {
      const vehicles = [...state.vehicles];

      vehicles.push(action.data);

      return {
        ...state,
        vehicles,
      };
    }
    default:
      return state;
  }
};

export default vehicleReducer;
