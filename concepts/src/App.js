import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CompPadrao, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Text';
import Estilo from './components/estilo'

export default function(){
   return <View style={Estilo.txtG}>
      <CompPadrao  style={Estilo.txtG}/>
      <Primeiro style={Estilo.txtM}/>
      <Comp1 style={Estilo.txtP}/>
      <Comp2 />
   </View>
}

