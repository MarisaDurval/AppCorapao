import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProdutosScreen = ({ route }) => {
  const { categoria } = route.params;

  // Lógica para carregar produtos com base na categoria selecionada

  return (
    <View style={styles.container}>
      <Text>Produtos da categoria: {categoria}</Text>
      {/* Renderize a lista de produtos aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProdutosScreen;