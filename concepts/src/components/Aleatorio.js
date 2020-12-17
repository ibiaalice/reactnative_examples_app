import React from 'react';
import {Text} from 'react-native';

import Estilo from './estilo';

export default props => {
    const delta = props.y - props.x + 1;
    const aleatorio = parseInt(Math.random() * delta);

    return(
        <Text style={Estilo.primeiro}>
            O Valor aleatório é {aleatorio}
        </Text>
    );
}