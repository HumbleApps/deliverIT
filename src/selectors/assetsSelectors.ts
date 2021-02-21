import { RootState } from 'store';

export const selectAllWorks = (state: RootState) => state.assets.works;

export const selectAllMaterials = (state: RootState) => state.assets.materials;

export const selectAllVehicleTypes = (state: RootState) =>
  state.assets.vehicleTypes;
