import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default IMCMsg = (props)  => {
        let component = <View></View>;
        
        if (props.imc < 17) {
            component = <Text style={{...styles.label, ...styles.alert}}>Muito abaixo do peso.</Text>;
        } else if (props.imc < 18.49) {
            component = <Text style={{...styles.label, ...styles.alert}}>Abaixo do peso.</Text>;
        } else if (props.imc < 24.99) {
            component = <Text style={{...styles.label, ...styles.normal}}>Normal</Text>;
        } else if (props.imc < 29.99) {
            component = <Text style={{...styles.label, ...styles.alert}}>Acima do peso</Text>;
        } else {
            component = <Text style={{...styles.label, ...styles.alert}}>Obesidade</Text>;
        }

        return component;
}


const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        fontSize: 14
    },
    alert: {
        color: "red"
    },
    normal: {
        color: "blue"
    }
});