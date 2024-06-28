import React from 'react';
import { ScrollView,StyleSheet, View} from 'react-native';
import Header from './Header';
import Card from './Card';
import Options from './Options';
import Transaction from './Transactions';
import Footer from './Footer';


export default function HomePage() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Header />
                <Card />
                <Options />
                <Transaction />
            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
});