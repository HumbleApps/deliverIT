import { ImageInitiator } from 'constants/image';

export const SET_IMAGE_INITIATOR = 'SET_IMAGE_ACTION';

export type SetImageInitiatorAction = {
  type: typeof SET_IMAGE_INITIATOR;
  data: ImageInitiator;
};

export type ImageActionTypes = SetImageInitiatorAction;

export const setImageInitiator = (
  initiator: ImageInitiator,
): SetImageInitiatorAction => ({
  type: SET_IMAGE_INITIATOR,
  data: initiator,
});
