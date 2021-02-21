import { RootState } from 'store';

export const selectImageInitiator = (state: RootState) =>
  state.images.initiator;
