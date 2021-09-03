import React from 'react';
import {View, Text} from 'react-native';

export default function DetailsHero(props) {
  const {route, navigation} = props;

  return (
    <View>
      <Text style={{color: '#fff'}}>SuperHero Details</Text>
    </View>
  );
}
