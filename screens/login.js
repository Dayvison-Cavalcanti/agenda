import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import { Avatar, Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'


export default function Login() {

 const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Avatar
        style={{ height: 150, width: 150, marginBottom: 50 }}
        size='xlarge'
        source={require('../src/user1.png' )}>

      </Avatar>

      <View style={{ height: 250, width: '80%', marginBottom: 40 }}>
        <Input
          label='Login'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />
    
        <Input
          secureTextEntry={true}
          label='Senha'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{height:50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>

      <View style={{ height: 60, width: '80%', marginTop: 10 }}>
        <Button
          onPress={() => navigation.navigate('ListaContatos')}
          title="Login"
          buttonStyle = {{height: 60, marginBottom: 20}}
          titleStyle = {{fontSize: 40}}
        />
        <Button
          title="Cadastre-se"  
          onPress={() => navigation.navigate('CadastroUsuario')}
          buttonStyle = {{height: 60, marginBottom: 20, backgroundColor: '#CD0000'}}
          titleStyle = {{fontSize: 40}}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
