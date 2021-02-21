import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Text from 'components/Text';
import { LinkButton } from 'components/Button';
import { selectUserLang } from 'selectors/userSelector';
import { Langs } from 'constants/languages';

const TncText = () => {
  const lang = (useSelector(selectUserLang) as Langs) || Langs.en;

  const config = {
    [Langs.en]: {
      firstText:
        'By clicking on GET OTP, we understand that  you have read and accepted our ',
      link: 'Terms and conditions',
      secondeText: '',
    },
    [Langs.hi]: {
      firstText:
        'आपके OTP प्राप्त करें पर क्लिक करने के बाद, हम समझेंगे कि आपने हमारे ',
      link: 'नियम एवं शर्तों',
      secondeText: ' को पढ़ लिया है और इन्हें स्वीकार कर लिया है',
    },
    [Langs.ta]: {
      firstText: 'OTPயை பெறவும் -ஐ கிளிக் செய்வதன் மூலம், எங்கள் ',
      link: 'விதிமுறைகள் மற்றும் நிபந்தனைகள',
      secondeText:
        ' நீங்கள் படித்து ஏற்றுக்கொண்டீர்கள் என்பதை புரிந்துகொள்கிறோம்  ',
    },
    [Langs.te]: {
      firstText: 'OTP పొందండి  పై క్లిక్ చేయడం ద్వారా, మీరు మా  ',
      link: 'నిబంధనలు మరియు షరతులను',
      secondeText: ' చదివి అంగీకరించారని మేము అర్థం చేసుకున్నాము ',
    },
    [Langs.kn]: {
      firstText: 'OTP ಪಡೆಯಿರಿ ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ',
      link: 'ನಿಯಮ ಮತ್ತು ಷರತ್ತುಗಳನ್ನು',
      secondeText:
        ' ಓದಿದ್ದೀರಿ ಮತ್ತು ಸ್ವೀಕರಿಸಿದ್ದೀರಿ ಎಂದು ನಾವು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ ',
    },
    [Langs.mr]: {
      firstText:
        'तुम्ही OTP मिळवा वर क्लिक केल्यास आम्ही समजू की तुम्ही आमच्या ',
      link: 'अटी व शर्ती',
      secondeText: ' वाचल्या आणि स्वीकारल्या आहेत ',
    },
    [Langs.be]: {
      firstText: 'OTP পান-এ ক্লিক করলে, আমরা বুঝতে পারি যে আপনি আমাদের  ',
      link: 'নিয়ম ও শর্তাবলী',
      secondeText: ' পড়েছেন এবং স্বীকার করেছেন ',
    },
    [Langs.gu]: {
      firstText: 'તમારા OTP મેળવો પર ક્લિક કરીને, અમે સમજીએ છીએ કે તમે અમારા ',
      link: 'નિયમો અને શરતો',
      secondeText: ' ને વાંચી લીધા છે અને તેને સ્વીકારેલ છે ',
    },
    [Langs.ml]: {
      firstText: 'OTP നേടുക  ക്ലിക്കുചെയ്യുന്നതിലൂടെ, നിങ്ങള്‍ ഞങ്ങളുടെ ',
      link: 'നിബന്ധനകളും വ്യവസ്ഥകളും',
      secondeText:
        ' വായിക്കുകയും അംഗീകരിക്കുകയും ചെയ്തുവെന്ന് ഞങ്ങള്‍ മനസ്സിലാക്കുന്നു',
    },
  };

  return (
    <Fragment>
      <Text>{config[lang].firstText}</Text>
      <LinkButton
        title={config[lang].link}
        url="https://letstransport.in/terms-conditions"
      />
      <Text>{config[lang].secondeText}</Text>
    </Fragment>
  );
};

export default TncText;
