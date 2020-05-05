import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]); //useState variables colors && setColors

    return (
        <View>
            <Button
                title="Add A Color"
                onPress={() => {
                    setColors([...colors, randomRgb()]) // adding the colors array to a new array setColors
                }}
            />

            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => { // renders a random item for the array
                    // item === 'rgb(0, 0, 0)' random value
                    return (
                        <View
                            style={{ height: 100, width: 100, backgroundColor: item }}
                        />);
                }} />
        </View>

    );
};

// Helper method to generate random colors
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({

});

export default ColorScreen;

