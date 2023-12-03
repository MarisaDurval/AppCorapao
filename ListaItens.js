import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';

const ProductList = ({ navigation, favorites, setFavorites, setCart}) => {
  const [cart, setCartLocal] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      id: 1009220,
      name: 'Pão de Queijo',
      category: 'pães',
      description: 'Crocante por fora e macio por dentro, é irresistível.',
      modified: '2020-04-04T19:01:59-0400',
      thumbnail: {
        path: 'https://essareceitafunciona.com.br/wp-content/uploads/2022/07/Pao-de-queijo-Essa-Receita-Funciona-9.jpg',
        extension: 'jpg',
      },
      price: 0.55,
    },
    {
      id: 1009221,
      name: 'Pão de Leite',
      category: 'pães',
      description: 'Macio e fofinho, perfeito para uma refeição completa.',
      modified: '2014-03-05T13:17:50-0500',
      thumbnail: {
        path: 'https://img-global.cpcdn.com/recipes/8541fb5e660f5b1c/1200x630cq70/photo.jpg',
        extension: 'jpg',
      },
      price: 0.85,
    },
    {
      id: 1009222,
      name: 'Pão de Sal',
      category: 'pães',
      description: 'O clássico do café da manhã brasileiro',
      modified: '2020-04-04T19:01:59-0400',
      thumbnail: {
        path: 'https://www.sabornamesa.com.br/media/k2/items/cache/f59fd3a46f2adbbd9dd6269010353971_XL.jpg',
        extension: 'jpg',
      },
      price: 0.75,
    },
    {
      id: 1009223,
      name: 'Bolo de Fubá',
      category: 'bolos',
      description:
        ' Sabor amanteigado e textura macia, é uma ótima opção para o café da manhã ou lanche',
      modified: '2020-04-04T19:01:59-0400',
      thumbnail: {
        path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvZdhPMpZQgd9FnrPBQypCPk0-KhlVd413A&usqp=CAU',
        extension: 'jpg',
      },
      price: 13.99,
    },
    {
      id: 1009224,
      name: 'Bolo de cenoura',
      category: 'bolos',
      description: 'Um ótimo acompanhamento para café, leite ou chá',
      modified: '2020-04-04T19:01:59-0400',
      thumbnail: {
        path: 'https://imagens-revista.vivadecora.com.br/uploads/2020/06/Bolo-de-cenoura-com-cobertura-Foto-Noticias-ao-Minuto.jpg',
        extension: 'jpg',
      },
      price: 13.0,
    },
    {
      id: 1009225,
      name: 'Bolo de Chocolate',
      category: 'bolos',
      description: 'O sabor do paraíso em uma fatia.',
      modified: '2013-09-18T11:15:29-0400',
      thumbnail: {
        path: 'https://cooknenjoy.com/wp-content/uploads/2022/05/Bolo-Aniversario-Matilda-02-1200x901.jpg',
        extension: 'jpg',
      },
      price: 13.99,
    },
    {
      id: 1009226,
      name: 'Kit Café da Manhã individual',
      category: 'cesta de café da manhã',
      description: 'Uma opção prática e saborosa para começar o dia.',
      modified: '2020-04-04T19:01:59-0400',
      thumbnail: {
        path: 'https://www.top5rio.com.br/uploads/58657c66ba764_gastronomia_cafe-da-manha_mercearia-da-praca.jpg',
        extension: 'jpg',
      },
      price: 34.99,
    },
    {
      id: 1009227,
      name: 'Kit Café da Manhã casal',
      category: 'cesta de café da manhã',
      description: 'Uma opção completa e nutritiva para começar o dia',
      modified: '2020-04-04T19:01:59-0400',
      thumbnail: {
        path: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTw7olkDUzwcV96LdYoZBkWm2VKu42hP60zy9sGCFqWDylM5KOs',
        extension: 'jpg',
      },
      price: 47.99,
    },
    {
      id: 1017228,
      name: 'Kit Café da manhã família',
      category: 'cesta de café da manhã',
      description: 'Uma seleção de produtos para um café da manhã especial.',
      modified: '2014-11-17T17:46:57-0500',
      thumbnail: {
        path: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR68DJSmfHYPY8FsZryMVcoFq3u_VGtrUD2dqulUS1yWtyJ37ao',
        extension: 'jpg',
      },
      price: 55.99,
    },
  ];


  const addToCart = (productId) => {
    const existingCartItem = cart.find((item) => item.id === productId);
    if (existingCartItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1, total: item.total + item.price };
        } else {
          return item;
        }
      });
      setCartLocal(updatedCart);
    } else {
      const productToAdd = DATA.find((item) => item.id === productId);
      const newCartItem = {
        id: productId,
        name: productToAdd.name,
        quantity: 1,
        price: productToAdd.price,
        total: productToAdd.price, 
      };
      setCartLocal([...cart, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    const existingCartItem = cart.find((item) => item.id === productId);

    if (existingCartItem) {
      if (existingCartItem.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1, total: item.total - item.price }
            : item
        );
        setCartLocal(updatedCart);
      } else {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCartLocal(updatedCart);
      }
    }
  };

  const openModal = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const formatCurrency = (price) => {
    return `R$${price.toFixed(2)}`;
  };

  const addToFavorites = (productId) => {
    const updatedFavorites = favorites.slice();
    const productIndex = favorites.findIndex((item) => item.id === productId);

    if (productIndex === -1) {
      const product = DATA.find((item) => item.id === productId);
      updatedFavorites.push(product);
    }
    setFavorites(updatedFavorites);
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    setFavorites(updatedFavorites);
  };

const ProductItem = ({ item }) => (
  <View style={styles.productItem}>
    <Pressable onPress={() => openModal(item)}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.thumbnail.path, // Corrected to thumbnail.uri
        }}
      />
      <Text style={styles.paragraph}>{item.name}</Text>
    </Pressable>
    <View style={styles.linha}>
      <Text style={styles.paragraph}>
        Unidade: {formatCurrency(item.price)}
      </Text>
    </View>
    <View style={styles.productButtons}>
      <Button
        title="Adicionar ao carrinho"
        onPress={() => {
          addToCart(item.id);
          setCart(cart);
        }}
        padding={10}
        color={'#b86021'}
      />
        <Button
          title="Remover"
          onPress={() => removeFromCart(item.id)}
          padding={10}
          color={'#b8214c'}
        />
        <Button
          title="Adicionar aos Favoritos"
          onPress={() => addToFavorites(item.id)}
          padding={10}
          color={'indianred'}
        />
    </View>
    <Text style={styles.paragraph}>
      Quantidade no Carrinho: {cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
    </Text>
    
  </View>
);

  const ShowProduct = ({ item }) => <ProductItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={ShowProduct}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{selectedProduct?.description}</Text>
            <Button title="Fechar" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'rgb(160,82,45)',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
  },
  
  productItem: {
  flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'floralwhite',
    transparent:10,
    borderRadius: 20,
    marginBottom: 10,
  },

  productButtons:{
    padding:5,
    borderRadius: 10,
    marginTop:10,
    marginEnd:4,
  },

  paragraph: {
    marginTop: 2,
    marginBottom: 4,
    marginHorizontal: 50,
    borderRadius: 10,
    padding: 8,
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFFAFA',
  },
  tinyLogo: {
    width: 200,
    height: 100,
    alignSelf: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ProductList;
