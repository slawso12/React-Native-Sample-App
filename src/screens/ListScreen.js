import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 30 },
        { name: 'Friend #2', age: 25 },
        { name: 'Friend #3', age: 58 },
        { name: 'Friend #4', age: 79 },
        { name: 'Friend #5', age: 12 },
        { name: 'Friend #6', age: 33 },
        // { name: 'Friend #6', key: '6'}, the keyExtractor serves this purpose 
    ];

    return ( // keyExtractor can be in place of providing a key
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name}  - Age {item.age}</Text>
                );
            }}
        />
    );
};

// Rendering a Flat List


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;

/*FlatList Horizontal Scroll */
// horizontal
// showsHorizontalScrollIndicator={false}