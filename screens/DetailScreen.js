import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { pokemon } = route.params;

  // Função para calcular a largura da barra (máximo 150 para atingir 100% da barra)
  const calculateBarWidth = (statValue) => {
    const percentage = (statValue / 150) * 100;
    return `${Math.min(percentage, 100)}%`; // Não deixa passar de 100%
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"< VOLTAR"}</Text>
      </TouchableOpacity>

      {/* Box Principal (Visual de Batalha) */}
      <View style={styles.battleBox}>
        <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>
        <Text style={styles.number}>#{pokemon.id.toString().padStart(3, '0')}</Text>
        
        <View style={styles.spriteContainer}>
          {pokemon.sprite && (
            <Image source={{ uri: pokemon.sprite }} style={styles.sprite} />
          )}
        </View>

        <Text style={styles.typeText}>
          TIPO: {pokemon.types.join(' / ').toUpperCase()}
        </Text>
      </View>

      {/* Seção de Status REAIS */}
      <View style={styles.statsBox}>
        <Text style={styles.statsTitle}>STATUS BASE</Text>
        
        {/* HP */}
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>HP</Text>
          <Text style={styles.statValue}>{pokemon.stats.hp}</Text>
          <View style={styles.statBarContainer}>
            <View style={[styles.statBar, { width: calculateBarWidth(pokemon.stats.hp) }]} />
          </View>
        </View>

        {/* ATK */}
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>ATK</Text>
          <Text style={styles.statValue}>{pokemon.stats.attack}</Text>
          <View style={styles.statBarContainer}>
            <View style={[styles.statBar, { width: calculateBarWidth(pokemon.stats.attack) }]} />
          </View>
        </View>

        {/* DEF */}
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>DEF</Text>
          <Text style={styles.statValue}>{pokemon.stats.defense}</Text>
          <View style={styles.statBarContainer}>
            <View style={[styles.statBar, { width: calculateBarWidth(pokemon.stats.defense) }]} />
          </View>
        </View>

        {/* SPD */}
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>SPD</Text>
          <Text style={styles.statValue}>{pokemon.stats.speed}</Text>
          <View style={styles.statBarContainer}>
            <View style={[styles.statBar, { width: calculateBarWidth(pokemon.stats.speed) }]} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BBC0F',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontFamily: 'VT323',
    fontSize: 22,
    color: '#0F380F',
  },
  battleBox: {
    backgroundColor: '#8BAC0F',
    borderWidth: 3,
    borderColor: '#0F380F',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'VT323',
    fontSize: 32,
    color: '#0F380F',
  },
  number: {
    fontFamily: 'VT323',
    fontSize: 20,
    color: '#306230',
  },
  spriteContainer: {
    backgroundColor: '#9BBC0F',
    borderWidth: 2,
    borderColor: '#0F380F',
    marginVertical: 15,
    padding: 10,
  },
  sprite: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  typeText: {
    fontFamily: 'VT323',
    fontSize: 20,
    color: '#0F380F',
  },
  statsBox: {
    backgroundColor: '#8BAC0F',
    borderWidth: 3,
    borderColor: '#0F380F',
    padding: 15,
  },
  statsTitle: {
    fontFamily: 'VT323',
    fontSize: 24,
    color: '#0F380F',
    textAlign: 'center',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statLabel: {
    fontFamily: 'VT323',
    fontSize: 20,
    color: '#0F380F',
    width: 35,
  },
  statValue: {
    fontFamily: 'VT323',
    fontSize: 18,
    color: '#306230',
    width: 35,
    textAlign: 'right',
  },
  statBarContainer: {
    flex: 1,
    height: 12,
    backgroundColor: '#9BBC0F',
    borderWidth: 2,
    borderColor: '#0F380F',
    marginLeft: 10,
  },
  statBar: {
    height: '100%',
    backgroundColor: '#0F380F',
  },
});