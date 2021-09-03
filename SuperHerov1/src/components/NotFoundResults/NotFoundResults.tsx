import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

export default function NotFoundResults() {
  return (
    <View style={styles.itemContainer}>
      <Icon
        type="material-community"
        name="magnify-close"
        size={35}
        color="orange"
      />
      <Text style={styles.itemTitle}>Not Found Results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: 10,
    color: 'orange',
  },
});
