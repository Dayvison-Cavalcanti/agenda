import { StyleSheet, View,} from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { showMessage } from "react-native-flash-message";
import axios from 'axios';


export default function EditarContatos() {
  const navigation = useNavigation();
  const route = useRoute();
  const { dados } = route.params;

  const [getNome, setNome] = useState(dados.nome);
  const [getEmail, setEmail] = useState(dados.email);
  const [getTelefone, setTelefone] = useState(dados.telefone);




  function editarDados() {
    axios.put('http://192.168.1.13:3000/user/' + dados.id, {
      nome: getNome,
      email: getEmail,
      telefone: getTelefone
    })
      .then(function (response) {
        setNome('');
        setEmail('');
        setTelefone('');
        showMessage({
          message: "Registro Alterado com Sucesso!!",
          type: "success",
        });
        console.log(response);
        navigation.navigate('ListaContatos')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function excluirDados(){
    axios.delete('http://192.168.1.13:3000/user/'+ dados.id
   )
   .then(function (response) {
       setNome('')
       setEmail('')
       setTelefone('')
       showMessage({
           message: "Registro excluído com sucesso!",
           type: "success",
         });
     console.log(response);
     navigation.navigate('ListaContatos');
   })
   .catch(function (error) {
       showMessage({
           message: "Algum erro aconteceu!",
           type: "info",
         });
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
              onPress={() => navigation.navigate('ListaContatos')}
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
          value={getNome}
          onChangeText={text => setNome(text)}
        />

        <Input

          label='E-mail'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          value={getEmail}
          onChangeText={text => setEmail(text)}
        />

        <Input

          label='Telefone'
          labelStyle={{ fontSize: 40, padding: 10, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          value={getTelefone}
          onChangeText={text => setTelefone(text)}
        />


        <Button
          title="Alterar"
          buttonStyle={{ height: 'auto', marginTop: 20 }}
          titleStyle={{ fontSize: 50, fontWeight: 'bold' }}
          onPress={() => editarDados()}
        />
        <Button
          onPress={()=> excluirDados()}
          title="Excluir"
          buttonStyle={{ height: 'auto', marginTop: 20, backgroundColor: '#CD0000' }}
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