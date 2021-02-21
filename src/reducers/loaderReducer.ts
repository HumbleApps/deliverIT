import {
  SHOW_LOADER,
  HIDE_LOADER,
  LoaderActionTypes,
} from 'actions/loaderActions';

type InitialState = {
  count: number;
};

const initialState: InitialState = {
  count: 0,
};

/**
 * loaderReducer stores data related to loader actions
 *
 * @param  state loader state
 * @param  action
 *
 * @return  state
 */
function loaderReducer(state = initialState, action: LoaderActionTypes) {
  switch (action.type) {
    case SHOW_LOADER: {
      let newCount = state.count || 0;
      newCount++;

      return {
        ...state,
        count: newCount,
      };
    }
    case HIDE_LOADER: {
      let newCount = state.count;
      newCount--;

      return {
        ...state,
        count: newCount,
      };
    }
    default: {
      break;
    }
  }
  return state;
}

export default loaderReducer;
