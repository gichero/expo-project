import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';


class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCdPN7NRi4dqtElfhN2Cd-guAKv5p-Xjjw',
            authDomain: 'lost-and-found-7d6be.firebaseapp.com',
            databaseURL: 'https://lost-and-found-7d6be.firebaseio.com',
            projectId: 'lost-and-found-7d6be',
            storageBucket: 'lost-and-found-7d6be.appspot.com',
            messagingSenderId: '664036138349'
        });
    }

    render(){
        return(
            <View style = {styles.container}>

                <Header headerText = "Lost and Found" />
                <View style = {styles.logoContainer}>
                    <Image
                        style = {styles.logo}
                        source = {require('./images/lostfound1.png')}
                    />
                    <Text style = {styles.textStyle}>
                        The app that helps you post and find lost items
                    </Text>
                </View>
                <LoginForm />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 160,
        height: 160,
        opacity: 0.5,
    },
    textStyle: {
        color: '#FFFFFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.7
    }
});

export default App;
