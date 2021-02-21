import { HubType } from 'types/hubTypes';

export const GET_MULTIPLE_HUBS = 'GET_MULTIPLE_HUBS';
export const ADD_MANY_HUBS = 'ADD_MANY_HUBS';

export type GetMultipleHubsAction = {
  type: typeof GET_MULTIPLE_HUBS;
  data: {
    ids: string[];
  };
};

export type AddManyHubsAction = {
  type: typeof ADD_MANY_HUBS;
  data: {
    hubs: HubType[];
  };
};

export const getMultipleHubs = (ids: string[]): GetMultipleHubsAction => ({
  type: GET_MULTIPLE_HUBS,
  data: {
    ids,
  },
});

export const addManyHubs = (hubs: HubType[]): AddManyHubsAction => ({
  type: ADD_MANY_HUBS,
  data: {
    hubs,
  },
});

export type HubsActionsTypes = GetMultipleHubsAction | AddManyHubsAction;
