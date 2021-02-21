import {
  GetNotificationAction,
  GetNotificationPayload,
  GET_NOTIFICATIONS,
  SetNotificationAction,
  SetNotificationResponse,
  SET_NOTIFICATIONS,
} from 'types/notificationTypes';

export type NotificationActionTypes =
  | GetNotificationAction
  | SetNotificationAction
  | GetNotificationPayload
  | SetNotificationResponse;

/**
 *
 * @param payload used to fetch the Notifications
 */
export const getNotifications = (
  payload: GetNotificationPayload,
): GetNotificationAction => {
  return {
    type: GET_NOTIFICATIONS,
    data: payload,
  };
};

/**
 *
 * @param data to be used to set the notifications
 */
export const setNotifications = (
  data: SetNotificationResponse,
): SetNotificationAction => {
  return {
    type: SET_NOTIFICATIONS,
    data,
  };
};
