import React, { FC } from 'react';
import { View } from 'react-native';
import OTPInputView, {
  InputProps,
} from '@twotalltotems/react-native-otp-input';

import Text from 'components/Text';

import isEmpty from 'utils/isEmpty';

import styles from './Fields.style';

interface Props extends InputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const OtpField: FC<Props> = ({
  label = '',
  error = '',
  touched = false,
  keyboardType = 'number-pad',
  ...props
}) => {
  return (
    <View style={styles.field}>
      {!isEmpty(label) && <Text style={styles.label}>{label}</Text>}
      <OTPInputView
        style={styles.otp}
        codeInputFieldStyle={styles.otpUnderline}
        keyboardType={keyboardType}
        {...props}
      />
      {!isEmpty(error) && touched ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </View>
  );
};

export default OtpField;
