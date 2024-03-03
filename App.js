import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import ListaContatos from './screens/listaContatos';
import EditarContatos from './screens/editarContatos';
import CadastroUsuario from './screens/cadastroUsuario';
import CadastroContato from './screens/cadastroContato';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} options={{ headerShown: false }} />
        <Stack.Screen name="EditarContatos" component={EditarContatos} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroContato" component={CadastroContato} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;