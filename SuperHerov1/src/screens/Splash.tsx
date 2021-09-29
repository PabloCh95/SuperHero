import React /*{useEffect}*/ from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
//import {useNavigation} from '@react-navigation/core';
//import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';

export default function Splash() {
  /* const navigation = useNavigation();
  const selector = useSelector(state => state.user);
  useEffect(() => {
    {
      selector
        ? setTimeout(() => {
            navigation.navigate('Initial');
          }, 3000)
        : setTimeout(() => {
            navigation.navigate('login');
          }, 3000);
    }
  }, [selector]);*/
  return (
    <View style={styles.viewContainer}>
      <StatusBar backgroundColor="#000000" />
      <Animatable.Image
        animation="flash"
        easing="ease-in-out"
        iterationCount="infinite"
        style={styles.image}
        source={require('../assets/img/jpg/logo4.jpg')}
        resizeMode="center"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 250,
    width: '100%',
    height: 200,
  },
});
