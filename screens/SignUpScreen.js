import React, { useState } from 'react';
import { Image, View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = () => {
      // Basic validation
      if (email === '' || password === '') {
        Alert.alert('Please fill all the fields');
        return;
      }
  
      // Firebase email/password authentication
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('Registered with:', user.email);
          // Navigate to the Profile screen or other appropriate place
          // navigation.navigate('Profile');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert('Registration Failed', errorMessage);
        });
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#838f8c',
    },
    input: {
      height: 40,
      marginBottom: 20,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 12
    },
    text: {
        color: 'white',
    },
    button: {
      backgroundColor: '#000000', // Example button color
      padding: 10,
      borderRadius: 12,
      alignItems: 'center',
    }
  });
  
  export default SignUpScreen;