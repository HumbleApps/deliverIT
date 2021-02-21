import { VehicleTypeType, MaterialType, WorkType } from 'types/assetTypes';

import {
  SET_ALL_MATERIALS,
  SET_ALL_WORKS,
  SET_ALL_VEHICLES_TYPES,
  AllAssetsActionTypes,
} from 'actions/allAssetsActions';

type InitialState = {
  vehicleTypes: VehicleTypeType[];
  materials: MaterialType[];
  works: WorkType[];
};

const initialState: InitialState = {
  vehicleTypes: [],
  materials: [],
  works: [],
};

const assetReducer = (state = initialState, action: AllAssetsActionTypes) => {
  switch (action.type) {
    case SET_ALL_MATERIALS: {
      return {
        ...state,
        materials: action.data,
      };
    }

    case SET_ALL_WORKS: {
      return {
        ...state,
        works: action.data,
      };
    }

    case SET_ALL_VEHICLES_TYPES: {
      return {
        ...state,
        vehicleTypes: action.data,
      };
    }
    default:
      return state;
  }
};

export default assetReducer;
