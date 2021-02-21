import Text from 'components/Text';
import { STATUS_TYPE } from 'constants/status';
import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './Banner.style';

type Props = {
  //Label to be set in the Banner placed in center
  label?: string;
  //type: PRIMARY | SUCCESS | INFO (in small cases)
  //Used to show the banner in different color patterns
  type?: string;
};

const Banner: FC<Props> = ({ children, label = 'Banner', type }) => {
  let bannerStyle = styles.success;
  switch (type && type.toLocaleLowerCase()) {
    case STATUS_TYPE.SUCCESS: {
      bannerStyle = styles.success;
      break;
    }
    case STATUS_TYPE.INFO: {
      bannerStyle = styles.info;
      break;
    }
    case STATUS_TYPE.PRIMARY: {
      bannerStyle = styles.primary;
      break;
    }
  }
  return (
    <View style={[styles.banner, bannerStyle]}>
      {children ? (
        children
      ) : (
        <Text style={[styles.bannerText, bannerStyle]}>{label}</Text>
      )}
    </View>
  );
};

export default Banner;
