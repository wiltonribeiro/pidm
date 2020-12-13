import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Ranking from './Ranking';

export default VotingApp = () => {

    const [cities, setCities] = useState({
        'Quixadá': 0,
        'Sobral': 0,
        'Fortaleza': 0,
        'Russas': 0,
    });
    

    const vote = (city) => {
        let copy = {...cities};
        copy[city] += 1;
        setCities(copy);
    }

    const citiesView = () => Object.keys(cities).map((city) => {
        return (<Text  key={city} style={styles.label}>{city}: {cities[city]} votos</Text>);
    });

    const buttonsView = () =>  Object.keys(cities).map((city) => {
        return (<Button key={city} onPress={() => vote(city)} title={city}/>);
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Votação de Cidades</Text>
            <View>
                { citiesView() }
            </View>
            <Ranking cities={cities} />
            <View style={styles.buttons}>
                { buttonsView() }
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
    label: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row', 
        justifyContent:'space-between',
    }
})