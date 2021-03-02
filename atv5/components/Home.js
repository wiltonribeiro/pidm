import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView } from "react-native";
import AlbumCard from "./AlbumCard";

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        height: "100%",
        padding: 20,
    }
});

export default ({ navigation }) => {
    const [albums, setAlbums] = useState([]);
    const url = "https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json";

    useEffect(() => { fetch(url).then(async response => setAlbums((await response.json()).albums)) }, []);

    return (
        <ScrollView style={styles.wrapper}>
            {
                albums.map(album => (
                    <AlbumCard navigation={navigation} album={album} key={album.id} />
                ))
            }
        </ScrollView>
    )
}