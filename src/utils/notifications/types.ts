import { ReceivedNotification } from 'react-native-push-notification';

export type TokenObject = { os: string; token: string };

export type NotificationObject = Omit<ReceivedNotification, 'userInfo'>;

export type RegisterHandler = null | ((token: TokenObject) => void);

export type OnNotificationHandler =
  | null
  | ((notification: NotificationObject) => void);

/**
 * Define your `path` prop value here
 *
 * this will be used for routing with some extra steps if required
 */
export enum NotificationPathTypes {
  profile = 'profile',
  listing = 'listing',
  payments = 'earnings',
  client_listing = 'client_listing',
  trip_details = 'trip_details',
}

/**
 *  Define all the props that you are going to use
 *  for routing or another use case
 */
export type ParsedData = {
  /**
   * Commons props that will come from backend for all notifications
   */
  path?: NotificationPathTypes;
  /**
   * Custom props that will come from for specific route
   * ex: for listing/payment/trips you might require id for routing
   *     define those props here as `optional` type
   */
  listing_id?: string;
  recommended_by?: string;
  client_listing_id?: string;
};
