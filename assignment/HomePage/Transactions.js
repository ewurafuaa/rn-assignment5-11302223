import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '../Themes/ThemeContext';
import { lightTheme, darkTheme } from '../Themes/Themes';

const transactions = [
    {id: '1', title: 'Apple Store', category: 'Entertainment', amount: '-$5.99', icon: require('../assets/apple.png'), color: '#0D0D26'},
    {id: '2', title: 'Spotify', category: 'Music', amount: '-$12.99', icon: require('../assets/spotify.png'), color: '#0D0D26'},
    {id: '3', title: 'Money Transfer', category: 'Transaction', amount: '$300', icon: require('../assets/moneyTransfer.png'), color: '#0552FF'},
    {id: '4', title: 'Grocery', category: 'Walmart', amount: '-$32.99', icon: require('../assets/grocery.png'), color: '#0D0D26'},
    {id: '5', title: 'Bottles Haven', category: 'Bottles', amount: '-$7.89', icon: require('../assets/apple.png'), color: '#0D0D26'},
    {id: '6', title: 'Home Decor', category: 'Shopping Center', amount: '$200', icon: require('../assets/home.png'), color: '#0552FF'},
    {id: '7', title: 'Cards R Us', category: 'Mall', amount: '$2.99', icon: require('../assets/myCards.png'), color: '#0552FF'},
    {id: '8', title: 'Pentagon Halls', category: 'Residence', amount: '-$6.99', icon: require('../assets/home.png'), color: '#0D0D26'},
];

export default function Transactions(){
    const {theme} = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    return(
        <View style={[styles.container, {backgroundColor: currentTheme.background}]}>
            <View style={styles.header}>
                <Text style={[styles.heading, {color: currentTheme.text}]}>Transaction</Text>
                <Text style={[styles.sellAll, {color: currentTheme.sellAll}]}>Sell all</Text>
            </View>
            {transactions.map((item) => (
                <View key={item.id} style={styles.transactionSection}>
                    <View style={[styles.circle, {backgroundColor: currentTheme.circleBackground}]}>
                        <Image source={item.icon} style={styles.icon} />
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={[styles.transactionTitle, {color: currentTheme.text}]}>{item.title}</Text>
                        <Text style={[styles.transactionCategory, {color: currentTheme.text}]}>{item.category}</Text>
                        <Text style={[styles.transactionAmount, {color: item.amount.startsWith('-') ? (theme === 'light' ? '#0D0D26' : '#FAFAFD') : '#0552FF'}]}>{item.amount}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 20,
        top: 160,
        height: 900
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 40,
    },

    heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#0D0D26',
        bottom: 18,
    },

    sellAll: {
        fontSize: 17,
        fontWeight: '600',
        color: '#0552FF',
        bottom: 12,
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
        bottom: 10,
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
        bottom: 35,
    },
});
