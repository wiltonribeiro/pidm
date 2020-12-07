import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Cabecalho';
import Disciplina from './Disciplina';
import Corpo from './Corpo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App.js - Atividade 1</Text>
      <Corpo/>
      <Text style={styles.header}>Cabeçalho:</Text>
      <Cabecalho nome="Wilton Neto" curso="Engenharia de Software" />
      <Text style={styles.header}>Disciplinas:</Text>
      <Disciplina nome="Projeto de Interface para Dispositivos Moveis"/>
      <Disciplina nome="Estágio 2"/>
      <Disciplina nome="Estágio 2"/>
      <Disciplina nome="TCC 2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20
  },
  header: {
    fontWeight : "bold"
  }
});
