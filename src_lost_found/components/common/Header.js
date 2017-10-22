// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '700'
  }
};

// Make the component available to other parts of the app
export { Header };
