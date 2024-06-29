import { StyleSheet, View, Image, Text } from "react-native";
import { useTheme } from "../Themes/ThemeContext";
import { lightTheme, darkTheme } from "../Themes/Themes";

export default function Header(){
    const {theme} = useTheme();
    const currentTheme = theme === 'light' ? lightTheme:darkTheme;
    return(
        <View style={[styles.container, {backgroundColor: currentTheme.background}]}>
            <Image style={styles.profile} source={require('../assets/profile.png')}/>
            <View>
            <Text style={[styles.greeting, {color: currentTheme.greeting}]}>Welcome back,</Text>
            <Text style={[styles.username, {color: currentTheme.text}]}>Ewurafua Quansah</Text>
            </View>
            <View style={[styles.circle, {backgroundColor: currentTheme.circleBackground}]}>
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
        left: 20,
    },

    greeting: {
        fontSize: 16,
        width: 200,
        height: 30,
        right: 20,
        top: 75,
        color: "#929292",
        fontWeight: '400',
    },

    username: {
        fontSize: 24,
        fontWeight: '600',
        top: 67,
        color: '#0D0D26',
        right: 20,
    },

    circle: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FAFAFD",
        right: 20,
        top: 80,
    },

    searchIcon: {
        top: 12,
        left: 12,
        width: 25,
        height: 25,
    }
})


