import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import Loading from '../components/Loading/Loading';

export default function DetailsHero(props: any) {
  const {route} = props;
  const {heroe} = route.params.params;
  if (!heroe) {
    return <Loading isVisible={true} text="Cargando" />;
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle={'light-content'} />
      <ScrollView>
        <Image source={{uri: heroe.image.url}} style={styles.ImageHero} />
        <Text style={styles.TitleName}>{heroe.name}</Text>
        <Text style={styles.Description}></Text>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={styles.Description}>
            Full Name: {heroe.biography?.['full-name']}
          </Text>
          <Text style={styles.Description}>
            Alias: {heroe.biography.aliases[0]}
          </Text>
          <Text style={styles.Description}>Workplace: {heroe.work.base}</Text>
          <Text style={styles.Description}>
            Weight: {heroe.appearance.weight[1]}
          </Text>
          <Text style={styles.Description}>
            Height: {heroe.appearance.height[1]}
          </Text>
          <Text style={styles.Description}>
            Eye Color: {heroe.appearance?.['eye-color']}
          </Text>
          <Text style={styles.Description}>
            Hair Color: {heroe.appearance?.['hair-color']}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, flexGrow: 1},
  ImageHero: {
    marginTop: 10,
    marginBottom: 10,
    height: 400,
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
