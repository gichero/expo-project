//import libraries to create component
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//make a component
export default class Login extends Component {
    render(){
        return (
            <View style = {styles.container}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    }
});
