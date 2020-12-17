import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default ()=> {
    console.warn('eu sou uma caixa amarela')
 return ( <Text style={Estilo.primeiro}> Primeiro componente! </Text>);
}