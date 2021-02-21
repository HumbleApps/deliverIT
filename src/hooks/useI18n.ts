import { useSelector } from 'react-redux';

import { selectUserLang } from 'selectors/userSelector';

import I18n from 'utils/i18n';

const useI18n = () => {
  const lang = useSelector(selectUserLang);

  I18n.locale = lang || 'en';

  return {
    translate: I18n.t,
  };
};

export default useI18n;
