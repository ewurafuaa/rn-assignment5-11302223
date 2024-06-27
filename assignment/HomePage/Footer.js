import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
                <Image style={styles.footerIcon} source={require('../assets/home.png')} />
                <Text style={styles.home}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require('../assets/myCards.png')} />
                <Text style={styles.myCards}>My Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require('../assets/statictics.png')} />
                <Text style={styles.statistics}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Settings')}>
                <Image style={styles.footerIcon} source={require('../assets/settings.png')} />
                <Text style={styles.settings}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingVertical: 15,
    },

    footerItem: { 
        alignItems: 'center',
    },

    footerIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },

    home: {
        fontSize: 14,
        color: '#0552FF',
    },

    myCards: {
        fontSize: 14,
        color: '#929292',
    },

    statistics: {
        fontSize: 14,
        color: '#929292',
    },

    settings: {
        fontSize: 14,
        color: '#929292',
    },
})
