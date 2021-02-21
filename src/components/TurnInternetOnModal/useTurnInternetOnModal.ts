import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modalize } from 'react-native-modalize';

import { hideModal } from 'actions/modalActions';

const useTurnInternetOn = () => {
  const dispatch = useDispatch();
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const handleClosed = () => {
    dispatch(hideModal());
  };

  return {
    ref: modalizeRef,
    onClosed: handleClosed,
  };
};

export default useTurnInternetOn;
