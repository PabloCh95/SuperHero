import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {addHeros} from '../../store/HeroSlice';
import {Result} from '../../utils/interface';
interface Props {
  heroe: Result;
  navigation: any;
  //selector: Result[];
}

export default function SuperHeroeItem({
  heroe,
  navigation,
}: //selector,
Props): JSX.Element {
  const {image, name} = heroe;
  const selector = useSelector((state: any) => state.hero);

  const dispatch = useDispatch();

  const verifyHero = selector.includes(heroe);

  const add = () => {
    dispatch(addHeros(heroe));
  };

  return (
    <View style={[styles.itemContainer, styles.viewItem]}>
      <TouchableOpacity
        style={[styles.itemContainer, styles.touchView]}
        onPress={() =>
          navigation.navigate('Details', {
            screen: 'Details',
            params: {heroe},
          })
        }>
        <Image style={styles.itemImage} source={{uri: image?.url}} />
        <View style={styles.viewText}>
          <Text style={styles.itemTitle}>{name}</Text>
          <Text style={styles.itemActivity}>Press for more details</Text>
        </View>
      </TouchableOpacity>
      {verifyHero ? (
        <Icon type="antdesign" name="minuscircleo" size={20} color="orange" />
      ) : (
        <Icon
          type="antdesign"
          name="plus"
          size={20}
          color="orange"
          onPress={add}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewItem: {
    justifyContent: 'space-between',
  },
  viewText: {flexDirection: 'column'},
  touchView: {
    width: '85%',
  },
  itemContainer: {
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
  itemActivity: {
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
