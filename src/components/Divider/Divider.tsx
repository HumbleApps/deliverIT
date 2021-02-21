import React from 'react';
import { FC } from 'react';
import { View } from 'react-native';

import colors from 'styles/colors';

type Props = {
  customStyle?: Object;
};

const Divider: FC<Props> = ({ customStyle }) => {
  return (
    <View
      style={[
        {
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
          marginVertical: 16,
          alignSelf: 'center',
        },
        customStyle,
      ]}
    />
  );
};

export default Divider;
