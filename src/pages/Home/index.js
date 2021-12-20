import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import { Register } from '../Register';


export function Home(){
  const [email, setEmail] =useState('');
  const [password, setPassword ] = useState('');

  const entrar = () => {
    return(
      <Register/>
    )
  }

  return(
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView style={ styles.background }>
            <StatusBar barStyle="light-content" backgroundColor="#222"/>
    
          <View style={styles.containerLogo} >
            <Image resizeMode='contain' source={require('./comunadaterra1.png') } />
          </View>
          
          <View>
            
              <View>
                <TextInput  
                  keyboardType='email-address'  
                  autoCorrect={false} 
                  placeholder="E-mail" 
                  style={styles.input} 
                />                
               
                <TextInput 
                  autoCorrect={false} 
                  placeholder="Senha" 
                  style={styles.input} 
                  secureTextEntry={true} 
                  onChangeText   onChangeText={() => setPassword(val)} />
                
                <TouchableOpacity>
                  <Text style={{ marginLeft:150, fontSize:10, marginBottom:30}}> Esqueci minha senha </Text>
                </TouchableOpacity>
              </View>
            
            
            <View style={styles.btns}>
              <TouchableOpacity onPress={() => "entrar"} style={styles.btnRegister}>
                <Text style={styles.txtRegister}>Cadastrar</Text>
              </TouchableOpacity >
              <TouchableOpacity onPress={() => entrar()} style={styles.btnLogon}>
                <Text>Iniciar</Text>
              </TouchableOpacity>
            </View>
    
            <View style={{alignItems:'center'}}>
              <TouchableOpacity >
                <Text style={{ color:'#09AB04', fontWeight:'bold', marginTop:40,  }}>Como funciona ?</Text>
              </TouchableOpacity>
            </View>
          </View> 
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
 )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  containerLogo:{
    flex: 1,
    justifyContent:'center',
    marginTop:40,
  },
  input:{
    backgroundColor: "#C4C4C4",
    marginTop:20,
    padding:15, 
    width:288, 
    height:58,
    borderRadius:20, 
  },
  btnRegister:{
    borderRadius:20,
    width: 146,
    height: 35,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#08AB04',
    borderWidth:1,
  },
  txtRegister:{
    color: '#08AB04',
    //fontFamily: 'Roboto',
  },
  btnLogon:{
    borderWidth:1,
    borderRadius:20,
    width: 80,
    height: 35,
    alignItems:'center',
    justifyContent:'center',
  },
btns:{
  flexDirection:'row',
  justifyContent:'space-between'
}
});

