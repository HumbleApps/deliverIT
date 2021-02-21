import {
  VerificationType,
  CreateVehiclePayload,
} from 'types/verificationTypes';

export const GET_VEHICLES = 'GET_VEHICLES';
export const SET_VEHICLES = 'SET_VEHICLES';
export const CREATE_VEHICLE = 'CREATE_VEHICLE';
export const UPDATE_VEHICLE = 'UPDATE_VEHICLE';
export const UPDATE_ONE_VEHICLE = 'UPDATE_ONE_VEHICLE';
export const ADD_ONE_VEHICLE = 'ADD_ONE_VEHICLE';

export type GetVehiclesAction = {
  type: typeof GET_VEHICLES;
  data: {
    vehicleIds: string[];
  };
};

export type SetVehiclesAction = {
  type: typeof SET_VEHICLES;
  data: {
    vehicles: VerificationType[];
  };
};

export type CreateVehiclesAction = {
  type: typeof CREATE_VEHICLE;
  data: CreateVehiclePayload;
};

export type UpdateVehiclesAction = {
  type: typeof UPDATE_VEHICLE;
  data: VerificationType;
};

export type UpdateOneAction = {
  type: typeof UPDATE_ONE_VEHICLE;
  data: VerificationType;
};

export type AddOneAction = {
  type: typeof ADD_ONE_VEHICLE;
  data: VerificationType;
};

export type VehiclesActionTypes =
  | GetVehiclesAction
  | SetVehiclesAction
  | CreateVehiclesAction
  | UpdateVehiclesAction
  | UpdateOneAction
  | AddOneAction;

export const getVehicles = (vehicleIds: string[]): GetVehiclesAction => ({
  type: GET_VEHICLES,
  data: {
    vehicleIds,
  },
});

export const setVehicles = (
  vehicles: VerificationType[],
): SetVehiclesAction => ({
  type: SET_VEHICLES,
  data: {
    vehicles,
  },
});

export const createVehicle = (
  payload: CreateVehiclePayload,
): CreateVehiclesAction => ({
  type: CREATE_VEHICLE,
  data: payload,
});

export const updateVehicle = (
  payload: VerificationType,
): UpdateVehiclesAction => ({
  type: UPDATE_VEHICLE,
  data: payload,
});

export const updateOne = (payload: VerificationType): UpdateOneAction => ({
  type: UPDATE_ONE_VEHICLE,
  data: payload,
});

export const addOne = (payload: VerificationType): AddOneAction => ({
  type: ADD_ONE_VEHICLE,
  data: payload,
});
