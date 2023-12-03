import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CarrinhoDeCompras = () => {
  const [carrinho, setCarrinho] = useState([
    
    { id: 1, nome: 'Pão', preco: 19.99 },
    { id: 2, nome: 'Bolo', preco: 29.99 },
    { id: 2, nome: 'Café da Manhã', preco: 60.00 },
    // Adicione mais itens conforme necessário
  ]);

  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach(item => {
      total += item.preco;
    });
    return total.toFixed(2); // Formata o total para duas casas decimais
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.nome}</Text>
      <Text>R$ {item.preco.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.total}>Total: R$ {calcularTotal()}</Text>
      <TouchableOpacity style={styles.botaoCheckout}>
        <Text style={styles.textoBotao}>Finalizar Compra</Text>
        
      </TouchableOpacity>
    </View>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
        backgroundColor: ''
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  botaoCheckout: {
    backgroundColor: 'rgb(160,82,45)',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CarrinhoDeCompras;

