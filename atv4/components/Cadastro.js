import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default Cadastro = (props) => {

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [email, setEmail] = useState(null);

    return (
        <View style={styles.view}>
            <Text style={styles.header}>
                Cadastro
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Nome:"
                onChangeText={(nome) => setNome({ nome })}
            />
            <TextInput
                style={styles.input}
                placeholder="Idade:"
                onChangeText={(idade) => setIdade({ idade })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email:"
                onChangeText={(email) => setEmail({ email })}
            />
            <View style={estilos.button}>
                <Button
                    title="Cadastrar"
                    onPress={() => this.props.navigation.navigate("Perfil",
                        {
                            nome: nome,
                            idade: idade,
                            email: email
                        }
                    )}
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