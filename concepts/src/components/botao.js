import React from 'react';
import {Button} from 'react-native';

export default props =>{

    function executar(){
        console.warn('Executou');
    }

    return(
        <>
            <Button 
                title='executar'
                onPress={
                    executar
                }
            />

            <Button 
                title='executar'
                onPress={
                    () => console.warn('Executando...')
                }
            />
        </>
    );
}