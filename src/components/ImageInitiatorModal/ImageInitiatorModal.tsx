import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faCamera, faImage } from '@fortawesome/free-solid-svg-icons';

import Text from 'components/Text';
import Icon from 'components/Icon';

import { hideModal } from 'actions/modalActions';
import { setImageInitiator } from 'actions/imageActions';

import { selectImageInitiator } from 'selectors/imageSelector';

import { ImageInitiator } from 'constants/image';

import colors from 'styles/colors';

const ImageInitiatorModal = () => {
  const dispatch = useDispatch();
  const imageInitiator = useSelector(selectImageInitiator);
  const modalRef = useRef<Modalize>(null);

  const handleClosed = () => {
    setTimeout(() => {
      dispatch(hideModal());
    }, 1000);
  };

  useEffect(() => {
    modalRef.current?.open();
  }, []);

  const handleCameraPress = useCallback(() => {
    modalRef.current?.close();
    dispatch(setImageInitiator(ImageInitiator.camera));
  }, [dispatch]);

  const handleGalleryPress = useCallback(() => {
    modalRef.current?.close();
    dispatch(setImageInitiator(ImageInitiator.gallery));
  }, [dispatch]);

  return (
    <Modalize ref={modalRef} snapPoint={200} onClosed={handleClosed}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleCameraPress}
          disabled={imageInitiator !== ImageInitiator.empty}
        >
          <View style={styles.wrapper}>
            <Icon icon={faCamera} color={colors.primary} size={64} />
          </View>
          <Text>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleGalleryPress}
          disabled={imageInitiator !== ImageInitiator.empty}
        >
          <View style={styles.wrapper}>
            <Icon icon={faImage} color={colors.primary} size={64} />
          </View>
          <Text>Gallery</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    width: 100,
    alignItems: 'center',
  },
});

export default ImageInitiatorModal;
