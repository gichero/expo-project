import React, { Component } from 'react';
import { Text } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, InputField, Spinner } from './common';
import SignUp from './SignUp.js';


class LoginForm extends Component {

    // linker(comp){
    //     this.props.navigator.push({
    //         component: comp
    //     })
    // }

    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {

            const {email, password} = this.state;

            this.setState({ loading: true });

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
    }

    onLoginFail(){
        this.setState({
            error: 'Authentication Failed Miserably!!!',
            loading: false
        });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size='large'/>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    render(){
        return(

            <Card>
                <CardSection>
                    <InputField
                        placeholder = 'username or email'
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                     />
                </CardSection>

                <CardSection>
                    <InputField
                        secureTextEntry
                        placeholder = 'password'
                        value={this.state.password}
                        onChangeText={password => this.setState({password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <CardSection>
                    <Button >
                        Sign Up
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
            fontSize: 20,
            alignSelf: 'center',
            color: 'red'
    }
};


export default LoginForm;
