// HomeScreen.js
import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function HomeScreen({ onLayoutRootView}) {
    return (
      <View onLayout={onLayoutRootView} style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.rewardsText}>R E W A R D S</Text>
        <StatusBar style="auto" />
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
  }
});