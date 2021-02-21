import { TripType, TripMode } from 'constants/trips';
import { BookingsType, RecommendedBy } from 'constants/bookings';
import STATUS from 'constants/status';

export type ClientListingFetchPayload = {
  city: string;
  limit: number;
  partner_id: number;
  skip: number;
};

export type VehicleDriversMap = {
  vehicle_number: string;
  driver_id: string | null;
  driver_name: string | null;
  driver_phone_number: string | null;
};

export type UpdateClientListingPayload = {
  vehicle_drivers: VehicleDriversMap[];
  vehicle_count: number;
  partner_id: number;
  id: string;
  recommended_by?: RecommendedBy;
};

export type ClientListingType = {
  ekalavya_recommended_partners: any[];
  vehicles_arranged: number;
  vehicles_required: number;
  trip_type: TripType;
  trip_mode: TripMode;
  status_logs: any[];
  status: STATUS;
  revenue: number;
  quote_closed_count: number;
  quote_approved_count: number;
  quote_applied_count: number;
  proof_of_demand: any[];
  is_notified: boolean;
  is_expired: boolean;
  is_client_created: boolean;
  is_approved: boolean;
  is_assigned: boolean;
  hub_coordinates: number[];
  extra_payment_required: boolean;
  duration: number;
  drop_count: number;
  distance: number;
  cost: number;
  capacity_value: number;
  booking_type: BookingsType;
  _id: string;
  client_id: string;
  client_name: string;
  hub_id: string;
  area_id: string;
  pick_up_at: number;
  vehicle_type_attribute_id: string;
  material_id: string;
  work_type_id: string;
  city: string;
  capacity_unit: string;
  created_by: string;
  updated_by: string;
  no_of_pod_required: null | number;
  number_of_helpers: string;
  created_at: Date;
  updated_at: Date;
  __v: number;
  stage: string;
  vehicle_type_id: string;
  recommendation_notified_at: number;
  driver_cost?: {
    extra_km_charges: number;
    extra_hour_charges: number;
  };
  source: string;
  is_in_ekalavya: Boolean;
};

export type ClientListingFetchResponse = {
  data: ClientListingType[];
  next: boolean;
};

export type BookingConfirmationResponse = {
  __v: number;
  _id: string;
  client_listing_id: string;
  created_at: string;
  final_price: number;
  is_approved: boolean;
  is_closed: boolean;
  latitude: number;
  listing_id: string;
  longitude: number;
  partner_id: number;
  pick_up_at: number;
  source: string;
  status: string;
  status_logs: any[];
  updated_at: string;
  updated_by: string;
  vehicle_number: string;
};
