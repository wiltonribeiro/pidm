import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default Disciplina = (props) => {
  return (
    <View style={styles.nome}>
        <Text> -> {props.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginBottom: 20,
    },
    class: {
        fontSize : 12
    }
});