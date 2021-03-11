import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TextInput } from 'react-native'

import firebase from '../db/firebaseDB';

import Card from './card/Card'
import CarItem from './card/CardItem'
import MyButton from './MyButton'
import CardItem from './card/CardItem'

export default FirebaseApp = () => {

  const [users, setUsers] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');

  useEffect(() => {
    listUsers();
  }, []);

  const listUsers = () => {
    firebase.firestore().collection('users').get().then(querySnapshot => {
        let users = []
        querySnapshot.forEach(
          documentSnapshot => {
            users.push(documentSnapshot.data())
          }
        );
        setUsers(users);
      });
  }

  const clearFields = () => {
    setCurso('');
    setIdade('');
    setNome('');
  }

  const renderUsers = () => {
    return (
      <FlatList
        data={users}
        renderItem={
          ({ item }) => {
            return (
              <View>
                <Text style={{ fontSize: 18 }}>Nome: {item.nome} - Curso: {item.curso} - Idade: {item.idade}</Text>
              </View>
            )
          }
        }
        keyExtractor={(item, index) => item + index}
      />
    )
  }

  addUser = () => {
    firebase.firestore().collection('users').add({
        nome: nome,
        idade: idade,
        curso: curso,
      }).then(() => {
        clearFields();
        listUsers();
      });
  }

  
  return (
    <Card>
       <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Nome"
          onChangeText={text => setNome(text)}
          defaultValue={nome}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Idade"
          onChangeText={text => setIdade(text)}
          defaultValue={idade}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Curso"
          onChangeText={text => setCurso(text)}
          defaultValue={curso}
        />
      </View>
      <View style={{padding: 10}}>
        <CardItem>
          <MyButton title='Add Aluno' onPress={addUser} />
        </CardItem>
      </View>
      <View style={{padding: 10}}>
        <CardItem>
          {renderUsers()}
        </CardItem>
        </View>
    </Card>
  )
}