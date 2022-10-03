import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
// import Cadastrar from './Screens/Cadastrar';
// import Listar from './Screens/Listar';
// import Deletar from './Screens/Deletar';
// import Alterar from './Screens/Alterar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Listar" component={Listar} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}