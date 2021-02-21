import { VehicleTypeType, WorkType } from 'types/assetTypes';

export const FETCH_VEHICLE_TYPES = 'FETCH_VEHICLE_TYPES';
export const SET_VEHICLE_TYPES = 'SET_VEHICLE_TYPES';
export const GET_WORK_TYPE = 'GET_WORK_TYPE';
export const SET_WORK_TYPE = 'SET_WORK_TYPE';
export const GET_VEHICLE_TYPE = 'GET_VEHICLE_TYPE';
export const SET_VEHICLE_TYPE = 'SET_VEHICLE_TYPE';

export const GET_VEHICLE = 'GET_VEHICLE';
export const SET_VEHICLE = 'SET_VEHICLE';

export type FetchVehicleTypesAction = {
  type: typeof FETCH_VEHICLE_TYPES;
};

export type SetVehicleTypeAction = {
  type: typeof SET_VEHICLE_TYPES;
  data: VehicleTypeType[];
};

export type GetWorkTypeAction = {
  type: typeof GET_WORK_TYPE;
  data: {
    id: number;
  };
};

export type SetWorkTypeAction = {
  type: typeof SET_WORK_TYPE;
  data: {
    WorkType: WorkType;
  };
};

export type GetVehicleTypeAction = {
  type: typeof GET_VEHICLE_TYPE;
  data: {
    id: number;
  };
};

export type SetVehicleAction = {
  type: typeof SET_VEHICLE;
  data: {
    VehicleType: VehicleTypeType;
  };
};

export type AssetActionTypes =
  | FetchVehicleTypesAction
  | SetVehicleTypeAction
  | GetWorkTypeAction
  | SetWorkTypeAction
  | GetVehicleTypeAction
  | SetVehicleAction;

export const fetchVehicleTypes = (): FetchVehicleTypesAction => ({
  type: FETCH_VEHICLE_TYPES,
});

export const setVehicleTypes = (
  vehicleTypes: VehicleTypeType[],
): SetVehicleTypeAction => ({
  type: SET_VEHICLE_TYPES,
  data: vehicleTypes,
});

export const getWorkType = (id: number): GetWorkTypeAction => ({
  type: GET_WORK_TYPE,
  data: {
    id,
  },
});

export const setWorkType = (WorkType: WorkType): SetWorkTypeAction => {
  return {
    type: SET_WORK_TYPE,
    data: {
      WorkType: WorkType,
    },
  };
};

export const getVehicleType = (id: number): GetVehicleTypeAction => ({
  type: GET_VEHICLE_TYPE,
  data: {
    id,
  },
});

export const setVehicleType = (
  VehicleType: VehicleTypeType,
): SetVehicleAction => {
  return {
    type: SET_VEHICLE,
    data: {
      VehicleType,
    },
  };
};
