import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modalize } from 'react-native-modalize';

import { setLanguage, updateUserOrg } from 'actions/userActions';
import { hideModal } from 'actions/modalActions';

import {
  selectUserLang,
  selectUserId,
  selectUserType,
} from 'selectors/userSelector';

import useSegment from 'hooks/useSegment';
import TrackEvents from 'constants/trackEvents';

const useLanguage = () => {
  const dispatch = useDispatch();
  const modalizeRef = useRef<Modalize>(null);
  const userLang = useSelector(selectUserLang);
  const userId = useSelector(selectUserId);
  const userType = useSelector(selectUserType);

  const { trackEventInSegment } = useSegment();
  const otherProperties = {
    UI_Item: 'Language Modal',
  };

  useEffect(() => {
    if (!userType) {
      trackEventInSegment({
        collectData: {},
        eventName: TrackEvents.view_app_language_modal_start,
        otherProperties,
      });
    }
  }, []);

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const handleClosed = () => {
    setTimeout(() => {
      dispatch(hideModal());
    }, 1000);
  };

  const handleLangPress = (lang: string) => {
    if (userType) {
      dispatch(updateUserOrg(userId, { language: lang }));
    } else {
      trackEventInSegment({
        collectData: { language: lang },
        eventName: TrackEvents.click_app_language_start,
        otherProperties,
      });
      dispatch(setLanguage(lang));
    }
    modalizeRef.current?.close();
  };

  return {
    userLang,
    ref: modalizeRef,
    onClosed: handleClosed,
    onLangPress: handleLangPress,
  };
};

export default useLanguage;
