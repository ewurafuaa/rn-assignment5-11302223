import React from 'react';
import { ScrollView,StyleSheet, View} from 'react-native';
import Header from './Header';
import Card from './Card';
import Options from './Options';
import Transactions from './Transactions';
import Footer from '../Components/Footer';
import { useTheme } from '../Themes/ThemeContext';
import { lightTheme, darkTheme } from '../Themes/Themes';


export default function HomePage() {
    const {theme} = useTheme();
    const currentTheme = theme === 'light' ? lightTheme:darkTheme;
    return(
        <View style={[styles.container, {backgroundColor: currentTheme.background}]}>
            <ScrollView contentContainerStyle={[styles.scrollView, {backgroundColor: currentTheme.background}]}>
                <Header />
                <Card />
                <Options />
                <Transactions />
            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollView: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
});