import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import firebase from '../../db/firebaseDB'

import MyButton from '../MyButton'
import Card from '../card/Card'
import CardItem from '../card/CardItem'


export default class AddUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {name:''}
    }

    addUser = async (name) => {
      firebase.firestore()
        .collection('users')
        .add({
          name: name,
        })
        .then(() => {
          console.log('User added!');
        });
    };

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>Add User</Text>
                </CardItem>
                <CardItem>
                <TextInput
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder='Enter name'
                />
                </CardItem>
                <CardItem>
                    <MyButton title='Add User' 
                    onPress={
                      () => {
                        this.addUser(this.state.name);
                        this.props.route.params.goBackAndUpdateList();
                        this.props.navigation.goBack();
                      }}
                    />
                    <MyButton title='Back' onPress={
                      () => {
                        this.props.navigation.goBack()
                      }}/>
                </CardItem>

            </Card>

             
        )
    }
}