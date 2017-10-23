import React, {Component} from 'react';
import { Button, Card, CardSection, InputField } from './common';


class Register extends Component {
    render(){
        return(

            <Card>
                <CardSection>
                    <InputField
                        placeholder = 'username'
                    />
                </CardSection>
                <CardSection>
                    <InputField
                        placeholder = 'email'
                    />
                </CardSection>
                <CardSection>
                    <InputField
                        placeholder = 'DOB'
                    />
                </CardSection>
                <CardSection>
                    <InputField
                        placeholder = 'password'
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Sign Up
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default Register;
