import STATUS from 'constants/status';

export type HubType = {
  active: boolean;
  area_id: string;
  city_code: string;
  city_id: string;
  client_id: number;
  createdAt: string;
  created_from: string;
  fo_id: string;
  location: any;
  name: string;
  status: STATUS;
  tardiness_cap: number;
  updated_at: string;
  __v: number;
  _id: string;
  info?: {
    place_name: string;
    vicinity: string;
    formatted_address: string;
    address: string;
    google_id: string;
    place_type: string;
    pincode: number;
  };
};
