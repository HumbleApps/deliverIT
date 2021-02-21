import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-native';
import { useSelector } from 'react-redux';
import { getUniqueId } from 'react-native-device-info';

import { selectUserId } from 'selectors/userSelector';
import { sendFCMToken } from 'apis/userApis';
import NotificationService, {
  TokenObject,
  NotificationObject,
  ParsedData,
  onRouting,
} from 'utils/notifications';

const useNotification = () => {
  const history = useHistory();
  const userId = useSelector(selectUserId);
  const [fcmToken, setFcmToken] = useState<null | string>(null);

  const handleRegister = (token: TokenObject) => {
    setFcmToken(token.token);
  };

  const handleNotification = (notification: NotificationObject) => {
    if (notification.userInteraction) {
      try {
        const parsedData: ParsedData = notification.data?.data
          ? JSON.parse(notification.data.data)
          : {};

        if (parsedData.path) {
          setTimeout(() => onRouting(history, parsedData), 100);
        }
      } catch (error) {
        console.error('Failed to parse notification data: ', error);
      }
    }
  };

  new NotificationService(handleRegister, handleNotification);

  useEffect(() => {
    if (userId && fcmToken?.length) {
      const sendFCMTokenAsync = async () => {
        try {
          await sendFCMToken(userId, getUniqueId(), fcmToken);
        } catch (error) {
          console.error('Failed to send fcm token: ', error);
        }
      };

      sendFCMTokenAsync();
    }
  }, [userId, fcmToken]);
};

export default useNotification;
