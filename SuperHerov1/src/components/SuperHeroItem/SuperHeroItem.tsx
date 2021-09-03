import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function SuperHeroeItem({heroes, navigation}): JSX.Element {
  const {image, name} = heroes;

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate('Details', {
          screen: 'Details',
          params: {heroes},
        })
      }>
      <Image style={styles.itemImage} source={{uri: image.url}} />
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.itemTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    //Estilos para el itemContainer
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor: '#222527',
  },
  itemTitle: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: 10,
    color: 'orange',
  },
  itemState: {
    fontSize: 13,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: 10,
    color: 'gray',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
