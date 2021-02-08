import React from 'react';
import {View,Text,Image,Button} from 'react-native';

export default Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Sobre
            </Text>
            <Image
                source={require('../assets/icon.png')}
                style={{ width: 225, height: 300 }}
            />
            <View>
                <Text>Nome: Wilton</Text>
                <Text>Idade: 22</Text>
                <Text>E-mail: willrneto@gmail.com</Text>
            </View>
            <View style={estilos.button}>
                <Button
                    title="Home"
                    onPress={()=>this.props.navigation.navigate("Home")}
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