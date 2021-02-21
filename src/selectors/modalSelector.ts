import { RootState } from 'store';
import { ModalNames } from 'modals';

export const selectModalType = (state: RootState): ModalNames | '' =>
  state.modal.modalType;

export const selectModalProps = (state: RootState) => state.modal.modalProps;
