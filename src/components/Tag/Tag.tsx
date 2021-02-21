import React, { FC } from 'react';
import { View } from 'react-native';
import Text from 'components/Text';
import Icon from 'components/Icon';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './Tag.styles';

type Props = {
  label: string;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
};

const TagsView: FC<Props> = ({
  label = '',
  iconLeft = undefined,
  iconRight = undefined,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tag_Container}>
        {iconLeft && <Icon icon={iconLeft} />}
        <Text style={styles.txt}>{label}</Text>
        {iconRight && <Icon icon={iconRight} />}
      </View>
    </View>
  );
};

export default TagsView;
