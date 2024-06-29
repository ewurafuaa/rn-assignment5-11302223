import React from 'react';
import { View, Text, Switch, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../ThemeContext';
import { lightTheme, darkTheme } from '../Themes';
import Footer from '../HomePage/Footer';

const Settings = () => {
    const navigation = useNavigation();
    const {theme, toggleTheme} = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return(
        <>
            <View style={[styles.container, {backgroundColor: currentTheme.background}]}>
                <Text style={[styles.heading, {color: currentTheme.text}]}>Settings</Text>
                <View style={[styles.options, {backgroundColor: currentTheme.background}]}>
                    <Text style={[styles.text, {color: currentTheme.text}]}>Language</Text>
                    <Image style={styles.arrowIcon} source={require('../assets/arrow.png')} />
                </View>
                <View style={[styles.options, {backgroundColor: currentTheme.background}]}>
                    <Text style={[styles.text, {color: currentTheme.text}]}>My Profile</Text>
                    <Image style={styles.arrowIcon} source={require("../assets/arrow.png")} />
                </View>
                <View style={[styles.options, {backgroundColor: currentTheme.background}]}>
                    <Text style={[styles.text, {color: currentTheme.text}]}>Contact Us</Text>
                    <Image style={styles.arrowIcon} source={require("../assets/arrow.png")} />
                </View>
                <View style={[styles.options, {backgroundColor: currentTheme.background}]}>
                    <Text style={[styles.text, {color: currentTheme.text}]}>Change Password</Text>
                    <Image style={styles.arrowIcon} source={require("../assets/arrow.png")} />
                </View>
                <View style={[styles.options, {backgroundColor: currentTheme.background}]}>
                    <Text style={[styles.text, {color: currentTheme.text}]}>Privacy Policy</Text>
                    <Image style={styles.arrowIcon} source={require("../assets/arrow.png")} />
                </View>
                <View style={[styles.themeCard, {backgroundColor: currentTheme.background}]}>
                    <Text style={[styles.theme, {color: currentTheme.text}]}>Theme</Text>
                    <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
                </View>
            </View>
            <Footer/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        top: 60
    },

    options: {
        padding: 16,
        marginBottom: 19,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 130,
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7', 
    },

    text: {
        fontSize: 20,
        fontWeight: '500'
    },

    themeCard: {
      padding: 16,
      marginBottom: 19,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: 160,
    }, 

    theme: {
        fontSize: 24,
        fontWeight: '600',
        
    },

    arrowIcon: {
        width: 24,
        height: 24,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FAFAFD',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#E7E7E7',
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
        color: '#929292',
    },

    myCards: {
        fontSize: 14,
        color: '#929292',
    },

    statistics: {
        fontSize: 14,
        color: '#929292',
    },

    settings:{
      color: '#0552FF'
    },

});

export default Settings;
