import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import useCountDown from 'react-countdown-hook';

import { generateOtp, validateOtp } from 'actions/authActions';

import { selectIsAuthenticated } from 'selectors/userSelector';
import { selectPhoneNumber } from 'selectors/authSelectors';

import I18n from 'utils/i18n';

import { otpRegExp } from 'constants/regex';
import { ONE_MINUTE_IN_MS, ONE_SECOND_IN_MS } from 'constants/miscData';

import TrackEvents from 'constants/trackEvents';
import useSegment from 'hooks/useSegment';

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(otpRegExp, I18n.t('enterValidOtp'))
    .required(I18n.t('required')),
});

export const initialValues = {
  otp: '',
};

type InitialValues = typeof initialValues;

const useOtp = () => {
  const dispatch = useDispatch();
  const { trackEventInSegment } = useSegment();

  const [timeLeft, { start, reset }] = useCountDown(
    ONE_MINUTE_IN_MS,
    ONE_SECOND_IN_MS,
  );
  const [numOfTries, setNumOfTries] = useState(1);

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const phoneNumber = useSelector(selectPhoneNumber);

  const otherProperties = {
    UI_Item: 'OTP Page',
  };

  const logOTPPageViewToSegment = () => {
    trackEventInSegment({
      collectData: { mobile_number: phoneNumber },
      eventName: TrackEvents.view_otp_page,
      otherProperties,
    });
  };

  const logOtpOkToSegment = () => {
    trackEventInSegment({
      collectData: { mobile_number: phoneNumber },
      eventName: TrackEvents.click_otp_ok,
      otherProperties,
    });
  };

  const logOtpResendToSegment = () => {
    trackEventInSegment({
      collectData: { mobile_number: phoneNumber },
      eventName: TrackEvents.click_resend_otp,
      otherProperties,
    });
  };

  useEffect(() => {
    logOTPPageViewToSegment();
  }, []);

  const handleResetOtpClick = () => {
    logOtpResendToSegment();
    if (phoneNumber) {
      reset();
      start();
      setNumOfTries(numOfTries + 1);
      dispatch(generateOtp(phoneNumber));
    }
  };

  // const handleCallOtpClick = () => {
  //   console.log('Call OTP');
  // };

  const handleSubmit = (values: InitialValues) => {
    logOtpOkToSegment();
    if (phoneNumber) {
      dispatch(validateOtp(phoneNumber, values.otp));
    }
  };

  useEffect(() => {
    start();
  }, [start]);

  return {
    timeLeft: timeLeft / 1000,
    numOfTries,
    isAuthenticated,
    phoneNumber,
    validationSchema,
    onResetOtpClick: handleResetOtpClick,
    onSubmit: handleSubmit,
    // handleCallOtpClick,
  };
};

export default useOtp;
