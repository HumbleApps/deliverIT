import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  faArrowLeft,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';

import Text from 'components/Text';
import Icon from 'components/Icon';
import CustomIcon from 'components/CustomIcon';

import isEmpty from 'utils/isEmpty';
import LANGS from 'constants/languages';

import useNavbar from './useNavbar';
import styles from './Navbar.styles';
import pathNames from 'routes/pathNames';
import { useHistory } from 'react-router-native';
import { Icons } from 'constants/icons';

type Props = {
  header?: string;
  isBackable?: boolean;
  showProfile?: boolean;
  showLanguage?: boolean;
  showNotification?: boolean;
  backPath?: pathNames;
};

const Navbar: FC<Props> = ({
  header = '',
  isBackable = true,
  showProfile = false,
  showLanguage = false,
  showNotification = false,
  backPath,
}) => {
  const {
    userLang,
    isLangOpen,
    onBackPress,
    onLangPress,
    onHelpPress,
    onProfilePress,
  } = useNavbar(backPath);

  const history = useHistory();

  const handleNotifications = () => {
    history.push(pathNames.notifications);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {isBackable && (
          <TouchableOpacity onPress={() => onBackPress()}>
            <Icon icon={faArrowLeft} />
          </TouchableOpacity>
        )}
        {showProfile && (
          <TouchableOpacity onPress={onProfilePress}>
            {/* <Icon icon={faUserCircle} size={24} /> */}
            <CustomIcon name={Icons.USER} size={26} />
          </TouchableOpacity>
        )}
        {!isEmpty(header) && <Text style={styles.header}>{header}</Text>}
      </View>
      <View style={styles.section}>
        {showLanguage && (
          <TouchableOpacity style={styles.langBtn} onPress={onLangPress}>
            <Text style={styles.langText}>{LANGS[userLang || 'en']}</Text>
            <Icon icon={isLangOpen ? faCaretUp : faCaretDown} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.icon} onPress={onHelpPress}>
          <CustomIcon name={Icons.HEADSET} size={24} />
        </TouchableOpacity>
        {showNotification && (
          <TouchableOpacity style={styles.icon} onPress={handleNotifications}>
            <CustomIcon name={Icons.BELL} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Navbar;
