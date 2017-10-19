import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
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
                <Image
                    style = {styles.logo}
                    source = {require('./images/lostfound1.png')}
                />

                <Header headerText = "Lost and Found" />
                <LoginForm />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center'
    },
    logo: {
        width: 160,
        height: 160,
        opacity: 0.5,
        justifyContent: 'center'
    }
});

export default App;
