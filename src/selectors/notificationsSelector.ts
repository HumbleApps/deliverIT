import { RootState } from 'store';

export const selectNotifications = (state: RootState) => {
  return state.notifications.notifications;
};
