import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IMCMsg from './IMCMsg';

export default IMCCalc = (props) => {
    if(props.altura==null || props.peso==null || !props.acao) return null;
    else {
        let imc = props.peso/(props.altura * props.altura);
        return (
            <View>
                <Text style={styles.label}>
                    IMC = {imc}
                </Text>
                <IMCMsg imc={imc}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        fontSize: 14
    },
});