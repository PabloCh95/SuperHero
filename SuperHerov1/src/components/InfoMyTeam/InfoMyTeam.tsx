import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LinearProgress} from 'react-native-elements';
import {Powerstats, Result} from '../../utils/interface';

export default function InfoMyTeam({heroes}: {heroes: Result[]}) {
  const [team, setTeam] = useState<Powerstats>({
    combat: '',
    durability: '',
    intelligence: '',
    power: '',
    speed: '',
    strength: '',
  });

  const acumularCampo = (campo: string) => {
    if (
      campo != 'combat' &&
      campo != 'intelligence' &&
      campo != 'strength' &&
      campo != 'speed' &&
      campo != 'durability' &&
      campo != 'power'
    ) {
      return 0;
    }

    let stats = heroes.reduce<number>(
      (pastValue: number, heroe: Result) =>
        pastValue + parseInt(heroe.powerstats[campo]),
      0,
    );
    return stats;
  };

  const changeTeam = (): void => {
    //heroes.reduce(combat,parseInt(combat));
    let statsgenerales: Powerstats = {
      combat: '',
      durability: '',
      intelligence: '',
      power: '',
      speed: '',
      strength: '',
    };
    statsgenerales.combat = acumularCampo('combat') + '';
    statsgenerales.durability = acumularCampo('durability') + '';
    statsgenerales.intelligence = acumularCampo('intelligence') + '';
    statsgenerales.power = acumularCampo('power') + '';
    statsgenerales.speed = acumularCampo('speed') + '';
    statsgenerales.strength = acumularCampo('strength') + '';

    setTeam(statsgenerales);
  };

  useEffect(() => {
    changeTeam();
  }, [heroes]);

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textTitle}>TEAM INFO</Text>
      <Text style={styles.textTeam}>members: {heroes.length}</Text>
      <Text style={styles.textTeam}>Combat:{team.combat}</Text>
      <LinearProgress color="orange" style={{width: '20%'}} />
      <Text style={styles.textTeam}>intelligence:{team.intelligence}</Text>
      <LinearProgress color="orange" style={{width: '20%'}} />
      <Text style={styles.textTeam}>durability:{team.durability}</Text>
      <LinearProgress color="orange" style={{width: '20%'}} />
      <Text style={styles.textTeam}>power:{team.power}</Text>
      <LinearProgress color="orange" style={{width: '20%'}} />
      <Text style={styles.textTeam}>speed:{team.speed}</Text>
      <LinearProgress color="orange" style={{width: '20%'}} />
      <Text style={styles.textTeam}>strength:{team.strength}</Text>
      <LinearProgress color="orange" style={{width: '20%'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#222527',
    borderRadius: 20,
  },
  textTitle: {
    fontSize: 20,
    color: 'orange',
    fontWeight: 'bold',
  },
  textTeam: {
    fontSize: 15,
    color: 'orange',
  },
});
