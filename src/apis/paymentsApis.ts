import DOMAINS from 'constants/domains';

import {
  CreateVehicleEarningPayload,
  CreateFreshdeskPayload,
  CreateEarningDetailsPayload,
  CreateEarningDetailsBreakupPayload,
} from 'types/paymentsTypes';

import { fetchPost } from 'utils/fetch';

const FETCH_VEHICLES_EARNING = `${DOMAINS.FO}/payment/earningsSummary`;
const ADD_FRESHDESK_TICKET = `${DOMAINS.FO}/ticket/create`;
const GET_EARNING_DETAILS = `${DOMAINS.FO}/payment/earningsDetails`;
const GET_EARNING_BREAKUP = `${DOMAINS.FO}/payment/earningsBreakUp`;

/**
 *
 * @param payload to fetch the Vehicle Earning List
 */
export const fetchVehiclesEarningList = (
  payload: CreateVehicleEarningPayload,
): Promise<CreateVehicleEarningPayload> =>
  fetchPost({
    url: FETCH_VEHICLES_EARNING,
    data: payload,
  });

/**
 *
 * @param payload to fetch the Earning Details of vehicle
 */
export const fetchEarningDetails = (
  payload: CreateEarningDetailsPayload,
): Promise<CreateEarningDetailsPayload> =>
  fetchPost({
    url: GET_EARNING_DETAILS,
    data: payload,
  });

/**
 *
 * @param payload to fetch the Breakup of the earning Details
 */
export const fetchEarningDetailsBreakup = (
  payload: CreateEarningDetailsBreakupPayload,
): Promise<CreateEarningDetailsBreakupPayload> =>
  fetchPost({
    url: GET_EARNING_BREAKUP,
    data: payload,
  });

/**
 *
 * @param payload to raise the Freshdesk ticket
 */
export const addFreshDeskTicket = (payload: CreateFreshdeskPayload) => {
  return fetchPost({
    url: ADD_FRESHDESK_TICKET,
    data: payload,
  });
};
