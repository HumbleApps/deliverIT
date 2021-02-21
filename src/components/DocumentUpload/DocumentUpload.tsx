import React, { FC } from 'react';
import { View, ImageSourcePropType, StyleSheet, TextStyle } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components/Icon';
import Text from 'components/Text';
import ImagePicker from 'components/ImagePicker';
import { LinkButton } from 'components/Button';

import { ImageType } from 'types/mediaTypes';
import {
  VerificationType,
  VerificationCheckListType,
} from 'types/verificationTypes';

import { selectUserId } from 'selectors/userSelector';
import {
  selectVerificationId,
  selectOwnerVerificationCheckList,
  selectInstaVerification,
} from 'selectors/verificationSelector';

import { updateVerification } from 'actions/verificationActions';

import { VerificationCheckKey } from 'constants/verification';
import STATUS from 'constants/status';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';
import { getDocumentStatus, setReUploadParams } from 'utils/verificationUtils';

type Props = {
  /** Document name */
  name: string;
  /** Owner Verification `check_key` value */
  checkKey: VerificationCheckKey;
  /** Image to show if not uploaded yet */
  placeHolder: ImageSourcePropType;
};

/**
 * Document Upload component for verification document image upload
 *
 * @param Props
 */
const DocumentUpload: FC<Props> = ({ name, placeHolder, checkKey }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const verificationId = useSelector(selectVerificationId);
  const allCheckList = useSelector(selectOwnerVerificationCheckList);
  const instaVerificationStatus = useSelector(selectInstaVerification);

  const currentCheckList = allCheckList.find((c) => c.check_key === checkKey);
  const documentKey = currentCheckList?.document_group || '';

  const [documentStatus, docStatusColor, disableOnPress] = getDocumentStatus(
    currentCheckList,
    instaVerificationStatus,
  );

  const docStatusStyle: TextStyle = {
    color: docStatusColor as string,
    textTransform: 'capitalize',
    fontSize: 14,
  };

  let requiredCheckList = allCheckList.filter(
    (c) => c.document_group === documentKey,
  );

  if (!requiredCheckList.length) {
    return null;
  }

  const createPayload = (imageUrl: string) => {
    let payload: VerificationType = {
      updated_by: userId,
      _id: verificationId,
      verification_checklist: [],
    };

    requiredCheckList.forEach((currentCheck) => {
      let checkProps: VerificationCheckListType = {
        _id: currentCheck._id,
        is_discarded: currentCheck.is_discarded,
        is_rejected: currentCheck.is_rejected,
        is_verified: currentCheck.is_verified,
        is_submitted: currentCheck.is_submitted,
        updated_by: userId,
      };

      if (documentStatus === STATUS.REJECTED) {
        checkProps = setReUploadParams(checkProps);
      }

      if (currentCheck.check_key === checkKey) {
        checkProps = {
          ...checkProps,
          check_value: imageUrl,
          is_submitted: true,
        };
      }
      payload.verification_checklist.push(checkProps);
    });

    return payload;
  };

  const handleUpload = (image: ImageType) => {
    const payload = createPayload(image.media_link);

    dispatch(updateVerification(payload));
  };

  return (
    <ImagePicker
      onChange={handleUpload}
      imageHolder={placeHolder}
      value={currentCheckList?.check_value}
      status={documentStatus as string}
      disableOnPress={disableOnPress as boolean}
    >
      <View>
        <View style={styles.nameWrapper}>
          <Text>{name}</Text>
          {STATUS.UPLOADED === documentStatus && (
            <Icon icon={faCheckCircle} color={colors.success} />
          )}
        </View>
        {documentStatus !== STATUS.UNKNOWN &&
          documentStatus !== STATUS.UPLOADED && (
            <LinkButton
              title={documentStatus as string}
              style={[styles.linkButton, docStatusStyle]}
            />
          )}
        {/* {currentCheckList?.is_submitted && (
          <LinkButton title="Under Verification" style={styles.linkButton} />
        )} */}
      </View>
    </ImagePicker>
  );
};

const styles = StyleSheet.create({
  nameWrapper: {
    flexDirection: 'row',
  },
  linkButton: {
    fontSize: fontSize.small,
  },
});

export default DocumentUpload;
