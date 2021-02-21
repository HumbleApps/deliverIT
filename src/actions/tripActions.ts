import { TripItem, HubItem } from 'types/tripTypes';
import { VerificationType } from 'types/verificationTypes';

/* --------- Action Types ----------- */
export const GET_DRIVER_TRIPS = 'GET_DRIVER_TRIPS';
export const SET_DRIVER_TRIPS = 'SET_DRIVER_TRIPS';
export const GET_PARTNER_TRIPS = 'GET_PARTNER_TRIPS';
export const SET_PARTNER_TRIPS = 'SET_PARTNER_TRIPS';
export const SET_IS_NEXT_TRIP_ITEMS_FETCHABLE =
  'SET_IS_NEXT_TRIP_ITEMS_FETCHABLE';
export const FETCH_MORE_DRIVER_TRIP_ITEMS = 'FETCH_MORE_DRIVER_TRIP_ITEMS';
export const FETCH_MORE_PARTNER_TRIP_ITEMS = 'FETCH_MORE_PARTNER_TRIP_ITEMS';
export const ADD_TRIP_ITEMS = 'ADD_TRIP_ITEMS';
export const GET_TRIP_DETAILS = 'GET_TRIP_DETAILS';
export const SET_TRIP_DETAILS = 'SET_TRIP_DETAILS';
export const UPDATE_TRIP_DETAILS = 'UPDATE_TRIP_DETAILS';
export const GET_HUB_LIST = 'GET_HUB_LIST';
export const SET_HUB_LIST = 'SET_HUB_LIST';
export const ADD_HUB_ITEMS = 'FETCH_MORE_HUB_ITEMS';
export const START_TRIP = 'START_TRIP';
export const END_TRIP = 'END _TRIP';
export const CANCEL_TRIP = 'CANCEL_TRIP';
export const SET_TRIP_START_INDICATOR = 'SET_TRIP_START_INDICATOR';
export const SET_TRIP_END_INDICATOR = 'SET_TRIP_END_INDICATOR';
export const SET_TRIP_CANCEL_INDICATOR = 'SET_TRIP_CANCEL_INDICATOR';
export const SET_TRIP_HELP_INDICATOR = 'SET_TRIP_HELP_INDICATOR';
export const SET_TRIP_UPDATE_INDICATOR = 'SET_TRIP_UPDATE_INDICATOR';
export const SET_TRIP_MANAGEMENT_MODAL = 'SET_TRIP_MANAGEMENT_MODAL';
export const FETCH_VEHICLE_LIST = 'FETCH_VEHICLE_LIST';
export const SET_VEHICLE_LIST = 'SET_TRIP_VEHICLE_LIST';
export const SET_DRIVER_LIST = 'SET_TRIP_DRIVER_LIST';
export const CREATE_HELP_TICKET = 'CREATE_HELP_TICKET';
export const FETCH_DRIVER_LIST = 'FETCH_DRIVER_LIST';

/* ------- Action Related Types ---------- */
export type TripsQuery = {
  pageNumber: number;
  limit: number;
  startTime?: number;
  endTime?: number;
  status: string;
};

type TripsParam = {
  userPhoneNumber: number;
};

type TripsData = {
  query: TripsQuery;
  params: TripsParam;
};

type CancelTripPayload = {
  cancelled_by: string;
  cancel_reason: string;
  status: string;
};

type HelpTicketPayload = {
  subject: string;
  source: string;
  vehicleNumber: string;
  city: string;
};

/* ------ Action Data Types ------ */

export type GetDriverTripsAction = {
  type: typeof GET_DRIVER_TRIPS;
  data: TripsData;
};

export type SetDriverTripsAction = {
  type: typeof SET_DRIVER_TRIPS;
  data: {
    trips: any[];
  };
};

export type GetPartnerTripsAction = {
  type: typeof GET_PARTNER_TRIPS;
  data: TripsData;
};

export type SetPartnerTripsAction = {
  type: typeof SET_PARTNER_TRIPS;
  data: {
    trips: any[];
  };
};

export type GetTripDetailsAction = {
  type: typeof GET_TRIP_DETAILS;
  data: {
    tripId: string;
  };
};

export type SetTripDetailsAction = {
  type: typeof SET_TRIP_DETAILS;
  data: {
    trip: TripItem;
  };
};

export type SetHubListAction = {
  type: typeof SET_HUB_LIST;
  data: {
    hubs: { [key: string]: HubItem };
  };
};

export type AddHubItemsAction = {
  type: typeof ADD_HUB_ITEMS;
  data: {
    hubs: { [key: string]: HubItem };
  };
};

export type FetchMoreDriverTripItemsAction = {
  type: typeof FETCH_MORE_DRIVER_TRIP_ITEMS;
  data: TripsData;
};

export type FetchMorePartnerTripItemsAction = {
  type: typeof FETCH_MORE_PARTNER_TRIP_ITEMS;
  data: TripsData;
};

export type AddTripItemsAction = {
  type: typeof ADD_TRIP_ITEMS;
  data: {
    trips: any[];
  };
};

export type SetIsNextTripsFetchableAction = {
  type: typeof SET_IS_NEXT_TRIP_ITEMS_FETCHABLE;
  data: {
    isNextTripItemsFetchable: boolean;
  };
};

export type StartTripAction = {
  type: typeof START_TRIP;
  data: {
    tripId: string;
  };
};

export type EndTripAction = {
  type: typeof END_TRIP;
  data: {
    tripId: string;
  };
};

export type CancelTripAction = {
  type: typeof CANCEL_TRIP;
  data: {
    tripId: string;
    payload: CancelTripPayload;
  };
};

export type SetTripStartIndicatorAction = {
  type: typeof SET_TRIP_START_INDICATOR;
  data: {
    tripStartIndicator: boolean;
  };
};

export type SetTripEndIndicatorAction = {
  type: typeof SET_TRIP_END_INDICATOR;
  data: {
    tripEndIndicator: boolean;
  };
};

export type SetTripCancelIndicatorAction = {
  type: typeof SET_TRIP_CANCEL_INDICATOR;
  data: {
    tripCancelIndicator: boolean;
  };
};

export type SetTripHelpIndicatorAction = {
  type: typeof SET_TRIP_HELP_INDICATOR;
  data: {
    tripHelpIndicator: boolean;
  };
};

export type SetTripUpdateIndicatorAction = {
  type: typeof SET_TRIP_UPDATE_INDICATOR;
  data: {
    tripUpdateIndicator: boolean;
  };
};

export type SetTripManagementModalAction = {
  type: typeof SET_TRIP_MANAGEMENT_MODAL;
  data: null | {
    modalName: string;
    modalData: any;
  };
};

export type FetchVehicleListAction = {
  type: typeof FETCH_VEHICLE_LIST;
  data: {
    tripPickupAt: number;
    estimatedTime: number;
    vehicleIds: string[];
  };
};

export type FetchDriverListAction = {
  type: typeof FETCH_DRIVER_LIST;
  data: {
    tripPickupAt: number;
    estimatedTime: number;
    driverIds: string[];
  };
};

export type SetVehicleListAction = {
  type: typeof SET_VEHICLE_LIST;
  data: {
    vehicleList: { vehicleDetails: VerificationType; inUseStatus: boolean }[];
  };
};

export type SetDriverListAction = {
  type: typeof SET_DRIVER_LIST;
  data: {
    driverList: {
      driverDetails: VerificationType;
      inUseStatus: boolean;
    }[];
  };
};

export type CreateHelpTicketAction = {
  type: typeof CREATE_HELP_TICKET;
  data: {
    payload: HelpTicketPayload;
  };
};

export type UpdateTripDetailsAction = {
  type: typeof UPDATE_TRIP_DETAILS;
  data: {
    payload: {
      vehicle_no?: string;
      driver_contact?: string;
    };
    bookingId: string;
  };
};
/* ------ Action Creator For Trip Management ------- */

export const getDriverTrips = (
  query: TripsQuery,
  params: TripsParam,
): GetDriverTripsAction => {
  return {
    type: GET_DRIVER_TRIPS,
    data: {
      query,
      params,
    },
  };
};

export const fetchMoreDriverTripItems = (
  query: TripsQuery,
  params: TripsParam,
): FetchMoreDriverTripItemsAction => {
  return {
    type: FETCH_MORE_DRIVER_TRIP_ITEMS,
    data: {
      query,
      params,
    },
  };
};
export const setDriverTrips = (trips: any[]): SetDriverTripsAction => {
  return {
    type: SET_DRIVER_TRIPS,
    data: {
      trips,
    },
  };
};

export const getPartnerTrips = (
  query: TripsQuery,
  params: TripsParam,
): GetPartnerTripsAction => {
  return {
    type: GET_PARTNER_TRIPS,
    data: {
      query,
      params,
    },
  };
};

export const fetchMorePartnerTripItems = (
  query: TripsQuery,
  params: TripsParam,
): FetchMorePartnerTripItemsAction => {
  return {
    type: FETCH_MORE_PARTNER_TRIP_ITEMS,
    data: {
      query,
      params,
    },
  };
};

export const setPartnerTrips = (trips: any[]): SetPartnerTripsAction => {
  return {
    type: SET_PARTNER_TRIPS,
    data: {
      trips,
    },
  };
};

export const getTripDetails = (tripId: string): GetTripDetailsAction => {
  return {
    type: GET_TRIP_DETAILS,
    data: {
      tripId,
    },
  };
};

export const setHubList = (hubList: {
  [key: string]: HubItem;
}): SetHubListAction => {
  return {
    type: SET_HUB_LIST,
    data: {
      hubs: hubList,
    },
  };
};

export const addHubItems = (hubList: {
  [key: string]: HubItem;
}): AddHubItemsAction => {
  return {
    type: ADD_HUB_ITEMS,
    data: {
      hubs: hubList,
    },
  };
};

export const addTripItems = (trips: any[]): AddTripItemsAction => {
  return {
    type: ADD_TRIP_ITEMS,
    data: {
      trips,
    },
  };
};

export const setTripDetails = (tripData: TripItem): SetTripDetailsAction => {
  return {
    type: SET_TRIP_DETAILS,
    data: {
      trip: tripData,
    },
  };
};

export const updateTripDetails = (
  payload: { vehicle_no?: string; driver_contact?: string },
  bookingId: string,
): UpdateTripDetailsAction => {
  return {
    type: UPDATE_TRIP_DETAILS,
    data: {
      payload,
      bookingId,
    },
  };
};

export const setIsNextTripsFetchable = (
  isNextTripItemsFetchable: boolean,
): SetIsNextTripsFetchableAction => {
  return {
    type: SET_IS_NEXT_TRIP_ITEMS_FETCHABLE,
    data: {
      isNextTripItemsFetchable,
    },
  };
};

export const startTrip = (tripId: string): StartTripAction => {
  return {
    type: START_TRIP,
    data: {
      tripId,
    },
  };
};

export const endTrip = (tripId: string): EndTripAction => {
  return {
    type: END_TRIP,
    data: {
      tripId,
    },
  };
};

export const cancelTrip = (
  tripId: string,
  payload: CancelTripPayload,
): CancelTripAction => {
  return {
    type: CANCEL_TRIP,
    data: {
      tripId,
      payload,
    },
  };
};

export const setStartTripIndicator = (
  tripStartIndicatorValue: boolean,
): SetTripStartIndicatorAction => {
  return {
    type: SET_TRIP_START_INDICATOR,
    data: {
      tripStartIndicator: tripStartIndicatorValue,
    },
  };
};

export const setEndTripIndicator = (
  tripEndIndicatorValue: boolean,
): SetTripEndIndicatorAction => {
  return {
    type: SET_TRIP_END_INDICATOR,
    data: {
      tripEndIndicator: tripEndIndicatorValue,
    },
  };
};

export const setCancelTripIndicator = (
  tripCancelIndicator: boolean,
): SetTripCancelIndicatorAction => {
  return {
    type: SET_TRIP_CANCEL_INDICATOR,
    data: {
      tripCancelIndicator: tripCancelIndicator,
    },
  };
};

export const setTripHelpIndicator = (
  tripHelpIndicator: boolean,
): SetTripHelpIndicatorAction => {
  return {
    type: SET_TRIP_HELP_INDICATOR,
    data: {
      tripHelpIndicator,
    },
  };
};

export const setTripUpdateIndicator = (
  tripUpdateIndicator: boolean,
): SetTripUpdateIndicatorAction => {
  return {
    type: SET_TRIP_UPDATE_INDICATOR,
    data: {
      tripUpdateIndicator,
    },
  };
};

export const fetchVehicleList = (
  vehicleIds: string[],
  tripPickupAt: number,
  estimatedTime: number,
): FetchVehicleListAction => {
  return {
    type: FETCH_VEHICLE_LIST,
    data: {
      vehicleIds,
      tripPickupAt,
      estimatedTime,
    },
  };
};

export const fetchDriverList = (
  driverIds: string[],
  tripPickupAt: number,
  estimatedTime: number,
): FetchDriverListAction => {
  return {
    type: FETCH_DRIVER_LIST,
    data: {
      driverIds,
      tripPickupAt,
      estimatedTime,
    },
  };
};

export const setVehicleList = (
  vehicleList: { vehicleDetails: VerificationType; inUseStatus: boolean }[],
): SetVehicleListAction => {
  return {
    type: SET_VEHICLE_LIST,
    data: {
      vehicleList,
    },
  };
};

export const setDriverList = (
  driverList: {
    driverDetails: VerificationType;
    inUseStatus: boolean;
  }[],
): SetDriverListAction => {
  return {
    type: SET_DRIVER_LIST,
    data: {
      driverList,
    },
  };
};

export const createHelpTicket = (
  payload: HelpTicketPayload,
): CreateHelpTicketAction => {
  return {
    type: CREATE_HELP_TICKET,
    data: {
      payload,
    },
  };
};

export const setTripManagementModal = (
  setModalStateToNull: boolean,
  modalName: string,
  modalData: any,
): SetTripManagementModalAction => {
  if (setModalStateToNull) {
    return {
      type: SET_TRIP_MANAGEMENT_MODAL,
      data: null,
    };
  }
  return {
    type: SET_TRIP_MANAGEMENT_MODAL,
    data: {
      modalName,
      modalData,
    },
  };
};

export type TripActionsTypes =
  | GetDriverTripsAction
  | SetDriverTripsAction
  | GetPartnerTripsAction
  | SetPartnerTripsAction
  | GetTripDetailsAction
  | SetTripDetailsAction
  | SetIsNextTripsFetchableAction
  | AddTripItemsAction
  | SetHubListAction
  | StartTripAction
  | SetTripStartIndicatorAction
  | EndTripAction
  | SetTripEndIndicatorAction
  | CancelTripAction
  | SetTripCancelIndicatorAction
  | AddHubItemsAction
  | SetTripManagementModalAction
  | FetchVehicleListAction
  | FetchDriverListAction
  | SetVehicleListAction
  | CreateHelpTicketAction
  | SetTripHelpIndicatorAction
  | UpdateTripDetailsAction
  | SetTripUpdateIndicatorAction
  | SetDriverListAction;
