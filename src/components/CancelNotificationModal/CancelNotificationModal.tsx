import React, { FC, useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import Icon from 'components/Icon';
import Text from 'components/Text';

import { hideModal } from 'actions/modalActions';

import colors from 'styles/colors';
import fontSize from 'styles/fontSize';

type Props = {
  topLabel?: string;
  bottomLabel?: string;
  bottomLabelStyle?: StyleSheet;
  bottomText?: string;
  bottomTextStyle?: StyleSheet;
  okBtn?: Boolean;
};

const SuccessModal: FC<Props> = ({
  topLabel,
  bottomLabel,
  bottomLabelStyle = styles.default,
  bottomTextStyle = styles.default,
  bottomText,
}) => {
  const dispatch = useDispatch();
  const modalizeRef = useRef<Modalize>(null);

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const handleClosed = (ms = 1000) => {
    setTimeout(() => {
      dispatch(hideModal());
    }, ms);
  };

  return (
    <Modalize ref={modalizeRef} onClosed={handleClosed} adjustToContentHeight>
      <View style={styles.container}>
        {topLabel && <Text style={styles.label}>{topLabel}</Text>}
        <View style={styles.iconContainer}>
          <Icon icon={faTruck} color={colors.danger} size={64} />
        </View>
        {bottomLabel && (
          <Text style={[styles.label, bottomLabelStyle]}>{bottomLabel}</Text>
        )}
        {bottomText && <Text style={[bottomTextStyle]}>{bottomText}</Text>}
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
