import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, ListItem, Avatar, Icon } from 'react-native-elements';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../src/firebase/firebase';
//import Icon from 'react-native-vector-icons/FontAwesome6';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'




export default function ListaContatos() {

  const navigation = useNavigation();
  const [dados, setDados] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      function resgatarDados() {
        axios.get('http://192.168.1.13:3000/user')
          .then(function (response) {
            setDados(response.data)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
      };
      resgatarDados();
    }, [])
  );




  function resgatarDados() {
    axios.get('http://192.168.1.13:3000/user')
      .then(function (response) {
        setDados(response.data)
        console.log(response);
        navigation.navigate('CadastroContato')
      })
      .catch(function (error) {
        console.log(error);
      })
  };





  const enviarDadosEditar = (dados) => {
    navigation.navigate('EditarContatos', { dados });

  };

  function logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.replace('Login')
      alert('deslogado')
    }).catch((error) => {
      error.message;
    });
  };



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Header
            leftContainerStyle={{ justifyContent: 'center' }}
            rightContainerStyle={{ justifyContent: 'center' }}
            containerStyle={{ width: '100%', backgroundColor: '#1874CD', alignItems: 'center' }}

            leftComponent={
              <TouchableOpacity onPress={() => logOut()}>
                <FontAwesomeIcon icon={faRightFromBracket}
                  style={{ color: '#fafafa' }}
                  size={40}
                />
              </TouchableOpacity>
            }
            centerComponent={{
              text: 'Lista de Contatos',
              style: {
                color: '#fff',
                fontSize: 35,
                fontWeight: 'bold'
              }
            }}

            rightComponent={
              <TouchableOpacity onPress={() => resgatarDados()}>
                <FontAwesomeIcon icon={faPlus}
                  style={{ color: '#fafafa' }}
                  size={40}
                />
              </TouchableOpacity>
            }

          />
        </View>


        <View style={{ width: '100%' }} >

          {
            dados.map((l, i) => (
              <ListItem key={i} style={{ borderBottomColor: '#1874CD', borderBottomWidth: 2 }} onPress={() => enviarDadosEditar({
                id: l.id,
                nome: l.nome,
                email: l.email,
                telefone: l.telefone,
              })
              }>

                <Avatar source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6016/6016872.png' }}
                  style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }}
                  avatarStyle={{ width: 60, height: 60 }} />
                <ListItem.Content  >

                  <ListItem.Title style={{ fontSize: 30 }}>{l.nome}</ListItem.Title>
                  <ListItem.Subtitle style={{ fontSize: 20 }}>{l.email}</ListItem.Subtitle>
                  <ListItem.Subtitle style={{ fontSize: 20 }}>{l.telefone}</ListItem.Subtitle>
                </ListItem.Content>

              </ListItem>
            ))
          }

        </View>



      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1874CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const header = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '90%'

  },
});