import React, { FC, ReactNode, useState } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Text from 'components/Text';
import Icon from 'components/Icon';

import { OptionProps, SelectOptionComponentProps } from 'types/fieldTypes';

import isEmpty from 'utils/isEmpty';

import colors from 'styles/colors';
import fieldStyles from '../Fields.style';
import styles from './SelectField.styles';

type Props = {
  label: string;
  value: OptionProps | null | undefined;
  options: OptionProps[];
  /** Formik field error prop */
  error?: string;
  /** Formik field touched prop */
  touched?: boolean;
  /**
   * Dynamic components list
   * Use these components to render any specific component of your choice
   */
  Components?: {
    /**
     * Option component will have extra props passed in to it
     * Hence only pass functional component (props) => <AnyComponent {...props} />
     * Use `isSelected` prop to style selected custom option component
     *
     * See <SelectExample /> component
     */
    Option?: FC<SelectOptionComponentProps>;
    /**
     * Addon component will have no extra props passed on to it
     * Hence use it as normal node component not functional component
     *
     * See <SelectExample /> component
     */
    TopAddon?: ReactNode;
  };
  onChange: (opt: OptionProps) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  optionsContainerStyle?: StyleProp<ViewStyle>;
  /** Always visible placeholder */
  placeholder?: string;
};

const SelectField: FC<Props> = ({
  label,
  value,
  error = '',
  touched = false,
  Components,
  options = [],
  onChange,
  inputStyle,
  optionsContainerStyle,
  placeholder,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handlePress = () => {
    setOpen(!isOpen);
  };

  const handleChange = (selectedOption: OptionProps) => {
    if (selectedOption.disabled) {
      return;
    }
    setOpen(!isOpen);
    onChange(selectedOption);
  };

  const checkIfSelected = (option: OptionProps) => {
    return option.value === value?.value;
  };

  return (
    <View
      style={[
        fieldStyles.field,
        styles.container,
        isOpen && styles.openContainer,
      ]}
    >
      {/* Render Label */}
      {!isEmpty(label) && <Text style={fieldStyles.label}>{label}</Text>}

      {/* Render Main Input */}
      <TouchableWithoutFeedback
        style={[styles.input, inputStyle, isOpen && styles.inputOpen]}
        onPress={handlePress}
      >
        <Text>{value ? value.label : placeholder}</Text>
        <Icon icon={isOpen ? faAngleUp : faAngleDown} color={colors.text} />
      </TouchableWithoutFeedback>

      {/* Render Option */}
      {isOpen && (
        <View style={[styles.optionsContainer, optionsContainerStyle]}>
          <ScrollView>
            {Components?.TopAddon}
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => handleChange(option)}
              >
                {Components?.Option ? (
                  <Components.Option
                    item={option}
                    isSelected={checkIfSelected(option)}
                    disabled={option.disabled}
                  />
                ) : (
                  <Text
                    style={[
                      styles.option,
                      checkIfSelected(option) && styles.selectedOption,
                    ]}
                  >
                    {option.label}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      {/* Render Error */}
      {!isEmpty(error) && touched ? (
        <Text style={fieldStyles.error}>{error}</Text>
      ) : null}
    </View>
  );
};

export default SelectField;
