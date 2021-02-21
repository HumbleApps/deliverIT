import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectModalType, selectModalProps } from 'selectors/modalSelector';

import allModals from './allModals';

type Props = {};

const Modal: FC<Props> = () => {
  const modalType = useSelector(selectModalType);
  const modalProps = useSelector(selectModalProps);

  if (modalType === '') {
    return null;
  }

  const CurrentModal = allModals[modalType];

  return <CurrentModal {...modalProps} />;
};

export default Modal;
