import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useHistory } from 'react-router-native';
import {
  faChevronRight,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import Icon from 'components/Icon';
import Text from 'components/Text';
import Box from 'components/Box';
import CustomIcon from 'components/CustomIcon';

import colors from 'styles/colors';
import styles from './VerticalTab.styles';
import STATUS from 'constants/status';
import { getStatusColor } from 'utils/verificationUtils';
import { Icons } from 'constants/icons';

type Props = {
  title: string;
  iconName: Icons;
  disabled?: boolean;
  to?: string;
  completed?: boolean;
  routeParams?: Record<string, any>;
  status?: STATUS;
};

const VerticalTab: FC<Props> = ({
  title,
  iconName,
  disabled = false,
  completed = false,
  to = undefined,
  routeParams,
  status,
}) => {
  const history = useHistory();
  const statusColor = getStatusColor(status);
  const handlePress = () => {
    if (to) {
      history.push(to, routeParams);
    }
  };

  return (
    <Box
      style={[
        {
          backgroundColor: completed ? colors.white : colors.primary,
        },
        disabled && {
          elevation: 0,
          opacity: 0.7,
          backgroundColor: 'transparent',
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        disabled={disabled}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <CustomIcon
            name={iconName}
            size={24}
            color={disabled || completed ? colors.text : colors.white}
          />
          <View>
            <Text
              style={[
                styles.title,
                { color: disabled || completed ? colors.text : colors.white },
              ]}
            >
              {title}
            </Text>
            {status && status !== STATUS.UNKNOWN && (
              <View>
                <Text style={[styles.tabStatusStyle, statusColor]}>
                  {status}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.chevron}>
          {completed && <Icon icon={faCheckCircle} color={colors.success} />}
          <Icon
            icon={faChevronRight}
            size={16}
            color={disabled || completed ? colors.text : colors.white}
          />
        </View>
      </TouchableOpacity>
    </Box>
  );
};

export default VerticalTab;
