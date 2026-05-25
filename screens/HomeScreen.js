import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useFonts } from 'expo-font';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carrega a fonte de Game Boy antes de exibir a tela
  const [fontsLoaded] = useFonts({
    'VT323': require('../assets/fonts/VT323-Regular.ttf'),
  });

  // Consumindo os primeiros 20 Pokémon da PokéAPI
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        
        const detailedResults = await Promise.all(
          data.results.map(async (pokemon) => {
            try {
              const res = await fetch(pokemon.url);
              const detail = await res.json();
              
              // Mapeando os status de forma organizada
              const statsObj = {};
              detail.stats.forEach(s => {
                statsObj[s.stat.name] = s.base_stat;
              });

              return {
                id: detail.id,
                name: detail.name,
                sprite: detail.sprites.front_default,
                types: detail.types.map((t) => t.type.name),
                stats: {
                  hp: statsObj['hp'] || 50,
                  attack: statsObj['attack'] || 50,
                  defense: statsObj['defense'] || 50,
                  speed: statsObj['speed'] || 50,
                }
              };
            } catch {
              return { 
                id: 0, 
                name: pokemon.name, 
                sprite: null, 
                types: ['unknown'],
                stats: { hp: 50, attack: 50, defense: 50, speed: 50 }
              };
            }
          })
        );
        
        setPokemons(detailedResults);
      } catch (error) {
        console.error("Erro de conexão com a PokéAPI:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  // Filtro dinâmico da barra de busca
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  // Se a fonte ainda estiver carregando, exibe uma tela vazia de segurança
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Título Estilo Game Boy */}
      <Text style={styles.title}>POKÉDEX RETRÔ</Text>
      
      {/* Nossa Barra de Busca Componentizada */}
      <SearchBar value={search} onChangeText={setSearch} />

      {/* Indicador de Carregamento da API */}
      {loading ? (
        <ActivityIndicator size="large" color="#0F380F" style={{ flex: 1 }} />
      ) : (
        /* Nossa Lista de Cards utilizando o PokemonCard */
        <FlatList
          data={filteredPokemons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              id={item.id}
              types={item.types}
              sprite={item.sprite}
              onPress={() => navigation.navigate('Details', { pokemon: item })} // <--- AGORA É REAL!
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BBC0F', // Fundo verde-claro clássico da tela do Game Boy
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'VT323',
    fontSize: 36,
    color: '#0F380F',
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 2,
  },
});