import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Linking } from 'react-native';

import { showModal } from 'actions/modalActions';

import {
  selectUserLang,
  selectDriverHelplineNumber,
} from 'selectors/userSelector';
import { selectModalType } from 'selectors/modalSelector';

import { ModalNames } from 'modals';
import pathNames from 'routes/pathNames';

const useNavbar = (backPath: pathNames | undefined) => {
  const dispatch = useDispatch();
  const userLang = useSelector(selectUserLang);
  const driverHelpline = useSelector(selectDriverHelplineNumber);
  const modalType = useSelector(selectModalType);
  const { push, goBack } = useHistory();

  const handleBackPress = () => {
    if (backPath) {
      push(backPath);
    } else {
      goBack();
    }
  };

  const handleLangPress = () => {
    dispatch(showModal(ModalNames.LANGUAGE_MODAL));
  };

  const handleHelpPress = () => {
    Linking.openURL(`tel:${driverHelpline}`);
  };

  const handleProfilePress = () => {
    push(pathNames.profile);
  };

  return {
    userLang,
    driverHelpline,
    isLangOpen: ModalNames.LANGUAGE_MODAL === modalType,
    onBackPress: handleBackPress,
    onLangPress: handleLangPress,
    onHelpPress: handleHelpPress,
    onProfilePress: handleProfilePress,
  };
};

export default useNavbar;
