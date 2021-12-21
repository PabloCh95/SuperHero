import React from 'react';
import {StyleSheet, Image, View, StatusBar} from 'react-native';
import {Divider} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Login(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <StatusBar backgroundColor="#000000" barStyle={'light-content'} />
        <Image
          source={require('../assets/img/jpg/logo4.jpg')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Divider style={styles.divider} color="orange" />
        <View style={styles.viewContainer}>
          <RegisterForm />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 30,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    color: 'orange',
  },
  divider: {
    backgroundColor: 'orange',
    margin: 40,
  },
});
