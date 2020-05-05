import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const CounterScreen = () => {
    
    // Array Destructuring 
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase"
                onPress={() => {
                    // Don't do this 
                    // counter++;
                    setCounter(counter + 1);
                    console.log(counter);
                }} />
            <Button title="Decrease"
                onPress={() => {
                    // counter--;
                    setCounter(counter - 1);
                    console.log(counter);
                }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;