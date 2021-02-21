import { CityType } from 'types/cityTypes';
import { OrgType } from 'types/orgTypes';

export type UserType = {
  rating: number;
  code: string;
  __user_id: number;
  extra_perm: any[];
  num_ratings: number;
  roles: any[];
  referral_code: string | null;
  child_id: string;
  child: number;
  id: number;
  password_hash: string;
  aadhaar_number: string | null;
  city: string;
  referrer_code: string | null;
  created_by: string | null;
  access_level: string | null;
  version: number;
  role: string[];
  allow_referral: boolean;
  user_name: string;
  email: string;
  phone_number: number;
  updated_by: string | null;
  user_details: UserStaticDetailsType | null;
  updated_at: number;
  organization_id: string;
  active: boolean;
  permissions: string[];
  name: string;
  language: string | null;
  user_type: string;
  created_at: number;
  bill_to: string | null;
  token: string;
  organization: {};
  bank_details: string | null;
  type: string;
};

export type UserLoginPayload = {
  user: UserType;
  cities: CityType[];
  organization?: OrgType[];
  tnc: any;
  driver: any;
};

export type CreateOrUpdateUserOrgPayLoad = {
  name?: string;
  city?: string;
  language?: string;
  phoneNumber?: number;
  __user_id?: number;
};

export type UserStaticDetailsType = {
  supply_app?: {
    training_videos?: Record<string, boolean>;
    driver_page?: Record<string, boolean>;
    vehicle_page?: Record<string, boolean>;
    discovery_page?: Record<string, boolean>;
    trip_management_page?: Record<string, boolean>;
    payments_page?: Record<string, boolean>;
    onboarding_complete?: boolean;
  };
};
