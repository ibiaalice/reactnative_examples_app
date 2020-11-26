import React from 'react';
import {View, Text} from 'react-native';

import CompPadrao, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Text';

export default function(){
   return <View>
      <CompPadrao />
      <Primeiro />
      <Comp1 />
      <Comp2 />
   </View>
}