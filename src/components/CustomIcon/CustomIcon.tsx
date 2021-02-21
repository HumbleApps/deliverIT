import { Icons } from 'constants/icons';
import React, { FC } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import colors from 'styles/colors';

import config from './icomoon/selection.json';

const CustomIcon = createIconSetFromIcoMoon(config, 'LTIcons', 'LT-Icons.ttf');

type Props = {
  name: Icons;
  color?: string;
  size?: number;
};

const Icon: FC<Props> = ({ name, color = colors.white, size = 24 }) => {
  return <CustomIcon name={name} color={color} size={size} />;
};

export default Icon;
