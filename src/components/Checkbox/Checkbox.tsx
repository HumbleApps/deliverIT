import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Icon from 'components/Icon';

import colors from 'styles/colors';

type Props = {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  type?: string;
};

const Checkbox: FC<Props> = ({ checked, onChange, disabled = false, type }) => {
  let myColor = colors.white;
  let showCheck = false;
  if (type && type === 'checkOnly') {
    myColor = colors.success;
    showCheck = true;
  }
  return (
    <TouchableOpacity
      style={
        !showCheck
          ? [styles.container, checked && styles.activeContainer]
          : [
              styles.containerCheckOnly,
              checked && styles.activeContainerCheckOnly,
            ]
      }
      disabled={disabled}
      onPress={() => onChange(!checked)}
    >
      {checked && <Icon icon={faCheck} size={16} color={myColor} />}
      {showCheck && !checked && (
        <Icon icon={faCheck} size={16} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.2,
    borderRadius: 2,
    borderColor: colors.primary,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: colors.primary,
  },
  containerCheckOnly: {
    backgroundColor: colors.white,
  },
  activeContainerCheckOnly: {
    borderColor: colors.white,
    backgroundColor: colors.successBg,
  },
});

export default Checkbox;
