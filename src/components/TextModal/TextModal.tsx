import React, { FC, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Modalize } from 'react-native-modalize';

import Text from 'components/Text';
import { hideModal } from 'actions/modalActions';
import { useDispatch } from 'react-redux';
import styles from './TextModal.styles';

type Props = {
  title?: string;
  content: string;
};
const TextModal: FC<Props> = ({ title, content }) => {
  const modalRef = useRef<Modalize>(null);
  const dispatch = useDispatch();

  const handleClosed = () => {
    setTimeout(() => {
      dispatch(hideModal());
    }, 1000);
  };

  useEffect(() => {
    modalRef.current?.open();
  }, []);
  return (
    <Modalize ref={modalRef} onClosed={handleClosed} adjustToContentHeight>
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Text style={styles.content}>{content}</Text>
      </View>
    </Modalize>
  );
};

export default TextModal;
