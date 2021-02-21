import { Langs } from 'constants/languages';

export type MaterialType = {
  created_at: number;
  description: string;
  display_name: string;
  display_name_lang: Record<Langs, string>;
  id: number;
  image: string;
  name: string;
  updated_at: number;
};

export type WorkType = {
  created_at: string;
  image: string;
  updated_at: string;
  work_name: string;
  work_name_lang: Record<Langs, string>;
  __v: number;
  _id: string;
};

export type VehicleAttrType = {
  active: boolean;
  created_at: number;
  description: any;
  id: number;
  image: string;
  updated_at: number;
  vehicle_attribute: string[];
  vehicle_type_id: string;
};

/**
 * LT already has `VehicleType` entity, hence Type of Type
 */
export type VehicleTypeType = {
  active: boolean;
  allowed_capacity: any;
  attributes: any[];
  average_speed: any;
  capacity: number;
  capacity_unit: string;
  created_at: number;
  created_by: any;
  display_name: string;
  display_name_lang: Record<Langs, string>;
  fuel_capacity: any;
  fuel_capacity_unit: string;
  height: any;
  height_unit: string;
  id: number;
  images: { default: string | null };
  is_fake: boolean;
  length: any;
  length_unit: string;
  loader_height: any;
  loader_height_unit: string;
  loader_length: any;
  loader_length_unit: string;
  loader_width: any;
  loader_width_unit: string;
  manufacturer: any;
  mileage: any;
  mileage_unit: string;
  model: any;
  name: string;
  seats: any;
  updated_at: number;
  updated_by: any;
  vehicle_type_id: any;
  weight: any;
  weight_unit: string;
  width: any;
  width_unit: string;
};

export type VehicleTonnageType = {
  name: string;
  capacity: number;
  vehicle_type_ids: number[];
};
