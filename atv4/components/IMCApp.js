import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import IMCCalc from './IMCCalc';


export default IMCApp = () => {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [acao, setAcao] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Cálculo do IMC</Text>
            <View style={styles.view}>
                <Text>Peso:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu peso."
                    onChangeText={(peso) => setPeso(peso)}/>
            </View>
            <View style={styles.view}>
                <Text>Altura:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua altura."
                    onChangeText={(altura) => setAltura(altura)} />
            </View>
            <View style={styles.botao}>
                <Button title="CALCULAR" onPress={() => setAcao(true)}/>
            </View>
            <IMCCalc peso={peso} altura={altura} acao={acao} />
        </View>
    )
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
    input:{
        marginTop: 5,
        padding: 15,
        borderWidth: 2,
        borderColor: "#ddd",
    },
    botao: {
        width: "100%",
        margin: 15,
    }
})