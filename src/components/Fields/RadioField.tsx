import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from 'components/Text';

import isEmpty from 'utils/isEmpty';

import colors from 'styles/colors';

import styles from './Fields.style';

type ValueType = any;

interface Option {
  label: string;
  value: ValueType;
}

type Props = {
  label?: string;
  error?: string;
  touched?: boolean;
  options: Option[];
  value: ValueType;
  radioContainerStyle?: ViewStyle;
  radioButtonStyle?: ViewStyle;
  onChange: (value: ValueType) => void;
};

type ButtonProps = {
  item: Option;
  isActive: boolean;
  style?: ViewStyle;
  onPress: (value: ValueType) => void;
};

export const RadioButton: FC<ButtonProps> = ({
  isActive,
  item,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[{ marginRight: 16, flexDirection: 'row' }, style]}
      onPress={() => onPress(item.value)}
      key={item.value?.toString()}
    >
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: isActive ? colors.primary : colors.text,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 4,
          },
        ]}
      >
        {isActive ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: colors.primary,
            }}
          />
        ) : null}
      </View>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
};

const RadioField: FC<Props> = ({
  label,
  error,
  touched,
  value,
  options = [],
  radioContainerStyle,
  radioButtonStyle,
  onChange,
}) => {
  return (
    <View style={styles.field}>
      {!isEmpty(label) && <Text style={styles.label}>{label}</Text>}
      <View
        style={[{ flexDirection: 'row', padding: 10 }, radioContainerStyle]}
      >
        {options.map((opt) => (
          <RadioButton
            item={opt}
            isActive={value === opt.value}
            onPress={onChange}
            key={opt.value?.toString()}
            style={radioButtonStyle}
          />
        ))}
      </View>
      {!isEmpty(error) && touched ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </View>
  );
};

export default RadioField;
