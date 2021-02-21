import { RootState } from 'store';

export const selectLoaderCount = (state: RootState) => state.loader.count;
