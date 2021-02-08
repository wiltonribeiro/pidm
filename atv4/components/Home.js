import React from 'react';
import {View,Text,Button} from 'react-native';

export default Home = () => {    
    return(
        <View style={styles.container}>
            <Text style={styles.header}>ATV 4</Text>
            <View style={styles.button}>
                <Button
                    title="Cadastro"
                    onPress={()=>this.props.navigation.navigate("Cadastro")}
                />
            </View>
            <View style={estilos.button}>
                <Button
                    title="IMC"
                    onPress={()=>this.props.navigation.navigate("IMC")}
                />
            </View>
            <View style={estilos.button}>
                <Button
                    title="Sobre"
                    onPress={()=>this.props.navigation.navigate("Sobre")}
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