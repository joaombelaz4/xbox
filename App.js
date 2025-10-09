import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './components/TelaInicial';
import TelaJogos from './components/TelaJogos';
import TelaNuvem from './components/TelaNuvem';
import TelaConsoles from './components/TelaConsoles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={TelaInicial} options={{ title: 'Início' }} />
        <Stack.Screen name="Jogos" component={TelaJogos} options={{ title: 'Jogos' }} />
        <Stack.Screen name="Nuvem" component={TelaNuvem} options={{ title: 'Nuvem' }} />
        <Stack.Screen name="Consoles" component={TelaConsoles} options={{ title: 'Consoles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
