import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MinMax from './components/MinMax'
import CompPadrao, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Text';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/botao'

export default function(){
   return <View style={style.App}>
      <Botao />

   </View>
}

const style = StyleSheet.create({
   App:{
      flexGrow: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   }
});