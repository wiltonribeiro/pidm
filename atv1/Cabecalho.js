import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default Cabecalho = (props) => {
  return (
    <View style={styles.container}>
        <Text>Nome: {props.nome} & Curso: {props.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
    },
});