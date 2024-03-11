import { StyleSheet, View, ScrollView} from 'react-native';
import { Header, ListItem, Avatar, Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function ListaContatos() {

  const navigation = useNavigation();
  const [dados, setDados] = useState([]);
  
const resgatarDados = function resgatarDados() {
  axios.get('http://localhost:3000/user')
    .then(function (response) {
      setDados(response.data)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
};

useEffect(() => {
  function resgatarDados() {
    axios.get('http://localhost:3000/user')
      .then(function (response) {
        setDados(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  };
  resgatarDados();
}, []);



const enviarDadosEditar = (dados) => {
  navigation.navigate('EditarContatos', { dados });
  
};




return (
  <ScrollView>
    <View style={styles.container}>

      <Header
        containerStyle={{ width: '100%',  backgroundColor: '#1874CD' }}
        centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize: 40, fontWeight: 'bold' } }}
        //rightComponent={{ icon: 'add', color: '#fff', size: 40,  }}
        rightComponent={<Icon

          name='add'
          type='font-awesome5'
          color='#fff'
          iconStyle={{ fontSize: 50 }}
          onPress={() => navigation.navigate('CadastroContato', resgatarDados())} />}

      />



      <View style={{ width: '100%' }} >
        
          {
            dados.map((l, i) => (
              <ListItem key={i} style={{borderBottomColor: '#1874CD', borderBottomWidth: 2}}  onPress={() => enviarDadosEditar({
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
    backgroundColor:'#1874CD',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});

const header = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '90%'

  },
});