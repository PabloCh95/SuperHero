import React from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import CardHero from '../components/CardHero/CardHero';
import InfoMyTeam from '../components/InfoMyTeam/InfoMyTeam';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
//import {Reducer} from '@reduxjs/toolkit';
import {RootDefaultState} from '../utils/interface';
import {Result} from '../utils/interface';
import {deleteHeros} from '../store/HeroSlice';
import NotFoundHero from '../components/NotFoundResults/NotFoundHero';
import {setAutoFreeze} from 'immer';

export default function HomeScreen({navigation}: any): JSX.Element {
  const dispatch = useDispatch();
  const selector = useSelector<RootDefaultState, Result[]>(
    (state: RootDefaultState): Result[] => state.hero,
  );
  const removeHero = (heroe: Result) => {
    dispatch(deleteHeros(heroe));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle={'light-content'} />

      {selector.length != 0 ? (
        <>
          <Carousel
            style={{flex: 1}}
            data={selector}
            renderItem={(item: any) => (
              <CardHero
                heroe={item.item}
                removeHero={removeHero}
                navigation={navigation}
              />
            )}
            keyExtractor={(item: any, index: number) => index.toString()}
          />
          <InfoMyTeam heroes={selector} />
        </>
      ) : (
        <>
          <NotFoundHero />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
