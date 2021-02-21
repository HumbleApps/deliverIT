import { RootState } from 'store';

export const selectDrivers = (state: RootState) => state.drivers;

export const selectDriverVerification = (state: RootState, id: string) =>
  state.drivers.find((v) => v._id === id);
