//import library to help create component
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './src/Components/Login/Login.js';

//Create component
export default class Lost_found extends Component{
    render(){
        return(
            <Login />
        );
    }
}

AppRegistry.registerComponent('lost_found', () => Lost_found);
