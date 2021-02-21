export const socketActionTypes = {
  INIT_SOCKET_CONNECTION: 'init_socket',
};

export default class SocketActions {
  static initSocket(user: object) {
    return {
      type: socketActionTypes.INIT_SOCKET_CONNECTION,
      user,
    };
  }
}
