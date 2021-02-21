import STATUS from 'constants/status';

export type QuoteType = {
  allocation_score: any;
  client_listing_id: string;
  created_at: string;
  final_price: number;
  fulfillment_data: any;
  is_approved: boolean;
  is_closed: boolean;
  latitude: any;
  listing_id: string;
  longitude: any;
  partner_id: string;
  pick_up_at: number;
  reason: any;
  status: STATUS;
  status_logs: any;
  updated_at: string;
  updated_by: string;
  vehicle_number: string;
  __v: number;
  _id: string;
};
