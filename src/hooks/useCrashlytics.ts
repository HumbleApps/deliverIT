import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';
import DeviceInfo from 'react-native-device-info';

import { selectUserId } from 'selectors/userSelector';

const init = async (userId: number) => {
  const deviceAttrs = {
    brand: DeviceInfo.getBrand(),
    deviceId: DeviceInfo.getDeviceId(),
  };
  try {
    const response: any[] = await Promise.all([
      crashlytics().setUserId(userId.toString()),
      crashlytics().setAttributes(deviceAttrs),
    ]);

    crashlytics().log('Testing log');
    // crashlytics().crash();
    console.log(response);
  } catch (error) {
    console.error('Failed to init crashlytics', error);
  }
};

const useCrashlytics = () => {
  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (userId) {
      init(userId);
    }
  }, [userId]);
};

export default useCrashlytics;
