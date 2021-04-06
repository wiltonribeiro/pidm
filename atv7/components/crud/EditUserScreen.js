import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import firebase from '../../db/firebaseDB'

import MyButton from '../MyButton'
import Card from '../card/Card'
import CardItem from '../card/CardItem'


export default class EditUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {name: this.props.route.params.name, id: this.props.route.params.id}
    }
    
    updateUser = () => {
      firebase.firestore()
        .collection('users')
        .doc(this.state.id)
        .update({
          name: this.state.name,
        })
        .then(() => {
          console.log('User updated!');
        });
    };

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>Edit User</Text>
                </CardItem>
                <CardItem>
                <TextInput
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                </CardItem>
                <CardItem>
                    <MyButton 
                        title='Update'
                        onPress={
                          () => {

                            this.updateUser()
                            this.props.route.params.goBackAndUpdateList();
                            this.props.navigation.goBack()
                          }}
                        />
                    <MyButton 
                        title='Back' 
                        onPress={() => this.props.navigation.goBack()}/>
                </CardItem>

            </Card>

             
        )
    }
}