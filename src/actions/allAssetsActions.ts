import { WorkType, MaterialType, VehicleTypeType } from 'types/assetTypes';

export const GET_ALL_WORKS = 'GET_ALL_WORKS';
export const GET_ALL_MATERIALS = 'GET_ALL_MATERIALS';
export const GET_ALL_VEHICLES_TYPES = 'GET_ALL_VEHICLES_TYPES';

export const SET_ALL_WORKS = 'SET_ALL_WORKS';
export const SET_ALL_MATERIALS = 'SET_ALL_MATERIALS';
export const SET_ALL_VEHICLES_TYPES = 'SET_ALL_VEHICLES_TYPES';

export type GetAllWorksAction = {
  type: typeof GET_ALL_WORKS;
};

export type GetAllMaterialsAction = {
  type: typeof GET_ALL_MATERIALS;
};

export type GetAllVehicleTypesAction = {
  type: typeof GET_ALL_VEHICLES_TYPES;
};

export type SetAllWorksAction = {
  type: typeof SET_ALL_WORKS;
  data: WorkType[];
};

export type SetAllMaterialsAction = {
  type: typeof SET_ALL_MATERIALS;
  data: MaterialType[];
};

export type SetAllVehicleTypesAction = {
  type: typeof SET_ALL_VEHICLES_TYPES;
  data: VehicleTypeType[];
};

export const getAllWorks = (): GetAllWorksAction => ({ type: GET_ALL_WORKS });
export const getAllMaterials = (): GetAllMaterialsAction => ({
  type: GET_ALL_MATERIALS,
});
export const getAllVehicleTypes = (): GetAllVehicleTypesAction => ({
  type: GET_ALL_VEHICLES_TYPES,
});

export const setAllWorks = (works: WorkType[]): SetAllWorksAction => ({
  type: SET_ALL_WORKS,
  data: works,
});
export const setAllMaterials = (
  materials: MaterialType[],
): SetAllMaterialsAction => ({
  type: SET_ALL_MATERIALS,
  data: materials,
});
export const setAllVehicleTypes = (
  vehicleTypes: VehicleTypeType[],
): SetAllVehicleTypesAction => ({
  type: SET_ALL_VEHICLES_TYPES,
  data: vehicleTypes,
});

export type AllAssetsActionTypes =
  | GetAllWorksAction
  | GetAllMaterialsAction
  | GetAllVehicleTypesAction
  | SetAllWorksAction
  | SetAllMaterialsAction
  | SetAllVehicleTypesAction;
