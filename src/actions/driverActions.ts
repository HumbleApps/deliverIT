import { CreateDriverPayload } from 'types/driverTypes';
import { VerificationType } from 'types/verificationTypes';

export const GET_DRIVERS = 'GET_DRIVERS';
export const SET_DRIVERS = 'SET_DRIVERS';
export const CREATE_DRIVER = 'CREATE_DRIVER';
export const ADD_ONE_DRIVER = 'ADD_ONE_DRIVER';
export const UPDATE_DRIVER = 'UPDATE_DRIVER';
export const UPDATE_ONE_DRIVER = 'UPDATE_ONE_DRIVER';
export const GET_DRIVER_IN_USE = 'GET_DRIVER_IN_USE';

export type GetDriversAction = {
  type: typeof GET_DRIVERS;
  data: {
    driverIds: string[];
  };
};

export type SetDriversAction = {
  type: typeof SET_DRIVERS;
  data: {
    drivers: VerificationType[];
  };
};

export type CreateDriverAction = {
  type: typeof CREATE_DRIVER;
  data: CreateDriverPayload;
};

export type AddOneAction = {
  type: typeof ADD_ONE_DRIVER;
  data: VerificationType;
};

export type UpdateDriversAction = {
  type: typeof UPDATE_DRIVER;
  data: VerificationType;
};

export type UpdateOneAction = {
  type: typeof UPDATE_ONE_DRIVER;
  data: VerificationType;
};

export const getDrivers = (driverIds: string[]): GetDriversAction => ({
  type: GET_DRIVERS,
  data: {
    driverIds,
  },
});

export const setDrivers = (drivers: VerificationType[]): SetDriversAction => ({
  type: SET_DRIVERS,
  data: {
    drivers,
  },
});

export const createDriver = (
  payload: CreateDriverPayload,
): CreateDriverAction => ({
  type: CREATE_DRIVER,
  data: { ...payload },
});

export const addOne = (payload: VerificationType): AddOneAction => ({
  type: ADD_ONE_DRIVER,
  data: payload,
});

export const updateDriver = (
  payload: VerificationType,
): UpdateDriversAction => ({
  type: UPDATE_DRIVER,
  data: payload,
});

export const updateOne = (payload: VerificationType): UpdateOneAction => ({
  type: UPDATE_ONE_DRIVER,
  data: payload,
});

export const getDriverInUseStatus = (
  payload: any,
): getDriverInUseStatusAction => ({
  type: GET_DRIVER_IN_USE,
  data: payload,
});

export type getDriverInUseStatusAction = {
  type: typeof GET_DRIVER_IN_USE;
  data: any;
};

export type DriverActionsTypes =
  | GetDriversAction
  | SetDriversAction
  | CreateDriverAction
  | AddOneAction
  | UpdateDriversAction
  | UpdateOneAction
  | getDriverInUseStatusAction;
