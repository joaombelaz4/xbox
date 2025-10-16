import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './components/TelaInicial';
import TelaJogos from './components/TelaJogos';
import TelaNuvem from './components/TelaNuvem';
import TelaConsole from './components/TelaConsole';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={TelaInicial}/>
        <Stack.Screen name="Jogos" component={TelaJogos}/>
        <Stack.Screen name="Nuvem" component={TelaNuvem}/>
  <Stack.Screen name="Consoles" component={TelaConsole}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
