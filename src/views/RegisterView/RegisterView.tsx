import React from 'react';
import { Redirect } from 'react-router-native';
import { View } from 'react-native';
import { Formik } from 'formik';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Navbar from 'components/Navbar';
import Button from 'components/Button';
import { TextField, SelectField, RadioField } from 'components/Fields';

import useI18n from 'hooks/useI18n';

import pathNames from 'routes/pathNames';

import styles from './RegisterView.styles';
import ViewStyles from 'views/View.styles';

import useRegister from './useRegister';
import { OptionProps } from 'types/fieldTypes';

const RegisterView = () => {
  const {
    userType,
    initialValues,
    validationSchema,
    cities,
    onSubmit,
    onCityChange,
  } = useRegister();
  const { translate } = useI18n();
  if (userType) {
    return <Redirect to={pathNames.verification} />;
  }
  const citiesMap = cities.map((c) => ({ label: c.name, value: c.code }));
  return (
    <View style={ViewStyles.container}>
      <Navbar
        header={translate('registration')}
        isBackable={false}
        showLanguage
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <View style={styles.form}>
            <TextField
              label={translate('name')}
              value={values.name}
              error={errors.name}
              touched={touched.name}
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              placeholder={translate('enterYourName')}
              style={styles.input}
            />
            <SelectField
              label={translate('location')}
              value={citiesMap.find((c) => c.value === values.city)}
              options={citiesMap}
              onChange={(value: OptionProps) => {
                setFieldValue('city', value.value);
                onCityChange(value.value);
              }}
            />
            <View style={styles.radioContainer}>
              <RadioField
                label={translate('ownVehicle')}
                options={[
                  { label: 'Yes', value: true },
                  { label: 'No', value: false },
                ]}
                value={values.hasVehicle}
                onChange={(value: boolean) =>
                  setFieldValue('hasVehicle', value)
                }
              />
            </View>
            <Button
              title={translate('ok')}
              iconLeft={faCheck}
              onPress={handleSubmit as any}
              style={styles.okBtn}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegisterView;
