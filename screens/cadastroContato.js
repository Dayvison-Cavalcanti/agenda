import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native"


export default function CadastroContato() {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={header.container}>
        <Header
          containerStyle={{ backgroundColor: '#1874CD', width: '100%' }}
          centerComponent={{
            width: -300,
            marginTop: 15,
            text: 'Contato',
            style: {
              color: '#EEEEE0',
              fontSize: 40,
              fontWeight: 'bold'
            },
          }}
          leftComponent={
            <Button
              onPress={()=> navigation.navigate('ListaContatos')}
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
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />

        <Input
          secureTextEntry={true}
          label='E-mail'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />

        <Input
          secureTextEntry={true}
          label='Telefone'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />


        <Button
          
          title="Salvar"
          buttonStyle={{ height: 'auto', marginTop: 20 }}
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
    marginTop: 30

  },
});