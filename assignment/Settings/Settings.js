import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeContext';
import { lightTheme, darkTheme } from './Themes';

const Settings = () => {
    const navigation = useNavigation();
  const { theme, toggleTheme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Text style={[styles.title1, { color: currentTheme.text }]}>Settings</Text>
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.cardText, { color: currentTheme.text }]}>Language</Text>
      </View>
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.cardText, { color: currentTheme.text }]}>My Profile</Text>
      </View>
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.cardText, { color: currentTheme.text }]}>Contact Us</Text>
      </View>
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.cardText, { color: currentTheme.text }]}>Change Password</Text>
      </View>
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.cardText, { color: currentTheme.text }]}>Privacy Policy</Text>
      </View>
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        <Text style={[styles.cardText1, { color: currentTheme.text }]}>Theme</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
    <View style={styles.footer}>
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
        <Image style={styles.footerIcon} source={require("./assets/home.png")} />
        <Text style={styles.home}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
        <Image style={styles.footerIcon} source={require("./assets/myCards.png")} />
        <Text style={styles.myCards}>My Cards</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
        <Image style={styles.footerIcon} source={require("./assets/statictics.png")} />
        <Text style={styles.statistics}>Statistics</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Settings')}>
        <Image style={styles.footerIcon} source={require("./assets/settings.png")} />
        <Text style={styles.settings}>Settings</Text>
    </TouchableOpacity>
</View>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title1:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
  },
  cardText1: {
    fontSize: 18,
    fontWeight: "600"
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
  }

});

export default Settings;
