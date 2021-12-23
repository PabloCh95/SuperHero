import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default function NotFoundHero() {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon
        type="material-community"
        name="account-group"
        size={35}
        color="orange"
      />
      <Text style={{color: 'orange', fontSize: 22}}>
        There are no heroes in your team
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
});
