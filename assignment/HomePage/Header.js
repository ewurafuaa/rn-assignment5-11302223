import { StyleSheet, View, Image, Text } from "react-native";

export default function Header(){
    return (
        <View style={styles.container}>
            <Image style={styles.profile} source={require('../assets/profile.png')}/>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.username}>Ewurafua Quansah</Text>
            <View style={styles.circle}>
                <Image style={styles.searchIcon} source={require('../assets/search.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        width: '100%',
        
    },

    profile: {
        width: 60,
        height: 60,
        top: 70,
        left: 70,
    },

    greeting: {
        fontSize: 16,
        width: 200,
        height: 30,
        left: 80,
        top: 75,
        color: "#929292",
        fontWeight: '400',
    },
    username: {
        fontSize: 24,
        fontWeight: '600',
        right: 160,
        top: 97,
        color: '#0D0D26',
        right: 120,
    },

    circle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FAFAFD",
        right: 70,
        top: 80,
    },

    searchIcon: {
        top: 12,
        left: 12,
        width: 25,
        height: 25,
    }
})
