import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './Header';
import Card from './Card';


export default function HomePage(){
    return(
        <View style={styles.container}>
            <Header/>
            <Card/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
