import { StyleSheet, View, Image, Text } from "react-native";

export default function Options(){
    return(
        <View style={styles.container}>
            <View style={styles.circle1}>
                <Image style={styles.sent} source={require('../assets/send.png')}></Image>
                <Text style={styles.sentText}>Sent</Text>
            </View>

            <View style={styles.circle2}>
                <Image style={styles.receive} source={require('../assets/recieve.png')}></Image>
                <Text style={styles.receiveText}>Receive</Text>
            </View>

            <View style={styles.circle3}>
                <Image style={styles.loan} source={require('../assets/loan.png')}></Image>
                <Text style={styles.loanText}>Loan</Text>
            </View>

            <View style={styles.circle4}>
                <Image style={styles.topUp} source={require('../assets/topUp.png')}></Image>
                <Text style={styles.topUpText}>Topup</Text>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 420,
    },

    circle1: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        top: 130,
        right: 70,
    },

    sent: {
        top: 17,
        left: 20,
        width: 20,
        height: 25,
    },

    sentText:{
        fontWeight: '400',
        fontSize: 16,
        top: 40,
        left: 14,
    },

    circle2: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        top: 130,
        right: 25,
    },

    receive: {
        top: 17,
        left: 20,
        width: 20,
        height: 25,
    },

    receiveText:{
        fontWeight: '400',
        fontSize: 16,
        top: 40,
        left: 2,
    },

    circle3: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        top: 130,
        left: 19,
    },

    loan: {
        top: 17,
        left: 18,
        width: 25,
        height: 25,
    },

    loanText:{
        fontWeight: '400',
        fontSize: 16,
        top: 40,
        left: 12,
    },

    circle4: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        top: 130,
        left: 60,
    },

    topUp: {
        top: 17,
        left: 18,
        width: 25,
        height: 26,
    },

    topUpText:{
        fontWeight: '400',
        fontSize: 16,
        top: 40,
        left: 6,
    },
})

