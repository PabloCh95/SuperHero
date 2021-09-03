import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import SuperHeroeItem from '../components/SuperHeroItem/SuperHeroItem';
import NotFoundResults from '../components/NotFoundResults/NotFoundResults';
import {SearchBar} from 'react-native-elements';
import {getSearch} from '../api/Search';
import {RootObject} from '../utils/interface';

export default function Search(props): JSX.Element {
  const {navigation} = props;
  const [search, setSearch] = useState<string>('');
  const [superHeroes, setSuperHeroes] = useState<RootObject>({});

  useEffect(() => {
    (async () => {
      if (search) {
        setSuperHeroes(await getSearch(search));
      }
    })();
  }, [search]);

  return (
    <View>
      <SearchBar
        placeholder="Busca un Superheroe..."
        onChangeText={e => setSearch(e)}
        value={search}
        containerStyle={styles.searchBar}
        round={true}
      />

      {superHeroes.response == 'success' ? (
        <FlatList
          data={superHeroes.results}
          renderItem={heroes => (
            <SuperHeroeItem heroes={heroes.item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
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
