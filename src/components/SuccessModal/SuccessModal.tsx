import React, { FC, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-native';

import Icon from 'components/Icon';
import Text from 'components/Text';

import { hideModal } from 'actions/modalActions';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';
import Button from 'components/Button';
import useI18n from 'hooks/useI18n';
import useSegment from 'hooks/useSegment';
import TrackEvents from 'constants/trackEvents';

type Props = {
  topLabel?: string;
  bottomLabel?: string;
  bottomLabelStyle?: StyleSheet;
  bottomText?: string;
  bottomTextStyle?: StyleSheet;
  okBtn?: Boolean;
  navigateOnDismiss?: string;
  logEventToSegment?: string;
  logDataToSegment?: object;
};

const SuccessModal: FC<Props> = ({
  topLabel,
  bottomLabel,
  bottomLabelStyle = styles.default,
  bottomTextStyle = styles.default,
  bottomText,
  okBtn = false,
  navigateOnDismiss = '',
  logEventToSegment = '',
  logDataToSegment = {},
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const modalizeRef = useRef<Modalize>(null);
  const { translate } = useI18n();

  const { trackEventInSegment } = useSegment();

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const handleClosed = (ms = 1000) => {
    setTimeout(() => {
      dispatch(hideModal());
    }, ms);
  };

  const handleClose = () => {
    if (logEventToSegment) {
      // Log Success Booking event to Segment
      trackEventInSegment({
        collectData: logDataToSegment,
        eventName: logEventToSegment as TrackEvents,
        otherProperties: {
          'UI Item': 'Success Modal',
        },
      });
    }
    if (navigateOnDismiss) {
      history.push(navigateOnDismiss);
    }
  };

  return (
    <Modalize
      ref={modalizeRef}
      onClosed={handleClosed}
      onClose={handleClose}
      adjustToContentHeight
    >
      <View style={styles.container}>
        {topLabel && <Text style={styles.label}>{topLabel}</Text>}
        <View style={styles.iconContainer}>
          <Icon icon={faCheckCircle} color={colors.success} size={64} />
        </View>
        {bottomLabel && (
          <Text style={[styles.label, bottomLabelStyle]}>{bottomLabel}</Text>
        )}
        {bottomText && <Text style={[bottomTextStyle]}>{bottomText}</Text>}
        {okBtn && (
          <View style={styles.btn}>
            <Button
              title={translate('ok')}
              iconLeft={faCheck}
              onPress={() => handleClosed(100)}
            />
          </View>
        )}
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    borderRadius: 64,
    padding: 4,
    backgroundColor: colors.successBg,
  },
  label: {
    fontSize: fontSize.medium,
    marginVertical: 16,
  },
  default: {},
  btn: {
    alignItems: 'stretch',
    width: '80%',
  },
});

export default SuccessModal;
