import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const transactions = [
    {id:'1', title:'Apple Store', category:'Entertainment', amount: '-$5,99', icon: require('../assets/apple.png'), color: '#0D0D26'},
    {id:'2', title:'Spotify', category:'Music', amount: '-$12,99', icon: require('../assets/spotify.png'), color: '#0D0D26'},
    {id:'3', title:'Money Transfer ', category:'Transaction', amount: '$300', icon: require('../assets/moneyTransfer.png'), color: '#0552FF'},
    {id:'4', title:'Grocery', category:'Walmart', amount: '-$32,99', icon: require('../assets/grocery.png'), color: '#0D0D26'},
    {id:'5', title:'Bottles Haven', category:'Bottles', amount: '-$7,89', icon: require('../assets/apple.png'), color: '#0D0D26'},
    {id:'6', title:'Home Decor', category:'Shopping Center', amount: '$200', icon: require('../assets/home.png'), color: '#0552FF'},
    {id:'7', title:'Cards R Us', category:'Mall', amount: '$2,99', icon: require('../assets/myCards.png'), color: '#0552FF'},
    {id:'8', title:'Pentagon Halls', category:'Residence', amount: '-$6,99', icon: require('../assets/home.png'), color: '#0D0D26'},
]


export default function Transaction() {
    const renderItem = ({item}) => (
        <View style={styles.transactionSection}>
            <View style={styles.circle}>
                <Image source={item.icon} style={styles.icon} />
            </View>
            <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionCategory}>{item.category}</Text>
                <Text style={[styles.transactionAmount, {color: item.color}]}>{item.amount}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Transaction</Text>
                <Text style={styles.sellAll}>Sell all</Text>
            </View>
            <FlatList data={transactions} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.transactionList}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 180,
    },

    heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#0D0D26',
    },

    sellAll: {
        fontSize: 17,
        fontWeight: '600',
        color: '#0552FF',
        top: 7,
    },

    transactionList: {
        paddingHorizontal: 24,
        paddingBottom: 20,
        top: 15,
    },

    transactionSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },

    circle: {
        width: 50,
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        bottom: 10
    },

    icon: {
        width: 20,
        height: 20,
    },

    transactionDetails: {
        flex: 1,
    },

    transactionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#0D0D26',
        bottom: 2,
    },

    transactionCategory: {
        fontSize: 14,
        color: '#929292',
    },

    transactionAmount: {
        fontSize: 20,
        fontWeight: '600',
        color: '#0D0D26',
        textAlign: 'right',
        bottom: 30
    },
    
});