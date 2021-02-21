import React, { Fragment } from 'react';
import { Redirect } from 'react-router-native';
import { View, Image } from 'react-native';
import { Formik } from 'formik';

import { TextField } from 'components/Fields';
import Button from 'components/Button';
import Text from 'components/Text';

import useLogin from 'hooks/useLogin';
import useI18n from 'hooks/useI18n';

import { LOGO_IMG } from 'images';
import pathNames from 'routes/pathNames';

import styles from './LoginView.styles';
import viewStyles from 'views/View.styles';
import TncText from './TncText';

const LoginView = () => {
  const {
    isOtpGenerated,
    validationSchema,
    initialValues,
    isAuthenticated,
    onSubmit,
  } = useLogin();
  const { translate } = useI18n();

  if (isAuthenticated) {
    return <Redirect to={pathNames.register} />;
  }

  if (isOtpGenerated) {
    return <Redirect to={pathNames.otp} />;
  }

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          return (
            <View style={[viewStyles.container, styles.container]}>
              <Image source={LOGO_IMG} style={styles.img} />
              <Text style={styles.header}>{translate('login')}</Text>

              <TextField
                placeholder={translate('enter10DigitNumber')}
                keyboardType="numeric"
                value={values.phone}
                error={errors.phone}
                touched={touched.phone}
                onBlur={handleBlur('phone')}
                onChangeText={handleChange('phone')}
                addon="+91"
                style={styles.phoneNumber}
              />
              <Button
                title={translate('getOtp')}
                onPress={handleSubmit as any}
              />
              <Text style={styles.tnc}>
                <TncText />
              </Text>
            </View>
          );
        }}
      </Formik>
    </Fragment>
  );
};

export default LoginView;
