import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputField = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle } = styles
    return(
        <View style = { containerStyle }>

            <TextInput
                autoCapitalize = 'none'
                secureTextEntry = { secureTextEntry }
                placeholder = { placeholder }
                autoCorrect = { false }
                style = { inputStyle }
                value = { value }
                onChangeText = { onChangeText }
                style = {{ height: 25, width: 300 }}

            />
        </View>
    );
};
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 18,
        lineHeight: 23,
        borderBottomWidth: 1,
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { InputField };
