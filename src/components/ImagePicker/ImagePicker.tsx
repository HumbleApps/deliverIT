import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageSourcePropType, Image, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {
//   faPen,
//   faFileUpload,
//   // faImage,
// } from '@fortawesome/free-solid-svg-icons';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker/src';

import { ModalNames } from 'modals';
// import Text from 'components/Text';
// import Icon from 'components/Icon';
// import Button from 'components/Button';

import { showModal } from 'actions/modalActions';
import { setImageInitiator } from 'actions/imageActions';
import { showLoader, hideLoader } from 'actions/loaderActions';

import { selectImageInitiator } from 'selectors/imageSelector';

import { uploadImage } from 'apis/mediaApis';

import { defaultOptions } from 'constants/image';
import { ImageInitiator } from 'constants/image';
// import colors from 'styles/colors';

import styles from './ImagePicker.styles';
import { ImageType } from 'types/mediaTypes';
import STATUS from 'constants/status';
import DocumentVerificationStatus from 'components/DocumentVerificationStatus';

type Props = {
  imageHolder: ImageSourcePropType;
  value?: string;
  children?: ReactNode;
  status?: STATUS;
  disableOnPress?: boolean;
  onChange?: (image: ImageType) => void;
};

const ImagePicker: FC<Props> = ({
  value,
  imageHolder,
  children,
  status,
  disableOnPress,
  onChange = () => {},
}) => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const imageInitiator = useSelector(selectImageInitiator);

  const handlePress = () => {
    setActive(true);
    dispatch(showModal(ModalNames.IMAGE_INITIATOR_MODAL));
  };

  const handleChange = useCallback(
    async (image: ImagePickerResponse) => {
      setActive(false);
      dispatch(setImageInitiator(ImageInitiator.empty));

      if (image.didCancel || image.errorCode) {
        return;
      }

      try {
        dispatch(showLoader());
        const formData = new FormData();
        // @ts-ignore
        formData.append('images', {
          name: image.fileName,
          // @ts-ignore
          type: image.type,
          uri: image.uri,
        });
        const uploadedImage: ImageType[] = await uploadImage(formData);

        onChange(uploadedImage[0]);

        dispatch(hideLoader());
      } catch (error) {
        dispatch(hideLoader());

        ToastAndroid.showWithGravity(
          'Failed to upload the image!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    },
    [onChange, dispatch],
  );

  useEffect(() => {
    if (isActive) {
      switch (imageInitiator) {
        case ImageInitiator.camera: {
          launchCamera(defaultOptions, handleChange);
          return;
        }
        case ImageInitiator.gallery: {
          launchImageLibrary(defaultOptions, handleChange);
          return;
        }
        default:
          return;
      }
    }
  }, [imageInitiator, isActive, handleChange]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      disabled={disableOnPress ? true : false}
    >
      {/* <Icon icon={faImage} size={64} color={colors.border} /> */}

      <Image
        source={value ? { uri: value } : imageHolder}
        style={styles.image}
      />
      {children}
      <DocumentVerificationStatus status={status} />
      {/* {value ? (
        <View style={styles.edit}>
          <Icon icon={faPen} color={colors.text} />
          <Text style={styles.editText}>Edit</Text>
        </View>
      ) : (
        <Button
          title="Upload"
          iconLeft={faFileUpload}
          style={styles.uploadBtn}
          titleStyle={styles.uploadBtnTitle}
        />
      )} */}
    </TouchableOpacity>
  );
};

export default ImagePicker;
