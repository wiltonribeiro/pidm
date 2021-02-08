import React from 'react';
import {View,Text,Button} from 'react-native';
import IMCCalc from './IMCCalc';

export default Resultado = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Resultado
            </Text>
            <IMCCalc
                altura={this.props.navigation.getParam("altura","0")}
                peso={this.props.navigation.getParam("peso","0")}
            />
            <View style={styles.button}>
                <Button
                    title="Sair"
                    onPress={()=>this.props.navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fafafa",
        margin: 20,
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 30,
        fontWeight: "bold",
    },
    view: {
        flexDirection: "column",
        marginBottom: 10,
    },
    button: {
        width: "100%",
        margin: 15,
    }
});