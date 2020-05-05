import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput 
            style={styles.input}
            autoCaptialize="none"
            autoCorrect={false}
            value={name}
            onChangeText={newValue => setName(newValue)}/>
            <Text>My Name is {name}</Text>
            
            <Text>Enter Password: </Text>
            <TextInput 
            style={styles.input}
            autoCaptialize="none"
            autoCorrect={false}
            value={password}
            onChangeText={newValue => setPassword(newValue)}
            />
            {password.length < 4 ? <Text style={styles.validationmsg}>Password must be longer than 4 characters!</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 2
    },
    validationmsg: {
        color: 'red'
    }
});

export default TextScreen;