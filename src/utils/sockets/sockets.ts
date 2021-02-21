import io from 'socket.io-client';

import domains from 'constants/domains';
import store from 'store';

import { categorize } from './handler';

class Sockets {
  socketInitialized: boolean;
  connected: boolean;
  socket: any;

  constructor() {
    this.socketInitialized = false;
    this.connected = false;
    this.socket = undefined;
  }

  init() {
    if (!this.socketInitialized) {
      const state = store.getState();
      const { city } = state.user.details;

      const socketUrl = `${domains.SOCKET}/${city}`;
      const socket = io(socketUrl, {
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
      });

      socket.on('connect', () => {
        console.log(
          `Socket connected to rooms: org_${state.user.details.id}`,
          `org_${state.user.details.type}`,
          'marketplace_partner',
        );
        socket.emit('joinRoom', {
          rooms: [
            `org_${state.user.details.id}`,
            `org_${state.user.details.type}`,
            'marketplace_partner',
          ],
        });

        socket.removeAllListeners();
        socket.on('message', (wsData: any) => {
          console.log(wsData);
          categorize(wsData);
        });
        this.connected = true;
      });

      socket.on('error', () => {
        console.log('ERROR: no connection to socket');
      });

      socket.on('disconnect', () => {
        this.connected = false;
        console.log('Socket disconnected!');
      });

      this.socketInitialized = true;
      this.socket = socket;
    }
  }

  emitMessage(data: any) {
    if (this.socketInitialized && this.connected && this.socket) {
      this.socket.emit('message', data);
    }
  }

  /**
   * close fn disconnects the socket manually
   *
   */
  close() {
    this.socket.close();
    this.socketInitialized = false;
    this.connected = false;
    this.socket = undefined;
  }
}

export default new Sockets();
