import PushNotification from 'react-native-push-notification';

import {
  TokenObject,
  NotificationObject,
  RegisterHandler,
  OnNotificationHandler,
} from './types';

class NotificationHandler {
  _onRegister: RegisterHandler = null;
  _onNotification: OnNotificationHandler = null;

  attachRegister(handler: RegisterHandler) {
    this._onRegister = handler;
  }

  attachNotification(handler: OnNotificationHandler) {
    this._onNotification = handler;
  }

  onRegister(token: TokenObject) {
    if (typeof this._onRegister === 'function') {
      this._onRegister(token);
    }
  }

  onRegistrationError(err: any) {
    console.log(err);
  }

  onNotification(notification: NotificationObject) {
    if (typeof this._onNotification === 'function') {
      this._onNotification(notification);
    }
  }
}

const handler = new NotificationHandler();

PushNotification.configure({
  onRegister: handler.onRegister.bind(handler),
  onRegistrationError: handler.onRegistrationError.bind(handler),
  onNotification: handler.onNotification.bind(handler),
});

export default handler;
