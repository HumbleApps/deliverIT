import React, { FC, useEffect, useState } from 'react';

import Button from 'components/Button';
import { Modalize } from 'react-native-modalize';
import Text from 'components/Text';
import { View } from 'react-native';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './CustomerModal.styles';
import useCustomerCare from './useCustomerCare';
import useI18n from 'hooks/useI18n';

type Props = {
  modalView: View;
};

/**
 *
 * @param handleClose to close the modal
 * @param handleOkBtn to perform action on click of OK button
 */
const renderContent = (
  handleClose: () => void,
  handleOkBtn: () => void,
  translate: any,
) => [
  <View style={styles.contentContainer} key={new Date().getTime()}>
    <Button title={translate('ok')} iconLeft={faCheck} onPress={handleOkBtn} />
    <Button
      title={translate('cancel')}
      style={styles.clearBtn}
      titleStyle={styles.clearBtnTitle}
      onPress={handleClose}
    />
  </View>,
];

/**
 *
 * @param modalView is Transition Breakdown of Trip Detail Page which is send to Customer
 * care Modal so that the partner can raise if there is some issue in the Earning Breakup
 */
const CustomerCareModal: FC<Props> = ({ modalView }) => {
  const { ref, userIssues, onClosed, onOkPress } = useCustomerCare();
  const { translate } = useI18n();

  const [issues, setIssues] = useState(0);
  useEffect(() => {
    setIssues(userIssues.length);
  }, [userIssues]);

  return (
    <Modalize ref={ref} onClosed={onClosed} adjustToContentHeight key={123}>
      <Text style={styles.sectionTitle}>{translate('customerCare')}</Text>
      {modalView}
      {issues > 0 && (
        <Text style={styles.alertText}>
          Raise {issues} {issues === 1 ? 'issue' : 'issues'}
        </Text>
      )}
      {renderContent(onClosed, onOkPress, translate)}
    </Modalize>
  );
};

export default CustomerCareModal;
