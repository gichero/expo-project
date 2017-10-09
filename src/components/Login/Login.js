//import libraries to create component
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm.js';

//make a component
export default class Login extends Component {
    render(){
        return (
            <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>

                <View style = {styles.logoContainer}>
                    <image style = {styles.logo}
                    source={require('../../images/lostfound.png')}
                    />
                    <Text style = {styles.title}>
                    An app that helps you find your lost items
                    </Text>
                </View>

                <View style = {styles.formContainer}>
                    <LoginForm />
                </View>

            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFFFFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});
