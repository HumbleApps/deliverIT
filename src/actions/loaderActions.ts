export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export type ShowLoaderAction = {
  type: typeof SHOW_LOADER;
};

export type HideLoaderAction = {
  type: typeof HIDE_LOADER;
};

export type LoaderActionTypes = ShowLoaderAction | HideLoaderAction;

export const showLoader = (): ShowLoaderAction => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = (): HideLoaderAction => {
  return {
    type: HIDE_LOADER,
  };
};
