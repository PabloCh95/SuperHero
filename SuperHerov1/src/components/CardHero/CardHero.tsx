import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Image, Icon, LinearProgress} from 'react-native-elements';

export default function CardHero({heroe, removeHero, navigation}): JSX.Element {
  console.log('hero :', heroe);
  const {url} = heroe.image;
  return (
    <Card containerStyle={styles.containerCard}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() =>
          navigation.navigate('Details', {
            screen: 'Details',
            params: {heroe},
          })
        }>
        <View style={styles.viewPowerstate}>
          <Text style={styles.itemPowerstate}>
            combat: {heroe.powerstats.combat}
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            durability: {heroe.powerstats.durability}
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            intelligence: {heroe.powerstats.intelligence}
          </Text>
          <LinearProgress color="orange" />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.itemTitle}>{heroe.name}</Text>
          <Image
            source={{uri: url}}
            style={styles.itemImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.viewPowerstate}>
          <Text style={styles.itemPowerstate}>
            power: {heroe.powerstats.power},
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            speed: {heroe.powerstats.speed}
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            strength: {heroe.powerstats.strength}
          </Text>
          <LinearProgress color="orange" />
        </View>
      </TouchableOpacity>
      <Icon
        type="material-community"
        name="delete"
        size={30}
        color="orange"
        onPress={() => removeHero(heroe)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    height: 200,
    borderWidth: 0,
    backgroundColor: '#222527',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  viewPowerstate: {
    justifyContent: 'flex-end',
    margin: 10,
  },
  itemPowerstate: {
    color: 'orange',
    fontSize: 13,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
