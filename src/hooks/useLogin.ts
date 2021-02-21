import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { getUserFromToken, setFetching } from 'actions/userActions';
import { setPhoneNumber, generateOtp } from 'actions/authActions';
import { showModal } from 'actions/modalActions';

import { selectIsAuthenticated } from 'selectors/userSelector';
import { selectIsOtpGenerated } from 'selectors/authSelectors';

import I18n from 'utils/i18n';
import { getToken } from 'utils/token';
import isEmpty from 'utils/isEmpty';

import { phoneRegExp } from 'constants/regex';

import { ModalNames } from 'modals';
import TrackEvents from 'constants/trackEvents';
import useSegment from 'hooks/useSegment';

const initialValues = {
  phone: '',
};

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, I18n.t('enterValidPhoneNumber'))
    .required(I18n.t('required')),
});

type InitialValues = typeof initialValues;

const useLogin = () => {
  const dispatch = useDispatch();
  const isOtpGenerated = useSelector(selectIsOtpGenerated);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { trackEventInSegment } = useSegment();

  const otherProperties = {
    UI_Item: 'Login Page',
  };

  const logLoginPageViewToSegment = () => {
    trackEventInSegment({
      collectData: {},
      eventName: TrackEvents.view_login_page,
      otherProperties,
    });
  };

  const logClickGetOtpToSegment = (phoneNumber: string) => {
    trackEventInSegment({
      collectData: { mobile_number: phoneNumber },
      eventName: TrackEvents.click_get_otp,
      otherProperties,
    });
  };

  useEffect(() => {
    logLoginPageViewToSegment();
  }, []);

  const handleSubmit = (values: InitialValues) => {
    logClickGetOtpToSegment(values.phone);
    dispatch(setPhoneNumber(values.phone));
    dispatch(generateOtp(values.phone));
  };

  useEffect(() => {
    const _getToken = async () => {
      try {
        const token = await getToken();

        if (!isEmpty(token)) {
          dispatch(getUserFromToken());
        } else {
          dispatch(showModal(ModalNames.LANGUAGE_MODAL));
          dispatch(setFetching(false));
        }
      } catch (error) {
        throw error;
      }
    };

    _getToken();
  }, [dispatch]);

  return {
    isOtpGenerated,
    isAuthenticated,
    validationSchema,
    initialValues,
    onSubmit: handleSubmit,
  };
};

export default useLogin;
