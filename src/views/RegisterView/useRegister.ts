import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';
import * as Yup from 'yup';

import { createUserOrg, setCity } from 'actions/userActions';

import {
  selectCities,
  selectUserId,
  selectUserName,
  selectUserType,
  selectUserPhoneNumber,
} from 'selectors/userSelector';

import pathNames from 'routes/pathNames';

import I18n from 'utils/i18n';
import TrackEvents from 'constants/trackEvents';
import useSegment from 'hooks/useSegment';

const initialValues = {
  name: '',
  city: 'bang',
  hasVehicle: true,
};

type InitialValues = typeof initialValues;

const validationSchema = Yup.object().shape({
  name: Yup.string().required(I18n.t('required')),
  city: Yup.string().required(I18n.t('required')),
  hasVehicle: Yup.bool().required(I18n.t('required')),
});

const useRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cities = useSelector(selectCities);
  const userId = useSelector(selectUserId);
  const userName = useSelector(selectUserName);
  const userType = useSelector(selectUserType);
  const phoneNumber = useSelector(selectUserPhoneNumber);
  const { trackEventInSegment } = useSegment();

  const otherProperties = {
    UI_Item: 'Registration Page 1',
  };

  const logViewRegistrationPageToSegment = () => {
    trackEventInSegment({
      collectData: {
        mobile_number: phoneNumber,
        user_id: userId,
        user_type: userType,
      },
      eventName: TrackEvents.view_registration_page_1,
      otherProperties,
    });
  };

  useEffect(() => {
    logViewRegistrationPageToSegment();
  }, []);

  const handleSubmit = async (values: InitialValues) => {
    const { hasVehicle, ...userPayload } = values;

    if (!hasVehicle) {
      history.push(pathNames.noVehicle);
      return;
    }

    dispatch(createUserOrg({ phoneNumber, __user_id: userId, ...userPayload }));
  };

  const handleCityChange = (city: string) => {
    dispatch(setCity(city));
  };

  initialValues.name = userName || '';

  return {
    userType,
    cities,
    initialValues,
    validationSchema,
    onCityChange: handleCityChange,
    onSubmit: handleSubmit,
  };
};

export default useRegister;
