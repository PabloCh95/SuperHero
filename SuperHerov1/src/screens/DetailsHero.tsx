import React from 'react';
import {ScrollView, Text, Image, StyleSheet, View} from 'react-native';
import Loading from '../components/Loading/Loading';

export default function DetailsHero(props) {
  const {route, navigation} = props;
  const {heroes} = route.params.params;
 
  if (!heroes) {
    return <Loading isVisible={true} text="Cargando" />;
  }
  return (
    <ScrollView>
      <Image source={{uri: heroes.image.url}} style={styles.ImageHero} />
      <Text style={styles.TitleName}>{heroes.name}</Text>
      <Text style={styles.Description}></Text>
      <View style={{flexDirection:"column",alignItems:"center"}}>
          <Text style={styles.Description}>
            Full Name: {heroes.biography.["full-name"]}
          </Text>
          <Text style={styles.Description}>
            Alias: {heroes.biography.aliases[0]} 
          </Text>
          <Text style={styles.Description}>
            Workplace: {heroes.work.base }
           </Text>
            <Text style={styles.Description}>
                Weight: {heroes.appearance.weight[1]}
            </Text>
            <Text style={styles.Description}>
                Height: {heroes.appearance.height[1]}
            </Text>
            <Text style={styles.Description}>
                Eye Color: {heroes.appearance.['eye-color']}
            </Text>
            <Text style={styles.Description}>
                Hair Color: {heroes.appearance.['hair-color']}
            </Text>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ImageHero: {
    marginTop: 10,
    marginBottom: 10,
    height: 220,
  },
  TitleName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
  },
  Description: {
    marginTop: 5,
    color: 'orange',
  },
});
