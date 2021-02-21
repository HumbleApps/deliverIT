import { RootState } from 'store';

export const selectVerifiedVehicles = (state: RootState) => {
  const vehicles = state?.vehicles?.vehicles
    ?.map((v) => {
      if (v && v.is_verified) {
        return v.entity_key;
      }
    })
    .filter((v) => v !== undefined);
  return vehicles;
};

export const selectVehicleEarningList = (state: RootState) => {
  //TODO: remove vehicles with 0 earning
  return state.payments.vehicleEarningList;
};

export const selectIssues = (state: RootState) => {
  return state.payments.issues;
};

export const selectTicketRaisedStatus = (state: RootState) =>
  state.payments.ticketRaisedStatus;

export const selectEarningDetails = (state: RootState) =>
  state.payments.earningDetails;

export const selectCurrentVehicle = (state: RootState) =>
  state.payments.currentVehicle;

export const selectCurrentMonth = (state: RootState) =>
  state.payments.currentSelectedMonth;

export const selectCurrentVehicleEarningAmount = (state: RootState) =>
  state.payments.currentVehicleEarningAmount;

export const selectCurrentEarningBreakup = (state: RootState) =>
  state.payments.currentEarningBreakup;
