import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from 'components/Text';
import CustomIcon from 'components/CustomIcon';

import colors from 'styles/colors';

import styles from './BottomNavigation.styles';
import { Icons } from 'constants/icons';

type Props = {
  title: string;
  iconName: Icons;
  isActive?: boolean;
  onPress?: () => void;
};

const BottomNavigationItem: FC<Props> = ({
  title,
  iconName,
  isActive = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <CustomIcon
          name={iconName}
          color={isActive ? colors.primary : colors.text}
        />
        <Text style={[styles.itemTitle, isActive && styles.itemTitleActive]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomNavigationItem;
