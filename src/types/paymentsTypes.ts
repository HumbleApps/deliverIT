export const GET_VEHICLES_EARNING = 'GET_VEHICLES_EARNING';
export const SET_VEHICLES_EARNING = 'SET_VEHICLES_EARNING';
export const SET_ISSUES = 'SET_ISSUES';
export const RAISE_FRESHDESK_TICKET = 'RAISE_FRESHDESK_TICKET';
export const TICKET_RAISED_STATUS = 'TICKET_RAISED_STATUS';
export const GET_EARNING_DETAILS = 'GET_EARNING_DETAILS';
export const SET_EARNING_DETAILS = 'SET_EARNING_DETAILS';
export const SET_CURRENT_VEHICLE_EARNING_AMOUNT =
  'SET_CURRENT_VEHICLE_EARNING_AMOUNT';
export const SET_CURRENT_VEHICLE = 'SET_CURRENT_VEHICLE';
export const SET_CURRENT_ACTIVE_MONTH = 'SET_CURRENT_ACTIVE_MONTH';
export const GET_EARNING_BREAKUP = 'GET_EARNING_BREAKUP';
export const SET_EARNING_BREAKUP = 'SET_EARNING_BREAKUP';

export type CreateVehicleEarningPayload = {
  vehicle_numbers: any[];
  start_date: number;
  end_date: number;
};

export type CreateEarningDetailsPayload = {
  vehicle_number: string;
  start_date: number;
  end_date: number;
};
export type CreateEarningDetailsBreakupPayload = {
  id: string;
};

export type VehicleEarningDetailsList = {
  data: any[];
};

export type SetVehiclesEarningListAction = {
  type: typeof SET_EARNING_DETAILS;
  data: VehicleEarningDetailsList;
};

export type VehicleEarningDetails = {
  total_earnings: number;
  details: any[];
};

export type GetVehiclesEarningAction = {
  type: typeof GET_VEHICLES_EARNING;
  data: CreateVehicleEarningPayload;
};

export type SetVehiclesEarningAction = {
  type: typeof SET_VEHICLES_EARNING;
  data: VehicleEarningDetails;
};

export type SetIssuesAction = {
  type: typeof SET_ISSUES;
  data: any[];
  add: boolean;
};

export type TicketRaisedStatus = {
  type: typeof TICKET_RAISED_STATUS;
  data: boolean;
};

export type CreateFreshdeskPayload = {
  id: string;
  type: string;
  vehicle_number: string;
  client_id: string;
  client_name: string;
  source: string;
  city: string;
  subject: string;
  description: string;
  phone: number;
};

export type raiseFreshdeskTicketAction = {
  type: typeof RAISE_FRESHDESK_TICKET;
  data: CreateFreshdeskPayload;
};

export type earningBreakupResponse = {
  client_name: string;
  client_id: number;
  start_date: number;
  end_date: number;
  total_earnings: number;
  type: string;
  paid_on: number;
  total_trips: number;
  vehicle_number: string;
  deductions: deductions[];
  final_payment: number;
};

export type TripDetailsItem = {
  amount: string;
  date: number;
  client_name: string;
  is_present: number;
  payment_detail_id: never;
};

export type deductions = {
  amount: number;
  type: string;
  name: string;
  display_name: string;
  paid_on: number;
};
