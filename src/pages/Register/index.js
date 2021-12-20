import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import {CheckBox, Button} from 'react-native-elements' 

import {SwiperFlatList} from 'react-native-swiper-flatlist'


export function Register(){
    const [isSelected, setSelected ] = useState(false)

    return(
        <ScrollView>
            <StatusBar barStyle="light-content" backgroundColor="#222"/>
            <KeyboardAvoidingView style={styles.background }>
                <SwiperFlatList  showPagination paginationActiveColor="green" paginationStyle={{width:10, marginBottom:60}}>
                    
                    <View style={{marginHorizontal:30, alignItems:'center',}}>
                        <View style={ styles.formHeader}>
                            <Text style={ styles.title}> Ficha de Cadastro </Text>
                            <Text style={{color:"#fff"}}> Ficha de cadastro, preencher para aderir às cestas agroflorestais - entrega em Ribeirão Preto / SP</Text>
                        </View>
            
                        <View>
                            <TextInput style={styles.input} placeholder="Nome:"/>                
                            <TextInput style={styles.input} placeholder="Data de Nascimento:" />                    
                            <TextInput style={styles.input} placeholder="WhatsApp:" />                    
                            <TextInput style={styles.input} placeholder="E-mail:" />                    
                            <TextInput style={styles.input} placeholder="Endereço:" />                    
                        </View>
            
                        <View>
                            <TouchableOpacity style={styles.submit}>
                                <Text style={{color:"#fff"}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 

                    <View style={{marginHorizontal:30,  alignItems:'center',}}>
                    <View style={ styles.formHeader}>
                            <Text style={ styles.title}> Ficha de Cadastro </Text>
                            <Text style={{color:"#fff"}}>Ficha de cadastro, preencher para aderir às cestas agroflorestais - entrega em Ribeirão Preto / SP</Text>
                        </View>
            
                        <View>
                            <View >
                                <CheckBox
                                    checkedIcon="check"
                                    checkedColor="green"
                                    checked={isSelected}
                                    onPress={() => setSelected(!isSelected) }
                                    
                                />
    
                            </View>                                              
                        </View>
            
                        <View>
                            <TouchableOpacity style={styles.submit}>
                                <Text style={{color:"#fff"}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginHorizontal:30,  alignItems:'center', justifyContent:'space-between'}}>
                    <View style={ styles.formHeader}>
                            <Text style={ styles.title}> Ficha de Cadastro </Text>
                            <Text style={{color:"#fff"}}> Ficha de cadastro, preencher para aderir às cestas agroflorestais - entrega em Ribeirão Preto / SP</Text>
                        </View>
            
                        <View>
                            <Text style={{ fontSize:15, fontWeight:'bold', color:'green'}}>
                                Parabéns, estamos quase finalizando !
                            </Text>
                            <TextInput style={styles.inputP3} placeholder="Antes de concluirmos, pode nos informar:"/>
                        </View>
            
                        <View>
                            
                            <CheckBox
                                    checkedIcon="check"
                                    checkedColor="green"
                                    checked={isSelected}
                                    onPress={() => setSelected(!isSelected) }/>
                            <Text style={{fontSize:8, fontWeight:'bold'}}>
                            Devo possuir o comprovante de pagamento caso seja necesário
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.submit}>
                                <Text style={{color:"#fff"}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </SwiperFlatList>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:22,
        color: '#fff',
        fontWeight:'bold'
    },
    formHeader:{
        backgroundColor:'#08AB04',
        height: 120,
        width: 317,
        padding: 10,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:27,
        marginBottom:13,
    },
    input:{
        backgroundColor:'#C4C4C4',
        marginTop:20,
        width: 317,
        height: 74,
        borderRadius:20,
        paddingLeft:10

    },
    inputP2:{
        backgroundColor:'#C4C4C4',
        marginTop:20,
        width: 317,
        height: 137,
        borderRadius:20,
        paddingLeft:10

    },
    inputP3:{
        backgroundColor:'#C4C4C4',
        marginTop:20,
        width: 317,
        height: 236,
        borderRadius:20,
        paddingLeft:10,
    },
    submit:{
        backgroundColor:'#08ab04',
        height: 39,
        width: 83,
        borderRadius:10,
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
        
        
        
    }
})