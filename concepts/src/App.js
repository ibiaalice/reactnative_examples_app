import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MinMax from './components/MinMax'
import CompPadrao, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Text';


export default function(){
   return <View style={style.App}>
      {/* <CompPadrao />
      <Primeiro />
      <Comp1 />
      <Comp2 /> */}
      
      <MinMax min='3' max='20'/>

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