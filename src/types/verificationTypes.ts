import STATUS from 'constants/status';
import {
  VerificationCheckKey,
  VerificationTypeKey,
} from 'constants/verification';

export type VerificationCheckListType = {
  check_key?: VerificationCheckKey;
  check_name?: string;
  check_regex?: string;
  check_regex_description?: string;
  check_value?: string;
  created_at?: Date;
  document_group?: string;
  group_key?: string;
  input?: boolean;
  is_discarded: boolean;
  is_editable?: boolean;
  is_mandatory?: { dependency_type: 'fixed'; result: true };
  is_rejected: boolean;
  is_submitted: boolean;
  is_verified: boolean;
  mandatory?: boolean;
  submission_sample?: any;
  submission_type?: string;
  updated_at?: Date;
  updated_by?: number;
  __v?: number;
  _id: string;
};

export type VerificationType = {
  _id: string;
  status?: STATUS;
  is_verified?: boolean;
  is_rejected?: boolean;
  is_submitted?: boolean;
  is_discarded?: boolean;
  verification_checklist: VerificationCheckListType[];
  confirmations?: any[];
  bank_account_verification?: any[];
  entity_key?: string;
  verification_type?: VerificationTypeKey;
  verification_payload?: object;
  created_by?: string;
  organization?: number;
  submissions_till?: number;
  display_property?: object;
  verification_check_logs?: any[];
  comments?: any[];
  created_at?: Date;
  updated_at?: Date;
  __v?: number;
  updated_by?: number;
  inv_status?: STATUS;
  connection?: {
    [VerificationTypeKey.vehicle_verification]?: string[];
    [VerificationTypeKey.driver_verification]?: string[];
  };
};

export type CreateVerificationPayloadType = {
  entity_key: string;
  verification_type: VerificationTypeKey;
  verification_payload: {
    owner_number: string;
    city: string;
    owner_organization_id: number;
    owner_name: string;
  };
  created_by: number;
  organization: number;
};

export type VehicleVerificationItemType = {
  entity_key: string;
  _id: string;
};

export type BankInfoListType = {
  name?: string;
  key?: string;
  value?: string;
  documentStatus?: STATUS;
  docStatusStyle?: object;
  _id?: string;
  disableOnPress?: boolean;
};

export type VehicleVerificationListType = {
  [VerificationTypeKey.vehicle_verification]: VehicleVerificationItemType[];
};

export type CreateVehiclePayload = {
  entity_key: string;
  verification_type: VerificationTypeKey;
  verification_payload: {
    vehicle_number: string;
    owner_verification_id: string;
    owner_organization_id: number;
    city: string;
    owner_name: string;
    owner_number: string;
  };
  created_by: number;
  organization: number;
};
