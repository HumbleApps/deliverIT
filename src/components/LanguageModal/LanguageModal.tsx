import React, { FC, Fragment } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import Text from 'components/Text';
import Divider from 'components/Divider';

import LANGS from 'constants/languages';
import { objectToLabelValueMap } from 'utils/toLabelValueMap';

import useI18n from 'hooks/useI18n';

import useLanguage from './useLanguage';

import styles from './LanguageModal.styles';

type SectionHeaderProps = {
  title: string;
};

type ItemProps = {
  item: { value: string; label: string };
  isActive: boolean;
  onPress: (lang: string) => void;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title }) => (
  <Fragment>
    <Text style={styles.sectionHeader}>{title}</Text>
    <Divider />
  </Fragment>
);

const Item: FC<ItemProps> = ({ item, isActive, onPress }) => {
  const sectionItemStyle = [
    styles.sectionItem,
    isActive ? styles.sectionItemActive : {},
  ];

  return (
    <TouchableOpacity onPress={() => onPress(item.value)}>
      <Text style={sectionItemStyle}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const Language = () => {
  const { ref, userLang, onClosed, onLangPress } = useLanguage();
  const { translate } = useI18n();
  const config = [
    {
      title: translate('appLanguageSelect'),
      data: objectToLabelValueMap(LANGS),
    },
  ];

  return (
    <Modalize
      ref={ref}
      onClosed={onClosed}
      sectionListProps={{
        sections: config,
        keyExtractor: (item) => item.value,
        renderSectionHeader: ({ section: { title } }) => (
          <SectionHeader title={title} />
        ),
        renderItem: ({ item }) => (
          <Item
            item={item}
            isActive={item.value === userLang}
            onPress={onLangPress}
          />
        ),
      }}
      adjustToContentHeight
    />
  );
};

export default Language;
