import React, {useEffect} from 'react';
import Carousel from 'react-native-anchor-carousel';
import {View} from 'react-native';
import CardHero from '../components/CardHero/CardHero';
import {useSelector, useDispatch} from 'react-redux';
import {Reducer} from '@reduxjs/toolkit';
import HeroSlice, {deleteHeros} from '../store/HeroSlice';
import UserSlice from '../store/UserSlice';
import {Result} from '../utils/interface';
import {team} from '../utils/constTeam';

interface RootDefaultState {
  hero: typeof HeroSlice;
  user: typeof UserSlice;
}

export default function HomeScreen(): JSX.Element {
  const dispatch = useDispatch();
  const selector = useSelector<RootDefaultState, Result[]>(
    (state: RootDefaultState) => state.hero,
  );
  const removeHero = item => {
    dispatch(deleteHeros(item));
  };

  return (
    <View>
      <Carousel
        data={selector}
        renderItem={item => (
          <CardHero item={item.item} removeHero={removeHero} />
        )}
        keyExtractor={(item: any, index: number) => index.toString()}
      />
    </View>
  );
}
