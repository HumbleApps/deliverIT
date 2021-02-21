import { messageActionTypes } from '../actions/messageActions';
interface Action {
  [key: string]: string;
}
interface State {
  message: {
    title: string;
    body: string;
  };
}
const defaultState = {
  message: {
    title: 'Nothing to show',
    body: 'sadsadsss',
  },
};

export default function messageReducer(state = defaultState, action: any) {
  switch (action.type) {
    case messageActionTypes.SHOW_MESSAGE: {
      return {
        ...state,
        message: {
          body: action.message.body,
          title: action.message.title,
        },
      };
    }
    default: {
      return state;
    }
  }
}
