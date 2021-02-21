import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from 'components/Text';

import colors from 'styles/colors';

type Props = {
  item: { value: string; label: string };
  isActive: boolean;
  onPress: (lang: string) => void;
};

const ModalListItem: FC<Props> = ({ item, isActive, onPress }) => {
  const sectionItemStyle = [styles.item, isActive ? styles.itemActive : {}];

  return (
    <TouchableOpacity onPress={() => onPress(item.value)}>
      <Text style={sectionItemStyle}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    textAlign: 'center',
  },
  itemActive: {
    color: colors.primary,
    backgroundColor: colors.primaryBg,
  },
});

export default ModalListItem;
