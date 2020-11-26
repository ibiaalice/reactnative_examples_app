import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CompPadrao, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Text';
import Estilo from './components/estilo';
import estilo from './components/estilo';

export default function(){
   return <View style={estilo.txtG}>
      <CompPadrao />
      <Primeiro />
      <Comp1 />
      <Comp2 />
   </View>
}

