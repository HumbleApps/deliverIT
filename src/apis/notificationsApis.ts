import {
  GetNotificationPayload,
  SetNotificationResponse,
} from '../types/notificationTypes';
import DOMAINS from 'constants/domains';
import { fetchPost } from 'utils/fetch';

const FETCH_NOTIFICATIONS = `${DOMAINS.SOCKET}/notifications/city/room/iscomplete`;

/**
 *
 * @param payload to fetch the Notifications
 */
export const fetchNotifications = (
  payload: GetNotificationPayload,
): Promise<SetNotificationResponse> =>
  fetchPost({
    url: FETCH_NOTIFICATIONS,
    data: payload,
  });
