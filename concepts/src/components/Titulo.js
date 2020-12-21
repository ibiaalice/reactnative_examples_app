import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default props => {
    return (
        <View>
            <Text style={Estilo.txtG}>
                {props.principal}
            </Text>
            <Text style={Estilo.txtM}>
                {props.secundario}
            </Text>
        </View>
    )
}