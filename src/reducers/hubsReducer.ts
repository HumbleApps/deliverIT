import { HubType } from 'types/hubTypes';
import { ADD_MANY_HUBS, HubsActionsTypes } from 'actions/hubsActions';

type InitialState = Record<string, HubType>;

const initialState: InitialState = {};

const hubsReducer = (state = initialState, action: HubsActionsTypes) => {
  switch (action.type) {
    case ADD_MANY_HUBS: {
      const hubs = { ...state };
      const incomingHubs = [...action.data.hubs];

      incomingHubs.forEach((hub) => {
        hubs[hub._id] = hub;
      });

      return {
        ...hubs,
      };
    }
    default: {
      return state;
    }
  }
};

export default hubsReducer;
