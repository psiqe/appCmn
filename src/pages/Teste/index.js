import React, {useState } from "react";
import {View, TextInput, StyleSheet, Text} from 'react-native'

export  function Teste(){
    const [name, setName] = useState();
    const [nascimento, setNascimento] = useState();
    const [whatsapp, setWhatsApp] = useState();
    const [endereço, setEndereço] = useState();
    const [email, setEmail] = useState();

    return(
        <View style={styles.backgroud}>
            <View>
                <TextInput onChangeText={(val) => setName(val)} autoCorrect={true} placeholder="Nome" style={styles.input}  />
                <TextInput onChangeText={(val) => setNascimento(val)} autoCorrect={true} placeholder="Nascimento" style={styles.input}  />
                <TextInput  keyboardType='numeric' onChangeText={(val) => setWhatsApp(val)} autoCorrect={true} placeholder="WhatsApp" style={styles.input}  />
                <TextInput  onChangeText={(val) => setEndereço(val)} autoCorrect={true} placeholder="Endereço" style={styles.input}  />
                <TextInput  onChangeText={(val) => setEmail(val)} autoCorrect={true} placeholder="E-mail" style={styles.input}  />
            </View>
            <View>
                <Text> Prezado {name}, nascido {nascimento}, portador do WhatsApp {whatsapp}, email: {email} e residente em {endereço}; solicita os seguintes produtos: </Text>
            </View>
        </View>
        
    
    )}

    const styles = StyleSheet.create({
        input:{
            backgroundColor: "#C4C4C4",
            marginTop:20,
            padding:15, 
            width:288, 
            height:58,
            borderRadius:20, 
          },
        backgroud:{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        }  
    });