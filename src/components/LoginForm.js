//import libraries to create component
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

//make a component
export default class LoginForm extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <TextInput
                placeholder = 'username or email'
                placeholderTextColor = 'rgba(255,255,255,0.3)'
                returnKeyType = 'next'
                onSubmitEditing = {() => this.passwordInput.focus()}
                keyboardType = 'email-address'
                autoCapitalize = 'none'
                autoCorrect = {false}
                style = {styles.input}
                />
                <TextInput
                placeholder = 'password'
                placeholderTextColor = 'rgba(255,255,255,0.3)'
                returnKeyType = 'go'
                secureTextEntry
                style = {styles.input}
                ref = {(input) => this.passwordInput = input}
                />
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5,
        marginBottom:20,
        color: 'white',
        paddingHorizontal: 10
    },
    buttonContainer: {
        height: 40,
        backgroundColor: '#2980b9',
        borderRadius: 5,
        marginBottom: 20,
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '900'
    }
});
