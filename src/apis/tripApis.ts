import { fetchPost, fetchGet } from 'utils/fetch';
import DOMAINS from 'constants/domains';

const DRIVER_TRIPS = `${DOMAINS.REAL_TIME}/tripManagement/bookings/driver`;
const PARTNER_TRIPS = `${DOMAINS.REAL_TIME}/tripManagement/bookings/partner`;
const TRIP_DETAILS = `${DOMAINS.REAL_TIME}/tripManagement/bookings`;
const START_TRIP = `${DOMAINS.REAL_TIME}/starttrip`;
const END_TRIP = `${DOMAINS.REAL_TIME}/endtrip`;
const HELP_TICKET = `${DOMAINS.COMMUNICATION}/tickets`;
const GET_HUB_LIST = `${DOMAINS.FO}/hubs`;
const CANCEL_TRIP = `${DOMAINS.REAL_TIME}/booking`;
const GET_VEHICLE_IN_USE = `${DOMAINS.REAL_TIME}/vehicles/bookingstatus`;
const GET_DRIVER_IN_USE = `${DOMAINS.REAL_TIME}/driver/bookingstatus`;
const UPDATE_TRIP_DETAILS = `${DOMAINS.REAL_TIME}/booking`;

type getTripsQuery =
  | { pageNumber: number; limit: number; status: string }
  | { pageNumber: number; limit: number; status: string; startTime: number }
  | {
      pageNumber: number;
      limit: number;
      status: string;
      endTime: number;
    }
  | {
      pageNumber: number;
      limit: number;
      status: string;
      endTime: number;
    };

export const getDriverTrips = async (
  query: getTripsQuery,
  params: { userPhoneNumber: number },
) => {
  return await fetchGet({
    url: `${DRIVER_TRIPS}/${params.userPhoneNumber}`,
    query,
  });
};

export const getPartnerTrips = async (
  query: getTripsQuery,
  params: { userPhoneNumber: number },
) => {
  return await fetchGet({
    url: `${PARTNER_TRIPS}/${params.userPhoneNumber}`,
    query: query,
  });
};

export const getTripDetails = async (tripId: string) => {
  return await fetchGet({
    url: `${TRIP_DETAILS}/${tripId}`,
  });
};

export const createHelpTicket = async (data: any) => {
  return await fetchPost({
    url: HELP_TICKET,
    data,
  });
};

export const startTrip = async (tripId: string) => {
  return await fetchPost({
    url: `${START_TRIP}/${tripId}`,
  });
};

export const endTrip = async (tripId: string) => {
  return await fetchPost({
    url: `${END_TRIP}/${tripId}`,
  });
};

export const getHubList = async (hubIds: string[]) => {
  return await fetchPost({
    url: `${GET_HUB_LIST}`,
    data: {
      hub_id: hubIds,
    },
  });
};

export const cancelTrip = async (
  tripId: string,
  payload: { cancelled_by: string; cancel_reason: string },
) => {
  return await fetchPost({
    url: `${CANCEL_TRIP}/${tripId}/cancel`,
    data: payload,
  });
};

export const getVehicleInUseStatus = async (
  vehicles: string[],
  pickupAt: number,
  estimatedTime: number,
) => {
  console.log(estimatedTime);
  return await fetchPost({
    url: `${GET_VEHICLE_IN_USE}`,
    data: {
      vehicles,
      pick_up_at: pickupAt,
      estimated_booking_time_in_hours: estimatedTime,
    },
  });
};

export const getDriverWithInUseStatus = async (
  drivers: string[],
  pickupAt: number,
  estimatedTime: number,
) => {
  return await fetchPost({
    url: `${GET_DRIVER_IN_USE}`,
    data: {
      drivers,
      pick_up_at: pickupAt,
      estimated_booking_time_in_hours: estimatedTime,
    },
  });
};

export const updateTripDetails = async (
  payload: { vehicle_no: string; driver_contact: string },
  bookingId: string,
) => {
  return await fetchPost({
    url: `${UPDATE_TRIP_DETAILS}/${bookingId}/updatedriverorvehicle`,
    data: payload,
  });
};
