import React, { FC, useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import Text from 'components/Text';

import colors from 'styles/colors';
import isEmpty from 'utils/isEmpty';

import styles from './Fields.style';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  addon?: string;
}

const TextField: FC<Props> = ({
  label = '',
  error = '',
  touched = false,
  onFocus = () => {},
  onBlur = () => {},
  style = {},
  addon,
  value,
  ...props
}) => {
  const [isFocused, setFocused] = useState<boolean>(false);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur(e);
  };

  return (
    <View style={styles.field}>
      {!isEmpty(label) && <Text style={styles.label}>{label}</Text>}
      {addon && (
        <View style={styles.addonContainer}>
          <Text style={styles.addonText}>{addon}</Text>
          <View style={styles.addonBar} />
        </View>
      )}
      <TextInput
        value={value}
        style={[
          styles.input,
          { borderColor: isFocused ? colors.primary : colors.text },
          addon ? styles.inputWithAddon : styles.inputWithoutAddon,
          style,
          isEmpty(value) && styles.inputWithPlaceHolder,
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {!isEmpty(error) && touched ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </View>
  );
};

export default TextField;
