import React, { useEffect, useState } from 'react'
import { View, Button, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        padding: 20
    },
    actions: {
        width: "100%",
        marginTop: 25,
        padding: 5,
    },
});

export default ({ navigation, route }) => {
    const { album } = route.params;
    const [musics, setMusics] = useState([]);
    const url = "https://raw.githubusercontent.com/san650/ten/master/apps/music" + album.links.musics;

    navigation.setOptions({ title: `.:${album.name}:.` });

    useEffect(() => { fetch(url).then(async response => setMusics((await response.json()).musics)) }, [album]);

    return (
        <View style={styles.wrapper}>
            {
                musics.map((track, key) => (
                    <Text key={track.id}>{key} - ({track.duration}) {track.title}</Text>
                ))
            }

            <View style={styles.actions}>
                <Button
                    title="Voltar"
                    onPress={() => navigation.pop()}
                />
            </View>
        </View>
    )
}