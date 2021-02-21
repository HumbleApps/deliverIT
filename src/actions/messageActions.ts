export const messageActionTypes = {
  SHOW_MESSAGE: 'show-message',
};

export default class MessageActions {
  static showMessage(message: object) {
    return {
      type: messageActionTypes.SHOW_MESSAGE,
      message,
    };
  }
}
