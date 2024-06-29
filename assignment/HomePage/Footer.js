import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../ThemeContext';
import { lightTheme, darkTheme } from '../Themes';

export default function Footer() {
    const navigation = useNavigation();
    const route = useRoute()
    const {theme} = useTheme();
    const currentTheme = theme === 'light' ? lightStyles : darkStyles;

    const activeRoute = route.name;
    return(
        <View style={[styles.footer, currentTheme.footer]}>
            <TouchableOpacity style={styles.navigation} onPress={() => navigation.navigate('Home')}>
                <Image style={styles.icon} source={require('../assets/home.png')} />
                <Text style={[styles.title, currentTheme.text, activeRoute === 'Home' && styles.activePage]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation}>
                <Image style={styles.icon} source={require('../assets/myCards.png')} />
                <Text style={[styles.title, currentTheme.text]}>My Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation}>
                <Image style={styles.icon} source={require('../assets/statictics.png')} />
                <Text style={[styles.title, currentTheme.text]}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigation} onPress={() => navigation.navigate('Settings')}>
                <Image style={styles.icon} source={require('../assets/settings.png')} />
                <Text style={[styles.title, currentTheme.text, activeRoute === 'Settings' && styles.activePage]}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderColor: '#E7E7E7',
    },

    navigation: {
        alignItems: 'center',
    },

    icon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },

    title: {
        fontSize: 14,
    },

    activePage:{
        color: '#0552FF'
    }
});

const lightStyles = StyleSheet.create({
    footer: {
        backgroundColor: lightTheme.footerBackground,
    },
    text: {
        color: lightTheme.footerText,
    },
});

const darkStyles = StyleSheet.create({
    footer: {
        backgroundColor: darkTheme.footerBackground,
    },
    text: {
        color: darkTheme.footerText,
    },
});
