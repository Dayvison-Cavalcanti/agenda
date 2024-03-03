import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'


export default function ListaContatos() {

  const navigation = useNavigation();

  return (
    <View style = {styles.container}>
      <View style={header.container}>
      <Header
           containerStyle={{backgroundColor:'#1874CD', width: '100%'}}
            centerComponent={{
              width: 300, 
              marginTop: 15,  
              text: 'Lista de Contatos', 
              style: { 
                color: '#EEEEE0', 
                fontSize:40,
                fontWeight:'bold' 
                }, 
                }}
            rightComponent={
                <Button 
                onPress={()=> navigation.navigate('CadastroContato')} 
                title="+"
                titleStyle ={{fontSize: 50,  fontWeight: 'bold', color:'#EEEEE0'}}
                buttonStyle= {{backgroundColor:'#8B81874CD83'}}
                
                ></Button>}
        />    
        <Button 
                onPress={()=> navigation.navigate('EditarContatos')} 
                title="Contato"
                titleStyle ={{fontSize: 50,  fontWeight: 'bold' }}
                buttonStyle= {{backgroundColor:'#8B8B83'}}
                
                ></Button> 
        <Button 
                onPress={()=> navigation.navigate('Login')} 
                title="Sair"
                titleStyle ={{fontSize: 50,  fontWeight: 'bold' }}
                buttonStyle= {{backgroundColor:'#8B8B83', marginTop: 30}}
                
                ></Button> 
      </View>



        

      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEE0',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});

const header = StyleSheet.create({
  container: {
    marginTop: 30
  
  },
});