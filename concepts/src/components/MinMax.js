import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default (props) => {
    console.warn(props);

    return(
        <Text style={Estilo.primeiro}>  valor {props.max} maior que valor {props.min} </Text>
    )
}