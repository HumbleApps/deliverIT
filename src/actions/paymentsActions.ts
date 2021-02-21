import {
  SET_ISSUES,
  GET_VEHICLES_EARNING,
  SET_VEHICLES_EARNING,
  TICKET_RAISED_STATUS,
  GET_EARNING_DETAILS,
  RAISE_FRESHDESK_TICKET,
  SET_EARNING_DETAILS,
  SET_CURRENT_VEHICLE,
  SET_CURRENT_ACTIVE_MONTH,
  GET_EARNING_BREAKUP,
  SET_EARNING_BREAKUP,
  SET_CURRENT_VEHICLE_EARNING_AMOUNT,
} from 'types/paymentsTypes';

import {
  CreateVehicleEarningPayload,
  GetVehiclesEarningAction,
  SetVehiclesEarningAction,
  VehicleEarningDetails,
  SetIssuesAction,
  TicketRaisedStatus,
  CreateEarningDetailsPayload,
  CreateFreshdeskPayload,
  SetVehiclesEarningListAction,
  earningBreakupResponse,
  VehicleEarningDetailsList,
} from 'types/paymentsTypes';

export type PaymentActionTypes =
  | GetVehiclesEarningAction
  | SetVehiclesEarningAction
  | SetIssuesAction
  | TicketRaisedStatus
  | CreateFreshdeskPayload
  | CreateEarningDetailsPayload;

/**
 *
 * @param payload used to fetch the Vehicle Earning Details
 */
export const getVehiclesEarning = (
  payload: CreateVehicleEarningPayload,
): GetVehiclesEarningAction => {
  return {
    type: GET_VEHICLES_EARNING,
    data: payload,
  };
};

/**
 *
 * @param data to be set for Vehicle Earning screen
 */
export const setVehiclesEarning = (
  data: VehicleEarningDetails,
): SetVehiclesEarningAction => {
  return {
    type: SET_VEHICLES_EARNING,
    data,
  };
};

/**
 *
 * @param issues : array of issue that need to be raised
 * @param add : Boolean value, by default issues are collected in array
 */
export const setIssues = (issues: any[], add = true): SetIssuesAction => {
  return {
    type: SET_ISSUES,
    data: issues,
    add,
  };
};

/**
 *
 * @param raised : Boolean, after successful Freshdesk ticket is raised, used to set the status
 */
export const ticketRaisedStatus = (raised: boolean): TicketRaisedStatus => {
  return {
    type: TICKET_RAISED_STATUS,
    data: raised,
  };
};

/**
 *
 * @param payload for raising the FreshDesk ticket
 */
export const raiseFreshdeskTicket = (payload: CreateFreshdeskPayload) => {
  return {
    type: RAISE_FRESHDESK_TICKET,
    data: payload,
  };
};

/**
 *
 * @param payload to fetch the Vehicle earning details
 */
export const getEarningDetails = (payload: CreateEarningDetailsPayload) => {
  return {
    type: GET_EARNING_DETAILS,
    data: payload,
  };
};

/**
 *
 * @param data to be set to show on the Earning Details screen
 */
export const setEarningDetails = (
  data: VehicleEarningDetailsList,
): SetVehiclesEarningListAction => {
  return {
    type: SET_EARNING_DETAILS,
    data,
  };
};

/**
 *
 * @param amount set the current Earning Amount to be used across various payment screen
 */
export const setCurrentVehicleEarningAmount = (amount: number | string) => {
  return {
    type: SET_CURRENT_VEHICLE_EARNING_AMOUNT,
    data: amount,
  };
};

/**
 * @param vehicleNumber: Set the current Vehicle Number to be used for various payment screen
 */
export const setCurrentVehicle = (vehicleNumber: string) => {
  return {
    type: SET_CURRENT_VEHICLE,
    data: vehicleNumber,
  };
};

/**
 * @param MONTH: Set the current MONTH to be used for various payment screen
 */
export const setCurrentActiveMonth = (month: string) => {
  return {
    type: SET_CURRENT_ACTIVE_MONTH,
    data: month,
  };
};

/**
 *
 * @param id to get the Vehicle Earning Breakup
 */
export const getEarningBreakup = (id: string) => {
  return {
    type: GET_EARNING_BREAKUP,
    data: id,
  };
};

/**
 *
 * @param data to be set the Earning Details Breakup to be used in Trip Details screens
 */
export const setEarningDetailsBreakUp = (data: earningBreakupResponse) => {
  return {
    type: SET_EARNING_BREAKUP,
    data,
  };
};
