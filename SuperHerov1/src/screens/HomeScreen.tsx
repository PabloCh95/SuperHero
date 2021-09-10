import React from 'react';
import Carousel from 'react-native-anchor-carousel';
import {View} from 'react-native';
import CardHero from '../components/CardHero/CardHero';
import {useSelector, useDispatch} from 'react-redux';
//import {Reducer} from '@reduxjs/toolkit';
import {RootDefaultState} from '../utils/interface';
import {Result} from '../utils/interface';
import {deleteHeros} from '../store/HeroSlice';

export default function HomeScreen({navigation}: any): JSX.Element {
  const dispatch = useDispatch();
  const selector = useSelector<RootDefaultState, Result[]>(
    (state: RootDefaultState): Result[] => state.hero,
  );
  const removeHero = (heroe: Result) => {
    dispatch(deleteHeros(heroe));
  };

  return (
    <View>
      <Carousel
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
    </View>
  );
}
