import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function InfoMyTeam() {
  return (
    <View>
      <Text style={styles.textTeam}>info team</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTeam: {
    color: '#fff',
  },
});
