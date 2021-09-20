import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Formik, Field} from 'formik';
import {registerValidation} from '../../utils/validationsYup';
import InputEmail from '../LoginForm/InputEmail';
import InputPassword from '../LoginForm/InputPassword';
import CustomInput from './CustomInput';

export default function LoginForm(): JSX.Element {
  return (
    <View style={styles.formContainer}>
      <Formik
        validationSchema={registerValidation}
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleSubmit, isValid, values}) => (
          <>
            <Field
              component={CustomInput}
              name="fullName"
              placeholder="Full Name"
            />
            <Field
              component={InputEmail}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <Field
              component={InputPassword}
              name="password"
              placeholder="Password"
            />
            <Field
              component={InputPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <Button
              containerStyle={styles.btnContainerLogin}
              buttonStyle={styles.btnLogin}
              onPress={handleSubmit}
              title="Sign In"
              disabled={!isValid || values.email === ''}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: '45%',
  },
  btnLogin: {
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});
