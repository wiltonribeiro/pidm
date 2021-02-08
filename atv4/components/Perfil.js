import React from 'react';
import {View,Text,Image,Button} from 'react-native';

export default Perfil = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Perfil
            </Text>
            <Image
                source={require('../assets/icon.png')}
                style={{ width: 225, height: 300 }}
            />
            <View>
                <Text>Nome: {props.navigation.getParam("nome","Fulano")}</Text>
                <Text>Idade: {props.navigation.getParam("idade","Fulano")}</Text>
                <Text>E-mail: {props.navigation.getParam("email","Fulano")}</Text>
            </View>
            <View style={styles.button}>
                <Button
                    title="Home"
                    onPress={()=>props.navigation.navigate("Home")}
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