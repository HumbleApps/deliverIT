import { ModalNames } from 'modals';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export type ShowModalType = {
  type: typeof SHOW_MODAL;
  data: {
    modalType: ModalNames;
    modalProps: Record<string, any> | null;
  };
};

export type HideModalType = {
  type: typeof HIDE_MODAL;
};

export const showModal = (
  modalType: ModalNames,
  modalProps?: Record<string, any>,
): ShowModalType => ({
  type: SHOW_MODAL,
  data: {
    modalType,
    modalProps: modalProps || null,
  },
});

export const hideModal = (): HideModalType => ({
  type: HIDE_MODAL,
});

export type ModalActionTypes = ShowModalType | HideModalType;
