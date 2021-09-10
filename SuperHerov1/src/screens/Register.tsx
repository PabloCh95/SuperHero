import React from 'react';
import {ScrollView, StyleSheet, Image, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';

export default function Login(): JSX.Element {
  return (
    <ScrollView>
      <Image
        source={require('../assets/img/jpg/logo4.jpg')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Divider style={styles.divider} color="orange" />
      <View style={styles.viewContainer}>
        <Text style={styles.textRegister}>Aca va el Form</Text>
      </View>
    </ScrollView>
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
