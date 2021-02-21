import { SHOW_MODAL, HIDE_MODAL, ModalActionTypes } from 'actions/modalActions';
import { ModalNames } from 'modals';
import PathNames from 'routes/pathNames';

/**
 * Define your required modal props here
 */
type ModalProps = {
  // Common modal props
  from?: PathNames;
  // View based based props
};

type InitialState = {
  modalType: ModalNames | '';
  modalProps?: ModalProps | null;
};

const initialState: InitialState = {
  modalType: '',
  modalProps: null,
};

const modalReducer = (state = initialState, action: ModalActionTypes) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.data.modalType,
        modalProps: action.data.modalProps,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
