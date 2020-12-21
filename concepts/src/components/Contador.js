import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';



export default props =>{
    const [valor, setValor] = useState(0);

    const acrescenta = ()=> setValor(valor + 1);
    const diminui = ()=> setValor(valor - 1);

    return(
        <>
            <Text style={Estilo.txtG}>{valor}</Text>
            <Button title=' + ' onPress={acrescenta}/>
            <Button title=' -- ' onPress={diminui}/> 
        </>
    )
}