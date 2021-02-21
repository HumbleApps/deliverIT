import { RootState } from 'store';

export const selectIsOtpGenerated = (state: RootState): boolean =>
  state.auth.isOtpSent;

export const selectPhoneNumber = (state: RootState): string | null =>
  state.auth.phoneNumber;
