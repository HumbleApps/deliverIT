import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import english from 'constants/locales/english.json';


const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en: english,
};

I18n.locale = 'en';

export default I18n;
