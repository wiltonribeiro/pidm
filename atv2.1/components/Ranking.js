import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default Ranking = (props) => {

    const mostVotedCities = () => {
        const values = Object.keys(props.cities).map((city) => props.cities[city]);
        const maxValue = Math.max(...values);
    
        return Object.keys(props.cities).filter((city) => {
            if (props.cities[city] == maxValue && maxValue > 0) {
                return city;
            }
        });
    };

    const lessVotedCities = () => {
        const values = Object.keys(props.cities).map((city) => props.cities[city]);
        const minValue = Math.min(...values);
    
        return Object.keys(props.cities).filter((city) => {
            if (props.cities[city] == minValue) {
                return city;
            }
        });
    };
    
    return (
        <View style={styles.container}>
            <Text>Mais Votadas: {mostVotedCities().join(', ')}</Text>
            <Text>Menos Votadas: {lessVotedCities().join(', ')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        fontSize: 14
    },
    
});