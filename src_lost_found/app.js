import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm.js';
import Main from './components/Main.js';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
    apiKey: "AIzaSyD8a_FGoKw0qaP45KEQOzBosKLN1y8TjJM",
    authDomain: "lost-found-7ad3a.firebaseapp.com",
    databaseURL: "https://lost-found-7ad3a.firebaseio.com",
    projectId: "lost-found-7ad3a",
    storageBucket: "lost-found-7ad3a.appspot.com",
    messagingSenderId: "1053983236091"
  });
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }

        });
    }
    renderContent(){

        switch (this.state.loggedIn){
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                );

            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
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
                    {this.renderContent()}
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
