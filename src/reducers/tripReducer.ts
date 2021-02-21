import {
  TripActionsTypes,
  SET_DRIVER_TRIPS,
  SET_PARTNER_TRIPS,
  SET_TRIP_DETAILS,
  SET_IS_NEXT_TRIP_ITEMS_FETCHABLE,
  ADD_TRIP_ITEMS,
  SET_HUB_LIST,
  SET_TRIP_START_INDICATOR,
  SET_TRIP_END_INDICATOR,
  SET_TRIP_CANCEL_INDICATOR,
  SET_TRIP_HELP_INDICATOR,
  ADD_HUB_ITEMS,
  SET_VEHICLE_LIST,
  SET_DRIVER_LIST,
  SET_TRIP_MANAGEMENT_MODAL,
  SET_TRIP_UPDATE_INDICATOR,
} from 'actions/tripActions';
import { TripItem, HubItem } from 'types/tripTypes';
import { VerificationType } from 'types/verificationTypes';

type InitialState = {
  trips: TripItem[];
  hubs: { [key: string]: HubItem };
  isNextTripItemsFetchable: boolean;
  tripDetails: TripItem;
  tripStartIndicator: boolean;
  tripEndIndicator: boolean;
  tripCancelIndicator: boolean;
  tripHelpIndicator: boolean;
  tripUpdateIndicator: boolean;
  tripManagementModal: { name: string; data: any } | null;
  vehicleListWithStatus: {
    vehicleDetails: VerificationType;
    inUseStatus: boolean;
  }[];
  driverListWithStatus: {
    driverDetails: VerificationType;
    inUseStatus: boolean;
  }[];
};

const initialState: InitialState = {
  trips: [] as TripItem[],
  hubs: {},
  isNextTripItemsFetchable: true,
  tripDetails: {} as TripItem,
  tripStartIndicator: false,
  tripEndIndicator: false,
  tripCancelIndicator: false,
  tripHelpIndicator: false,
  tripUpdateIndicator: false,
  tripManagementModal: null,
  vehicleListWithStatus: [],
  driverListWithStatus: [],
};

const reducer = (state = initialState, action: TripActionsTypes) => {
  switch (action.type) {
    case SET_DRIVER_TRIPS:
    case SET_PARTNER_TRIPS: {
      return {
        ...state,
        trips: [...action.data.trips],
      };
    }
    case SET_HUB_LIST: {
      return {
        ...state,
        hubs: action.data.hubs,
      };
    }
    case ADD_HUB_ITEMS: {
      return {
        ...state,
        hubs: { ...state.hubs, ...action.data.hubs },
      };
    }
    case ADD_TRIP_ITEMS: {
      return {
        ...state,
        trips: [...state.trips, ...action.data.trips],
      };
    }

    case SET_TRIP_DETAILS: {
      return {
        ...state,
        tripDetails: { ...action.data.trip },
      };
    }
    case SET_IS_NEXT_TRIP_ITEMS_FETCHABLE: {
      return {
        ...state,
        isNextTripItemsFetchable: action.data.isNextTripItemsFetchable,
      };
    }
    case SET_TRIP_START_INDICATOR: {
      return {
        ...state,
        tripStartIndicator: action.data.tripStartIndicator,
      };
    }

    case SET_TRIP_END_INDICATOR: {
      return {
        ...state,
        tripEndIndicator: action.data.tripEndIndicator,
      };
    }
    case SET_TRIP_CANCEL_INDICATOR: {
      return {
        ...state,
        tripCancelIndicator: action.data.tripCancelIndicator,
      };
    }
    case SET_TRIP_HELP_INDICATOR: {
      return {
        ...state,
        tripHelpIndicator: action.data.tripHelpIndicator,
      };
    }
    case SET_TRIP_UPDATE_INDICATOR: {
      return {
        ...state,
        tripUpdateIndicator: action.data.tripUpdateIndicator,
      };
    }
    case SET_TRIP_MANAGEMENT_MODAL: {
      if (action.data) {
        return {
          ...state,
          tripManagementModal: {
            name: action.data.modalName,
            data: action.data.modalData,
          },
        };
      } else {
        return {
          ...state,
          tripManagementModal: null,
        };
      }
    }
    case SET_VEHICLE_LIST: {
      return {
        ...state,
        vehicleListWithStatus: action.data.vehicleList,
      };
    }
    case SET_DRIVER_LIST: {
      return {
        ...state,
        driverListWithStatus: action.data.driverList,
      };
    }
    default:
      return state;
  }
};

export default reducer;
