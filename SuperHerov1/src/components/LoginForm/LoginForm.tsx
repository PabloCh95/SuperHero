import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Formik, Field} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginValidation} from '../../utils/validationsYup';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import {loginApi} from '../../api/User';
import {useDispatch} from 'react-redux';
import {addToken} from '../../store/UserSlice';

export default function LoginForm(props: any): JSX.Element {
  const {setIsVisible, isVisible} = props;
  const dispatch = useDispatch();
  const onSubmitApi = async (values: any) => {
    setIsVisible(!isVisible);
    loginApi({values})
      .then(async res => {
        setIsVisible(!isVisible);
        await AsyncStorage.setItem('token', res.data.token);

        dispatch(addToken(res.data.token));
      })
      .catch(err => {
        setIsVisible(!isVisible);
        console.log(err);
      });
  };

  return (
    <View style={styles.formContainer}>
      <Formik
        validationSchema={loginValidation}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => onSubmitApi(values)}>
        {({handleSubmit, isValid, values}) => (
          <>
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

            <Button
              titleStyle={{fontFamily: 'rockwell', fontWeight: 'normal'}}
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
