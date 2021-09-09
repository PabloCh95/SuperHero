import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Image, Icon, LinearProgress} from 'react-native-elements';

export default function CardHero({item, removeHero}): JSX.Element {
  const {url} = item.image;
  return (
    <Card containerStyle={styles.containerCard}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <View style={styles.viewPowerstate}>
          <Text style={styles.itemPowerstate}>
            combat: {item.powerstats.combat}
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            durability: {item.powerstats.durability}
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            intelligence: {item.powerstats.intelligence}
          </Text>
          <LinearProgress color="orange" />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Image
            source={{uri: url}}
            style={styles.itemImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.viewPowerstate}>
          <Text style={styles.itemPowerstate}>
            power: {item.powerstats.power},
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            speed: {item.powerstats.speed}
          </Text>
          <LinearProgress color="orange" />
          <Text style={styles.itemPowerstate}>
            strength: {item.powerstats.strength}
          </Text>
          <LinearProgress color="orange" />
        </View>
      </TouchableOpacity>
      <Icon
        type="material-community"
        name="delete"
        size={30}
        color="orange"
        onPress={() => removeHero(item)}
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
