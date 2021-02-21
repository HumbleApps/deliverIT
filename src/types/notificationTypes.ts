export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

export type GetNotificationAction = {
  type: typeof GET_NOTIFICATIONS;
  data: any;
};

export type SetNotificationAction = {
  type: typeof SET_NOTIFICATIONS;
  data: any;
};

export type GetNotificationPayload = {
  complete: boolean;
  room: string;
};

export type SetNotificationResponse = {
  _id: string;
  title: string | null;
  text: string;
  priority: number;
  type: string;
  notification_event: string;
  payload: {
    visible: boolean;
    refresh: boolean;
    entity_key: string;
    verification_id: string;
  };
  completed: boolean;
  city: string;
  room: string;
  picked: boolean;
  picked_by: null;
  created_at: number;
  updated_at: number;
};
