import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="BUSCAR..."
        placeholderTextColor="#306230"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#8BAC0F',
    borderWidth: 3,
    borderColor: '#0F380F',
    fontFamily: 'VT323',
    fontSize: 22,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: '#0F380F',
  },
});