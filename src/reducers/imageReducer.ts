import { ImageInitiator } from 'constants/image';

import { SET_IMAGE_INITIATOR, ImageActionTypes } from 'actions/imageActions';

type InitialState = {
  initiator: ImageInitiator;
};

const initialState: InitialState = {
  initiator: ImageInitiator.empty,
};

export const imageReducer = (
  state = initialState,
  action: ImageActionTypes,
) => {
  switch (action.type) {
    case SET_IMAGE_INITIATOR: {
      return {
        ...state,
        initiator: action.data,
      };
    }
    default:
      return state;
  }
};

export default imageReducer;
