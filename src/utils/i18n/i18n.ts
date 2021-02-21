import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import english from 'constants/locales/english.json';
import hindi from 'constants/locales/hindi.json';
import telugu from 'constants/locales/telugu.json';
import marathi from 'constants/locales/marathi.json';
import tamil from 'constants/locales/tamil.json';
import kannada from 'constants/locales/kannada.json';
import bengali from 'constants/locales/bengali.json';
import gujarati from 'constants/locales/gujarati.json';
import malayalam from 'constants/locales/malayalam.json';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en: english,
  hi: hindi,
  te: telugu,
  mr: marathi,
  ta: tamil,
  kn: kannada,
  be: bengali,
  gu: gujarati,
  ml: malayalam,
};

I18n.locale = 'en';

export default I18n;
