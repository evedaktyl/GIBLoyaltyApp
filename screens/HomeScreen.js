// HomeScreen.js
import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({navigation, onLayoutRootView}) {

    return (
      <View onLayout={onLayoutRootView} style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.rewardsText}>R E W A R D S</Text>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#838f8c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    bottom: 300,
    position: 'absolute'
  },
  rewardsText: {
    color: 'white',
    bottom: 270,
    fontFamily: 'Raleway-ThinItalic',
    position: 'absolute',
    fontSize: 17,
  },
  text: {
    color: 'black',
    fontFamily: 'Raleway-ThinItalic',
    top: 9,
    fontSize: 17,
    position: 'absolute'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    position: 'absolute',
    top: 518,
    width: 150,
    height: 40,
    borderRadius: 50,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    position: 'absolute',
    top: 568,
    width: 150,
    height: 40,
    borderRadius: 50,
  }
});