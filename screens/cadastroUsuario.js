import { StyleSheet, View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react';
import { app } from "../src/firebase/firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




export default function CadastroUsuario({route}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  useEffect(() => {
    if (route.params) {
      const { senha } = route.params
      const { email } = route.params
     const {confirmSenha} = route.params
      
      setNome(senha)
      setEmail(email)
      setConfirmSenha(confirmSenha)
     
    }

  }, [])


  function createUser() {
    const auth = getAuth();

    if (senha !== confirmSenha) {
      alert('Senhas diferentes, tente novamente.')
    } else {
      createUserWithEmailAndPassword(auth, email, senha, confirmSenha)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert('Cadastro Realizado com Sucesso.')
          navigation.navigate("Login")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
    };
  }

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
        {/*<Input
          label='Nome'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
        />

        <Input

          label='CPF'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
            />*/}
        <Input

          label='E-mail'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          secureTextEntry={true}
          label='Senha'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          value={senha}
          onChangeText={value => setSenha(value)}
          maxLength={8}

        />
        <Input
          secureTextEntry={true}
          label='Senha'
          labelStyle={{ fontSize: 40, padding: 2, color: '#00008b' }}
          inputStyle={{ height: 50, fontSize: 28, borderColor: 'gray', borderWidth: 1 }}
          value={confirmSenha}
          onChangeText={value => setConfirmSenha(value)}
          maxLength={8}

        />

        <Button

          title="Salvar"
          buttonStyle={{ height: 'auto', marginTop: 10 }}
          titleStyle={{ fontSize: 50, fontWeight: 'bold' }}
          onPress={() => createUser()}
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