import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from './Login';
import Cadastro from './Cadastro';
import Perfil from './Perfil';
import Categorias from './Categorias';
import ListaItens from './ListaItens';
import Carrinho from './Carrinho'
import Pagamento from './Pagamento';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Categorias" component={Categorias} />
        <Tab.Screen name="Listaitens" component={ListaItens} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
        <Tab.Screen name="Pagamento" component={Pagamento} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

