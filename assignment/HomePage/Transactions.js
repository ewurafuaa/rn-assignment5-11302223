//Transactions.js
import { StyleSheet, Text, View, Image } from "react-native";

const transactions = [
    {id:1, title:'Apple Store', category:'Entertainment', amount: '-$5,99', icon: require('../assets/apple.png')},
    {id:2, title:'Spotify', category:'Music', amount: '-$12,99', icon: require('../assets/spotify.png')},
    {id:3, title:'Money Transfer ', category:'Transaction', amount: '$300', icon: require('../assets/moneyTransfer.png')},
    {id:4, title:'Grocery', category:'Walmart', amount: '-$5,99', icon: require('../assets/grocery.png')},
    {id:5, title:'Bottles Haven', category:'Bottles', amount: '-$5,99', icon: require('../assets/apple.png')},
    {id:6, title:'Home Decor', category:'Shopping Center', amount: '-$5,99', icon: require('../assets/home.png')},
    {id:7, title:'Cards R Us', category:'Mall', amount: '-$5,99', icon: require('../assets/myCards.png')},
    {id:8, title:'Pentagon Halls', category:'Residence', amount: '-$5,99', icon: require('../assets/home.png')},
]

export default function Transaction(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Transaction</Text>
                <Text style={styles.sellAll}>Sell all</Text>
                <View style={styles.transactionList}>
                    {transactions.map((transaction) => (
                        <View key={transaction.id} style ={styles.transactionSection}>
                            <View style={styles.circle}>
                            <Image source={transaction.icon} style={styles.icon} />
                            </View>
                            <View style={styles.transactionDetails}>
                                <Text style={styles.transactionTitle}>{transaction.title}</Text>
                                <Text style={styles.transactionCategory}>{transaction.category}</Text>
                                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 0,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 30,
    },

    heading: {
        width: 127,
        height: 25,
        fontSize: 24,
        fontWeight: '600',
        color: '#0D0D26',
        top: 155,
    },

    sellAll: {
        width: 60,
        height: 21,
        fontSize: 17,
        fontWeight: '600',
        color: '#0552FF',
        lineHeight: 20.8,
        top: 160,
        left: 100,
    },

    transactionList: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        top: 40
    },

    transactionSection: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        right: 340,
        top: 160,
        marginBottom: 30,
    },

    circle: {
        width: 40,
        height: 40,
        color: '#F5F5F5',
        borderRadius: 30,
    }, 

    icon:{
        
    },
})