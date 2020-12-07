import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

export default Corpo = () => {
      let pic = {
        uri: 'https://reactnative.dev/img/header_logo.svg'
      };
      return (
        <View style={styles.container}>
            <Image source={pic} style={{width: 190, height: 110, marginTop:20}}/>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginBottom: 20,
    },
});