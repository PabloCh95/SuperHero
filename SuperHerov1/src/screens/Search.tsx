import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import SuperHeroeItem from '../components/SuperHeroItem/SuperHeroItem';
import NotFoundResults from '../components/NotFoundResults/NotFoundResults';
import {SearchBar} from 'react-native-elements';
import {getSearch} from '../api/Search';
import {RootObject} from '../utils/interface';

export default function Search(props: {navigation: any}): JSX.Element {
  const {navigation} = props;
  const [search, setSearch] = useState<string>('');
  const [superHeroes, setSuperHeroes] = useState<RootObject>({});

  useEffect(() => {
    (async () => {
      if (search.length > 3) {
        setSuperHeroes(await getSearch(search));
      }
    })();
  }, [search]);

  return (
    <View>
      <SearchBar
        placeholder="Busca un Superheroe..."
        onChangeText={(e: string) => setSearch(e)}
        value={search}
        containerStyle={styles.searchBar}
        round={true}
      />

      {superHeroes.response == 'success' ? (
        <FlatList
          data={superHeroes.results}
          renderItem={heroes => (
            <SuperHeroeItem heroe={heroes.item} navigation={navigation} />
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
