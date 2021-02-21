import { DEFAULT_CHANNEL, URGENT_CHANNEL } from 'constants/fcm';
import PushNotification, {
  PushNotificationObject,
} from 'react-native-push-notification';

import NotificationHandler from './handler';
import { RegisterHandler, OnNotificationHandler } from './types';

export default class NotificationService {
  constructor(
    onRegister: RegisterHandler,
    onNotification: OnNotificationHandler,
  ) {
    this.createDefaultChannels();

    NotificationHandler.attachRegister(onRegister);
    NotificationHandler.attachNotification(onNotification);
  }

  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: DEFAULT_CHANNEL.id, // (required)
        channelName: DEFAULT_CHANNEL.name, // (required)
        channelDescription: DEFAULT_CHANNEL.name, // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      () => {
        // console.log(
        //   `createChannel ${DEFAULT_CHANNEL.id} returned '${created}'`,
        // ), // (optional) callback returns whether the channel was created, false means it already existed.
      },
    );
    PushNotification.createChannel(
      {
        channelId: URGENT_CHANNEL.id,
        channelName: URGENT_CHANNEL.name,
        channelDescription: URGENT_CHANNEL.name, // (optional) default: undefined.
        soundName: URGENT_CHANNEL.sound, // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        // vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      () => {
        // console.log(`createChannel ${URGENT_CHANNEL.id} returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
      },
    );
  }

  localNotification = (notification: PushNotificationObject) => {
    PushNotification.localNotification(notification);
  };
}
