import React, { Component } from 'react';
import { Text } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, InputField, Spinner } from './common';
import Register from './Register.js';


class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    onLogInButtonPress() {

            const {email, password} = this.state;

            this.setState({ error: '', loading: true });

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLogInSuccess.bind(this))
            .catch(()=> {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLogInSuccess.bind(this))
                .catch(this.onLogInFail.bind(this));
            });
    }

    onLogInFail(){
        this.setState({
            error: 'Authentication Failed Miserably!!!',
            loading: false
        });
    }


    onLogInSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderLogInButton(){
        if(this.state.loading){
            return <Spinner size='large'/>;
        }
        return (
            <Button onPress={this.onLogInButtonPress.bind(this)}>
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
                    {this.renderLogInButton()}
                </CardSection>
                <CardSection>
                <Button>
                    Register
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
