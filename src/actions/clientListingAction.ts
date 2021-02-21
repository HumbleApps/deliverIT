import {
  ClientListingFetchPayload,
  UpdateClientListingPayload,
  ClientListingType,
} from 'types/clientListingTypes';

export const GET_CLIENT = 'GET_CLIENT';
export const SET_CLIENT = 'SET_CLIENT';
export const SET_NEXT = 'SET_NEXT';
export const SET_SKIP = 'SET_SKIP';
export const RESET_SKIP = 'RESET_SKIP';
export const SET_CURRENT_BOOKING = 'SET_CURRENT_BOOKING';
export const UPDATE_CLIENT_LISTING = 'UPDATE_CLIENT_LISTING';
export const GET_CLIENT_BY_ID = 'GET_CLIENT_BY_ID';
export const SET_CLIENT_BY_ID = 'SET_CLIENT_BY_ID';
export const GET_VEHICLES_BOOKING_STATUS = 'GET_VEHICLES_BOOKING_STATUS';
export const SET_VEHICLES_BOOKING_STATUS = 'SET_VEHICLES_BOOKING_STATUS';
export const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
export const SET_DRIVER_IN_USE = 'SET_DRIVER_IN_USE';
export const ADD_CLIENT_ITEMS = 'ADD_CLIENT_ITEMS';
export const FETCH_MORE_CLIENT_ITEMS = 'FETCH_MORE_CLIENT_ITEMS';

export type GetClientAction = {
  type: typeof GET_CLIENT;
  data: ClientListingFetchPayload;
};

export type SetClientAction = {
  type: typeof SET_CLIENT;
  data: {
    clients: ClientListingType[];
  };
};

export type AddClientItemsAction = {
  type: typeof ADD_CLIENT_ITEMS;
  data: {
    clients: ClientListingType[];
  };
};

export type FetchMoreClientItemsAction = {
  type: typeof FETCH_MORE_CLIENT_ITEMS;
  data: ClientListingFetchPayload;
};

export type SetNextAction = {
  type: typeof SET_NEXT;
  data: {
    next: boolean;
  };
};

export type SetSkipAction = {
  type: typeof SET_SKIP;
};

export type ReSetSkipAction = {
  type: typeof RESET_SKIP;
};

export type SetCurrentBookingAction = {
  type: typeof SET_CURRENT_BOOKING;
  data: {
    currentBooking: UpdateClientListingPayload;
  };
};

export type UpdateClientListingAction = {
  type: typeof UPDATE_CLIENT_LISTING;
  data: {
    payload: UpdateClientListingPayload;
  };
};

export const getClient = (
  payload: ClientListingFetchPayload,
): GetClientAction => {
  return {
    type: GET_CLIENT,
    data: payload,
  };
};

export const setClient = (clients: any[]): SetClientAction => {
  return {
    type: SET_CLIENT,
    data: {
      clients,
    },
  };
};

export const addClientItems = (clients: any[]): AddClientItemsAction => {
  return {
    type: ADD_CLIENT_ITEMS,
    data: {
      clients,
    },
  };
};

export const fetchMoreClientItems = (
  payload: ClientListingFetchPayload,
): FetchMoreClientItemsAction => {
  return {
    type: FETCH_MORE_CLIENT_ITEMS,
    data: payload,
  };
};

export const setNext = (next: boolean): SetNextAction => {
  return {
    type: SET_NEXT,
    data: {
      next,
    },
  };
};

export const setSkip = (): SetSkipAction => ({
  type: SET_SKIP,
});

export const resetSkip = (): ReSetSkipAction => ({
  type: RESET_SKIP,
});

export const setCurrentBooking = (
  payload: UpdateClientListingPayload,
): SetCurrentBookingAction => ({
  type: SET_CURRENT_BOOKING,
  data: {
    currentBooking: payload,
  },
});

export const updateClientListing = (
  payload: UpdateClientListingPayload,
): UpdateClientListingAction => ({
  type: UPDATE_CLIENT_LISTING,
  data: {
    payload,
  },
});

export const getClientById = (id: string) => {
  return {
    type: GET_CLIENT_BY_ID,
    data: id,
  };
};

export type GetClientByIdAction = {
  type: typeof GET_CLIENT_BY_ID;
  data: string;
};

export const setClientById = (client: any): SetClientByIdAction => {
  return {
    type: SET_CLIENT_BY_ID,
    data: client,
  };
};

export type SetClientByIdAction = {
  type: typeof SET_CLIENT_BY_ID;
  data: any;
};

export const getVehiclesBookingStatus = (
  payload: GetVehiclesBookingStatusAction,
) => {
  return {
    type: GET_VEHICLES_BOOKING_STATUS,
    data: payload,
  };
};

export type GetVehiclesBookingStatusAction = {
  type: typeof GET_VEHICLES_BOOKING_STATUS;
  data: {
    vehicleList: string[];
    pickUpAt: number;
    estimatedTime: number;
  };
};

export const setVehiclesBookingStatus = (
  data: any,
): SetVehiclesBookingStatusAction => {
  return {
    type: SET_VEHICLES_BOOKING_STATUS,
    data,
  };
};

export type SetVehiclesBookingStatusAction = {
  type: typeof SET_VEHICLES_BOOKING_STATUS;
  data: any;
};

export const setCurrentClient = (data: any): SetCurrentClientAction => {
  return {
    type: SET_CURRENT_CLIENT,
    data,
  };
};

export type SetCurrentClientAction = {
  type: typeof SET_CURRENT_CLIENT;
  data: any;
};

export const setDriversInUseStatus = (payload: any): setDriversInUseAction => ({
  type: SET_DRIVER_IN_USE,
  data: payload,
});

export type setDriversInUseAction = {
  type: typeof SET_DRIVER_IN_USE;
  data: any;
};

export type ClientActionsTypes =
  | GetClientAction
  | SetClientAction
  | SetNextAction
  | SetSkipAction
  | SetCurrentBookingAction
  | GetClientByIdAction
  | SetClientByIdAction
  | GetVehiclesBookingStatusAction
  | SetVehiclesBookingStatusAction
  | SetCurrentClientAction
  | setDriversInUseAction
  | AddClientItemsAction
  | FetchMoreClientItemsAction
  | ReSetSkipAction;
