import React from 'react';
import { View, Button, StyleSheet,Image, ImageBackground,Text , TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ListaItens from './ListaItens';


const CategoriaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./pao.png")} resizeMode="cover" style={styles.appImage} imageStyle={{ opacity: 2.0 }}>
        <View style={styles.separator}>
          <Button
            title="Pães"
            onPress={() => navigation.navigate('ListaItens', { category: 'pães' })} color="#B84221"
          />
        </View>

        <View style={styles.separator}>
          <Button
            title="Bolos"
            onPress={() => navigation.navigate('ListaItens', { category: 'bolos' })} color="#B86021"
          />
        </View>

        <View style={styles.separator}>
          <Button
            title="Cesta de Café da Manhã"
            onPress={() => navigation.navigate('ListaItens', { category: 'cesta de café da manhã' })} color="#B84221"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categoria" component={CategoriaScreen} />
        <Stack.Screen name="ListaItens" component={ListaItens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1 ,
    justifyContent: 'center',
    padding: 20
  },
  separator: {  
    padding: 6

    },
      appImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'black'
   
  },
});
export default CategoriaScreen;
