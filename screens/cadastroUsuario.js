import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'


export default function CadastroUsuario() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={header.container}>
        <Header

          containerStyle={{ backgroundColor: '#1874CD' }}
          centerComponent={{

            text: 'Usuário',
            style: {
              color: '#EEEEE0',
              fontSize: 40,
              fontWeight: 'bold'
            },
          }}
          leftComponent={
            <Button
              onPress={() => navigation.navigate('Login')}
              icon={
                <Icon
                  name="arrow-circle-left"
                  size={50}
                  color="white"
                />
              }
              titleStyle={{ fontSize: 50, fontWeight: 'bold' }}
              buttonStyle={{ backgroundColor: '#1874CD' }}

            ></Button>}
        />
      </View>

      <View style={{ width: '90%', marginTop: 20 }}>
        <Input
          label='Nome'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />

        <Input
          secureTextEntry={true}
          label='CPF'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />
        <Input
          secureTextEntry={true}
          label='E-mail'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />
        <Input
          secureTextEntry={true}
          label='Senha'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />

        <Button

          title="Salvar"
          buttonStyle={{ height: 'auto', marginTop: 10 }}
          titleStyle={{ fontSize: 50, fontWeight: 'bold' }}
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
    
  },
});

const header = StyleSheet.create({
  container: {
    
    width: '100%'

  },
});