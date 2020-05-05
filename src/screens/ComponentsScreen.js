import React from 'react';

import { Text, StyleSheet, View } from 'react-native';

// Create a component 

const ComponentsScreen = () => {
    const greeting = 'Just for testing purposes';
    const name = 'Stephon';

    return (
        <View>
            <Text>Getting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{greeting}</Text>
        </View>
    );
};

// Styling the component
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    } 
});

export default ComponentsScreen; 