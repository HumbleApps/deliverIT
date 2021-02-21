import { VerificationTypeKey } from 'constants/verification';

export type DriverType = {
  is_dco: boolean;
  _id: string;
  city: string;
  owner_organization_id: string;
  name: string;
  phone_number: string;
  owner_verification_id: string;
  driver_id: string;
  created_at: Date;
  updated_at: Date;
  __v: number;
};

export type CreateDriverPayload = {
  entity_key: string;
  verification_type: VerificationTypeKey.partner_driver_verification;
  verification_payload: {
    driver_name: string;
    driver_phone_number: string;
    city: string;
    owner_verification_id: string;
    owner_organization_id: number;
  };
  created_by: number;
  organization: number;
};
