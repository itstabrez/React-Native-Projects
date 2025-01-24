import { StyleSheet, Text, View ,TouchableOpacity , TextInput } from 'react-native'
import React from 'react'

export default function ForgotPasswordScreen() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Forgot Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      );
    }

    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          backgroundColor: '#fff',
        },
        title: {
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center',
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginBottom: 15,
        },
        button: {
          backgroundColor: '#007BFF',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
          marginBottom: 10,
        },
        buttonText: {
          color: '#fff',
          fontWeight: 'bold',
        },
      });