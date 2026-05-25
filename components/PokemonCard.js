import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function PokemonCard({ name, id, types, sprite, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {/* Container do Sprite */}
      <View style={styles.spriteContainer}>
        <Image source={{ uri: sprite }} style={styles.sprite} />
      </View>

      {/* Textos Informativos */}
      <View style={styles.infoContainer}>
        <Text style={styles.pokemonText}>
          {name.toUpperCase()} #{id.toString().padStart(3, '0')}
        </Text>
        <Text style={styles.typeText}>
          {types.join(' / ').toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8BAC0F', // O verde clássico do Game Boy
    borderWidth: 3,
    borderColor: '#0F380F',    // Borda escura pixelada
    flexDirection: 'row',
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  spriteContainer: {
    backgroundColor: '#9BBC0F',
    borderWidth: 2,
    borderColor: '#0F380F',
    padding: 4,
    marginRight: 12,
  },
  sprite: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  pokemonText: {
    fontFamily: 'VT323', // Nossa fonte retro
    fontSize: 22,
    color: '#0F380F',
  },
  typeText: {
    fontFamily: 'VT323',
    fontSize: 16,
    color: '#306230',
    marginTop: 2,
  },
});