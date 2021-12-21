import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, StatusBar} from 'react-native';
import SuperHeroeItem from '../components/SuperHeroItem/SuperHeroItem';
import NotFoundResults from '../components/NotFoundResults/NotFoundResults';
//redux
//import {useDispatch, useSelector} from 'react-redux';

import {SearchBar} from 'react-native-elements';
import {getSearch} from '../api/Search';
import {RootObject} from '../utils/interface';

export default function Search(props: {navigation: any}): JSX.Element {
  const {navigation} = props;
  const [search, setSearch] = useState<string>('');
  const [superHeroes, setSuperHeroes] = useState<RootObject>({});

  //const selector = useSelector((state: any) => state.hero);

  useEffect(() => {
    (async () => {
      if (search.length > 3) {
        const response = await getSearch(search);
        setSuperHeroes(response);
      }
    })();
  }, [search]);

  return (
    <View>
      <StatusBar backgroundColor="#000000" barStyle={'light-content'} />
      <SearchBar
        placeholder="Search a Hero..."
        onChangeText={(e: string): void => setSearch(e)}
        value={search}
        containerStyle={styles.searchBar}
        round={true}
      />

      {superHeroes.response === 'success' ? (
        <FlatList
          data={superHeroes.results}
          renderItem={heroes => (
            <SuperHeroeItem
              heroe={heroes.item}
              navigation={navigation}
              // selector={selector}
            />
          )}
          keyExtractor={(item, index: number) => index.toString()}
        />
      ) : (
        <NotFoundResults />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
  },
});
