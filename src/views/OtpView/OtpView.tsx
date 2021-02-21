import React, { useEffect, Fragment } from 'react';
import { View, Text } from 'react-native';
import { Formik, useFormikContext } from 'formik';
import { Redirect } from 'react-router-native';

import { OtpField } from 'components/Fields';
import Button, { LinkButton } from 'components/Button';
import Timer from 'components/Timer';

import pathNames from 'routes/pathNames';

import useI18n from 'hooks/useI18n';

import { MAX_OTP_TRIES } from 'constants/miscData';

import useOtp, { initialValues } from 'hooks/useOtp';
import useSMS from 'hooks/useSMS';

import styles from './OtpView.styles';
import viewStyles from 'views/View.styles';

const OtpView = () => {
  const {
    timeLeft,
    numOfTries,
    isAuthenticated,
    phoneNumber,
    validationSchema,
    onResetOtpClick,
    onSubmit,
  } = useOtp();
  const { translate } = useI18n();
  if (isAuthenticated) {
    return <Redirect to={pathNames.register} />;
  }

  if (!phoneNumber) {
    return <Redirect to={pathNames.otp} />;
  }

  return (
    <View style={[viewStyles.container]}>
      <Text style={styles.header}>
        {translate('otp')} {translate('code')}
      </Text>
      <Text style={styles.text}>
        {translate('pleaseEnter')}{' '}
        <Text style={styles.strong}>{translate('otp')}</Text>{' '}
        {translate('codeSentTo')}
      </Text>
      <Text style={styles.strong}>+91 {phoneNumber}</Text>
      <View style={styles.timer}>
        <Timer seconds={timeLeft} />
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => <OTPForm />}
      </Formik>
      <View style={styles.linkContainer}>
        {/* <LinkButton title="OTP via call?" onPress={handleCallOtpClick} /> */}
        <LinkButton
          title={`${translate('resend')} ${translate('otp')}`}
          onPress={onResetOtpClick}
          disabled={numOfTries >= MAX_OTP_TRIES || timeLeft !== 0}
        />
      </View>
    </View>
  );
};

const OTPForm = () => {
  const {
    values,
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
  } = useFormikContext<typeof initialValues>();
  const { code } = useSMS();
  const { translate } = useI18n();
  useEffect(() => {
    if (code) {
      setFieldValue('otp', code);
    }
  }, [code]);

  return (
    <Fragment>
      <OtpField
        pinCount={4}
        code={values.otp}
        error={errors.otp}
        touched={touched.otp}
        onCodeChanged={(code: string) => setFieldValue('otp', code)}
        onCodeFilled={() => setFieldTouched('otp')}
        autoFocusOnLoad={false}
      />
      <Button title={translate('ok')} onPress={handleSubmit as any} />
    </Fragment>
  );
};

export default OtpView;
