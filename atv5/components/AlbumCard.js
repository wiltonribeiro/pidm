import React from 'react'
import { View, Button, StyleSheet, Text, Image } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: "#ddd",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#fafafa",
        width: "100%"
    },
    headerImage: {
        borderRadius: 8,
        height: 50,
        width: 50,
        marginRight: 15
    },
    image: {
        borderRadius: 16,
        height: 200,
        width: 200,
    },
    artist: {
        fontWeight: "bold"
    },
    buttons: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: 10,
    },
});

export default ({ navigation, album }) => {
    let image = { uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + album.image }

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Image source={image} style={styles.headerImage} />

                <View>
                    <Text style={styles.artist}>{album.artist}</Text>
                    <Text>{album.name}</Text>
                </View>
            </View>

            <Image source={image} style={styles.image} />

            <View style={styles.buttons}>
                <Button title="Músicas" onPress={() => navigation.navigate('AlbumDetails', { album })} />
                <Button title="Me Compre !" onPress={() => { }} />
            </View>
        </View>
    )
}