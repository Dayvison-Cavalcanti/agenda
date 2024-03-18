import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

import axios from 'axios';


export default function CadastroContato({route}) {

  const nave = useNavigation();

  const [getNome, setNome] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getTelefone, setTelefone] = useState('');
  const [getId, setId] = useState();

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params
      const { email } = route.params
      const { telefone } = route.params
      const { id } = route.params
      setId(id)
      setNome(nome)
      setEmail(email)
      setTelefone(telefone)
    }

  }, [])

  async function inserirDados() {

    axios.post('http://192.168.1.13:3000/user', {
      nome: getNome,
      email: getEmail,
      telefone: getTelefone
    })
      .then(function (response) {
        setNome('');
        setEmail('');
        setTelefone('');
        showMessage({
          message: "Registro Cadastrado com sucesso",
          type: "success",
        });
        console.log(response);
        nave.navigate('ListaContatos'); // Navegação após a inserção bem-sucedida dos dados
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  function editarDados() {

    const result = axios.put('http://192.168.1.13:3000/user' + getId, {
      nome: getNome,
      email: getEmail,
      telefone: getTelefone
    })
      .then(function (response) {
        setNome('');
        setEmail('');
        setTelefone('');
        setId('');
        showMessage({
          message: "Registro Alterado com Sucesso!!",
          type: "success",
        });
        //navigation.navigate('Cadastro')
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  

  return (
    <View style={styles.container}>
      
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
              onPress={() => nave.navigate('ListaContatos')}
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
      

      <View style={{ width: '90%', marginTop: 20 }}>
        <Input
          label='Nome'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setNome(text)}
          value={getNome}
        />

        <Input

          label='E-mail'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setEmail(text)}
          value={getEmail}
        />

        <Input

          label='Telefone'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setTelefone(text)}
          value={getTelefone}
        />


        <Button

          title="Salvar"
          buttonStyle={{ height: 'auto', marginTop: 20 }}
          titleStyle={{ fontSize: 50, fontWeight: 'bold' }}
          onPress={() => inserirDados()}
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