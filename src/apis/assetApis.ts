import DOMAINS from 'constants/domains';
import { fetchGet, fetchPost } from 'utils/fetch';

import {
  MaterialType,
  WorkType,
  VehicleAttrType,
  VehicleTypeType,
} from 'types/assetTypes';
import { VehicleType } from 'types/clientListingTypes';

export const MATERIALS = `${DOMAINS.ASSET}/materials`;
export const VEHICLE_ATTR_MULTI = `${DOMAINS.ASSET}/vehicletypeattributes/multi`;
export const WORKS = `${DOMAINS.MARKETPLACE}/worktypes`;
export const VEHICLE_TYPES = `${DOMAINS.ASSET}/vehicletypes`;
export const VEHICLE_ATTRS_OF_VEHICLE_TYPE = `${DOMAINS.ASSET}/vehicletypeattribute/vehicletype/:vehicleTypeId`;

export const FETCH_WORK_TYPE = `${DOMAINS.MARKETPLACE}/worktype/:id`;
export const FETCH_VEHICLE_TYPE = `${DOMAINS.ASSET}/vehicletype/:id`;

/**
 * Fetches materials
 */
export const fetchMaterials = async (): Promise<MaterialType[]> =>
  await fetchGet({
    url: MATERIALS,
  });

/**
 * Fetches multiple vehicle attributes
 */
export const fetchVehicleAttrMulti = async (
  ids: number[],
): Promise<VehicleAttrType[]> =>
  await fetchPost({
    url: VEHICLE_ATTR_MULTI,
    data: { ids },
  });

/**
 * Fetches materials
 */
export const fetchWorks = async (): Promise<WorkType[]> =>
  await fetchGet({
    url: WORKS,
  });

/**
 * Fetches Vehicles Types
 */
export const fetchVehiclesTypes = async (): Promise<VehicleTypeType[]> =>
  await fetchGet({
    url: VEHICLE_TYPES,
  });

/**
 * Fetches Vehicle attrs for a vehicle type
 *
 * @param id vehicle type id
 */
export const fetchVehicleAttrsByVehicleType = (
  id: string,
): Promise<VehicleAttrType[]> =>
  fetchGet({
    url: VEHICLE_ATTRS_OF_VEHICLE_TYPE.replace(':vehicleTypeId', id),
  });

export const fetchWorkType = async (id: number): Promise<WorkType> => {
  const url = FETCH_WORK_TYPE.replace(':id', id.toString());
  return await fetchGet({
    url: url.replace(':id', id.toString()),
  });
};

export const fetchVehicleType = async (id: number): Promise<VehicleType> => {
  const url = FETCH_VEHICLE_TYPE.replace(':id', id.toString());
  return await fetchGet({
    url: url.replace(':id', id.toString()),
  });
};
