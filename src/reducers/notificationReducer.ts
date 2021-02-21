import { NotificationActionTypes } from 'actions/notificationActions';
import {
  SetNotificationResponse,
  SET_NOTIFICATIONS,
} from 'types/notificationTypes';

type InitialState = {
  notifications?: SetNotificationResponse[];
};

const initialState: InitialState = {
  notifications: [],
};

const notificationReducer = (
  state = initialState,
  action: NotificationActionTypes,
) => {
  switch (action.type) {
    case SET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.data,
      };
    }

    default:
      return state;
  }
};

export default notificationReducer;
