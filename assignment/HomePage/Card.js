import { StyleSheet, Image, View } from "react-native";

export default function Card(){
    return(
        <View style={styles.container}>
            <Image style={styles.card} source={require('../assets/Card.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
    }, 

    card: {
        top: 100,
        width: 380,
        height: 225,
    }
})