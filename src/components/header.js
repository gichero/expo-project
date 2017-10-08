//import libraries to create component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return(

    <View style = {viewStyle}>
        <Text style = { textStyle }>Lost and Found</Text>
    </View>

    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#e6f2ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColorOffset: { width: 0 height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 25
    }
};

//make the component available to other parts of the app
export default Header;
