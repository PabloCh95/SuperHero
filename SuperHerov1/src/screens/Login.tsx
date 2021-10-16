import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {ScrollView, StyleSheet, Image, View, Text, StatusBar } from 'react-native';
import {Divider} from 'react-native-elements';
import LoginForm from '../components/LoginForm/LoginForm';

export default function Login(): JSX.Element {
  return (
    <ScrollView style={styles.containerView}>
      <StatusBar backgroundColor="#000000" barStyle={'light-content'}/>
      <Image
        source={require('../assets/img/jpg/logo4.jpg')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Divider style={styles.divider} color="orange" />
      <View style={styles.viewContainer}>
        <LoginForm />
        <CreateAccount />
      </View>
    </ScrollView>
  );
}
function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Do you haven't an account?{' '}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate('register')}>
        Sign up
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  containerView:{
    marginTop:30
  },
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
    color: '#fff',
    textAlign: 'center',
  },
  btnRegister: {
    color: 'orange',
    fontWeight: 'bold',
  },
  divider: {
    margin: 40,
  },
});
